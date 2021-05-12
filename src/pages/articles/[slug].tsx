import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../../services/api';

import { ArticleDetail } from '../../components/ArticleDetail';
import { Container } from '../../styles/pages/article';

type Rendered = {
    rendered: string;
}

type Author = {
    display_name: string;
}

type FeaturedImage = {
    full: Array<string>;
}

type Post = {
    title: Rendered;
    uagb_author_info: Author;
    excerpt: Rendered;
    slug: string;
    date: string;
    uagb_featured_image_src: FeaturedImage;
    content: Rendered;
}

interface Props {
    post: Post;
}

export default function Article({ post }: Props) {
    return (
      <Container>
          <ArticleDetail post={post} />
      </Container>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;
    let { data } = await api.get(`posts?slug=${slug}`);
    let post = {};
    if(data){
        data = data[0];

        post = {
            ...data,
            date: format(parseISO(data.date), 'eeee - dd/MM/yyyy', { locale: ptBR }),
        }
    }
    
    return {
        props: {
            post,
        },
        revalidate: 60 * 60 * 24,
    };
};