import { GetServerSideProps } from 'next';
import React from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Card } from '../components/Card';
import { api } from '../services/api';
import { Container } from '../styles/pages/index';

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
  id: number;
  title: Rendered;
  uagb_author_info: Author;
  excerpt: Rendered;
  slug: string;
  date: string;
  uagb_featured_image_src: FeaturedImage;
  content: Rendered;
}

interface Props {
  posts: Array<Post>;
}

export default function Home({ posts }: Props) {
  return (
    <Container >
      {posts.length > 0 && posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </Container>

  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('posts', {
    params: {
      _sort: 'date',
      _order: 'desc'
    }
  });

  const posts = data.map(post => {
    return { 
      ...post,
      date: format(parseISO(post.date), 'eeee - dd/MM/yyyy', { locale: ptBR }),
    }
  });

  return {
    props: {
      posts,
    },
  };
};