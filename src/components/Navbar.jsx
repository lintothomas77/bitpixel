import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Btn } from '../styles/shared.jsx';

/* ── Styled Components ───────────────────────────────────────── */
const Nav = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-h);
  display: flex; align-items: center;
  transition: background var(--t-base), box-shadow var(--t-base), backdrop-filter var(--t-base);
  ${({ $scrolled }) => $scrolled && `
    background: rgba(10,10,20,0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 var(--c-border), 0 8px 32px rgba(0,0,0,0.4);
  `}
`;

const NavContainer = styled.div`
  max-width: 1200px; width: 100%; margin: 0 auto;
  padding: 0 1.5rem;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
`;

const NavLogo = styled.a`
  display: flex; align-items: center; gap: 0.65rem;
  font-family: var(--f-heading); font-size: 1.25rem; font-weight: 700;
  color: var(--c-text); text-decoration: none;
`;

const LogoImg = styled.img`
  height: 50px; width: auto; display: block;
  filter: drop-shadow(0 0 6px rgba(33,150,243,0.35));
  flex-shrink: 0;
`;

const NavLinks = styled.ul`
  display: flex; align-items: center; gap: 0.25rem;
  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: fixed; inset: 0;
    background: rgba(10,10,20,0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center; align-items: center;
    gap: 1.5rem; z-index: 9;
  }
`;

const NavLink = styled.a`
  color: var(--c-text-muted); font-size: 0.95rem; font-weight: 500;
  padding: 0.4em 0.9em; border-radius: 100px;
  transition: color var(--t-fast), background var(--t-fast);
  &:hover { color: var(--c-text); background: rgba(255,255,255,0.06); }
  @media (max-width: 768px) { font-size: 1.3rem; }
`;

const Hamburger = styled.button`
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 0.5rem; z-index: 10;
  span {
    display: block; width: 24px; height: 2px;
    background: var(--c-text); border-radius: 2px;
    transition: all var(--t-base);
  }
  ${({ $open }) => $open && `
    span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
  `}
  @media (max-width: 768px) { display: flex; }
`;

/* ── Component ───────────────────────────────────────────────── */
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useScrollReveal();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => { setOpen(false); document.body.style.overflow = ''; };
    const toggleMenu = () => {
        const next = !open;
        setOpen(next);
        document.body.style.overflow = next ? 'hidden' : '';
    };

    return (
        <Nav $scrolled={scrolled} aria-label="Main navigation">
            <NavContainer>
                <NavLogo href="#home" id="nav-logo-link">
                    <LogoImg src="images/logo-v02.png" alt="BitPixel Solutions" />
                </NavLogo>
                <Hamburger $open={open} id="hamburger" aria-label="Toggle menu" aria-expanded={String(open)} onClick={toggleMenu}>
                    <span /><span /><span />
                </Hamburger>
                <NavLinks $open={open} id="nav-links" role="list">
                    {['services', 'about', 'team', 'contact'].map(id => (
                        <li key={id}>
                            <NavLink href={`#${id}`} className="nav-link" onClick={closeMenu}>
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                    <li><Btn href="#contact" $variant="nav" onClick={closeMenu}>Get Started</Btn></li>
                </NavLinks>
            </NavContainer>
        </Nav>
    );
}
