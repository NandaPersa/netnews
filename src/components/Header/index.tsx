import { Container } from './styles';
import Link from 'next/link';

export function Header () {
    return (
        <Container>
            <Link href="/">
                <img src="/assets/logo.png" alt="Netshow.me News"/>
            </Link>
        </Container>
    );
}