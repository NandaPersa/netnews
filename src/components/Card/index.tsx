import React from 'react';
import { Button } from './Button';
import { Container, ActionContainer } from './styles';

type Rendered = {
    rendered: string;
}

type Author = {
    display_name: string;
}

type Post = {
    title: Rendered;
    uagb_author_info: Author;
    excerpt: Rendered;
    slug: string;
    date: string;
}

interface Props {
    post: Post;
}

export function Card ({ post }: Props) {
    return (
        <Container>
            <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
            <p className="info">{ post.date } |  { post.uagb_author_info.display_name }</p>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <ActionContainer>
                <Button link={`articles/${post.slug}`}>Saiba Mais</Button>
            </ActionContainer>
        </Container>
    );
}