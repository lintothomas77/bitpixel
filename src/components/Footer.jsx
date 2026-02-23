import styled from 'styled-components';
import { Container } from '../styles/shared.jsx';

const Footer = styled.footer`background:var(--c-surface);border-top:1px solid var(--c-border);padding:4rem 0 2rem;`;
const Grid = styled.div`
  display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem;
  @media(max-width:1024px){grid-template-columns:1fr 1fr;gap:2rem;}
  @media(max-width:768px) {grid-template-columns:1fr;}
`;
const Brand = styled.div``;
const LogoLink = styled.a`display:flex;align-items:center;margin-bottom:1rem;`;
const LogoImg = styled.img`height:56px;width:auto;display:block;filter:brightness(1.1);`;
const Tagline = styled.p`font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--c-text-muted);margin-bottom:.5rem;`;
const Desc = styled.p`font-size:.88rem;color:var(--c-text-muted);line-height:1.7;max-width:280px;`;
const Col = styled.div`
  ul{display:flex;flex-direction:column;gap:.75rem;}
  a{font-size:.9rem;color:var(--c-text-muted);transition:color var(--t-fast);&:hover{color:var(--c-text);}}
`;
const Heading = styled.h4`font-size:.8rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--c-text-muted);margin-bottom:1.25rem;`;
const Socials = styled.div`display:flex;gap:.75rem;flex-wrap:wrap;`;
const SocialLink = styled.a`
  width:38px;height:38px;border-radius:50%;
  background:rgba(255,255,255,.04);border:1px solid var(--c-border);
  display:flex;align-items:center;justify-content:center;color:var(--c-text-muted);
  transition:all var(--t-fast);
  &:hover{background:var(--c-primary-dim);border-color:var(--c-primary);color:var(--c-primary);transform:translateY(-3px);}
`;
const Bottom = styled.div`
  padding-top:2rem;border-top:1px solid var(--c-border);
  display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;
  p{font-size:.85rem;color:var(--c-text-muted);}
  span{color:#ff6b6b;}
  @media(max-width:768px){flex-direction:column;text-align:center;}
`;

const SOCIAL_PATHS = [
    { label: 'Facebook', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { label: 'X (Twitter)', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export default function SiteFooter() {
    return (
        <Footer role="contentinfo">
            <Container>
                <Grid>
                    <Brand>
                        <LogoLink href="#home"><LogoImg src="images/logo-v02.png" alt="BitPixel Solutions" /></LogoLink>
                        <Tagline>BITPIXEL SOLUTIONS PRIVATE LIMITED</Tagline>
                        <Desc>Transforming bits and pixels into intelligent digital products since 2019.</Desc>
                    </Brand>
                    <Col>
                        <Heading>Services</Heading>
                        <ul>
                            <li><a href="#services">Branding &amp; UI/UX</a></li>
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">Mobile Development</a></li>
                            <li><a href="#contact">IT Consulting</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <Heading>Company</Heading>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#team">Our Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <Heading>Follow Us</Heading>
                        <Socials>
                            {SOCIAL_PATHS.map(s => (
                                <SocialLink key={s.label} href="#" aria-label={s.label}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d={s.d} />
                                    </svg>
                                </SocialLink>
                            ))}
                        </Socials>
                    </Col>
                </Grid>
                <Bottom>
                    <p>&copy; 2026 BitPixel Solutions Private Limited. All rights reserved.</p>
                    <p>Crafted with <span aria-label="love">♥</span> in Bengaluru, India</p>
                </Bottom>
            </Container>
        </Footer>
    );
}
