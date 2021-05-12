import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Container } from './styles';

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

export function ArticleDetail ({ post }: Props) {
    return (
        <Container>
            <Image 
                  width={1120}
                  height={420} 
                  src={post.uagb_featured_image_src.full[0]}
                  alt={post.title.rendered}
                  objectFit="cover"
                  />
            <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h1>
            <p className="info">{ post.date } | { post.uagb_author_info.display_name } </p>
            <div className="content" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            <div className="back">
                <Link href={`/`}>Voltar para página inicial</Link>
            </div>
        </Container>
    );
}