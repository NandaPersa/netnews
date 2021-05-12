import { Container } from './styles';
import Link from 'next/link';

interface Props {
    children: string;
    link: string;
}

export function Button ({children, link}: Props) {
    return (
        <Link href={link}>
            <Container>
                {children}
            </Container>
        </Link>
    );
}