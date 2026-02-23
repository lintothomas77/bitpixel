import { useEffect } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Container, SectionTag, SectionTitle, SectionSubtitle, SectionHeader, ParallaxBg, SectionOverlay } from '../styles/shared.jsx';

/* ── Styled Components ───────────────────────────────────────── */
const Section = styled.section`
  position: relative; padding: var(--section-pad); overflow: hidden;
  &::before {
    content: '';
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 22 L76 58 L40 76 L4 58 L4 22 Z' fill='none' stroke='rgba(108,99,255,0.06)' stroke-width='1'/%3E%3C/svg%3E");
    background-size: 80px 92px; z-index: 0; pointer-events: none;
  }
`;
const ServicesBg = styled(ParallaxBg)`
  background:
    radial-gradient(ellipse 120% 80% at 10% 50%, rgba(108,99,255,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 80% 100% at 90% 50%, rgba(0,212,255,0.08) 0%, transparent 60%),
    linear-gradient(180deg, var(--c-bg) 0%, var(--c-surface) 50%, var(--c-bg) 100%);
`;
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem;
  position: relative; z-index: 2;
  @media (max-width:1024px) { grid-template-columns: 1fr 1fr; }
  @media (max-width:768px)  { grid-template-columns: 1fr; max-width:480px; margin:0 auto; }
`;
const Card = styled.div`
  position: relative;
  background: ${({ $featured }) => $featured ? 'linear-gradient(145deg,rgba(108,99,255,0.15) 0%,rgba(0,212,255,0.08) 100%)' : 'var(--c-card-glass)'};
  border: 1px solid ${({ $featured }) => $featured ? 'rgba(108,99,255,0.4)' : 'var(--c-border)'};
  ${({ $featured }) => $featured && 'box-shadow: 0 8px 32px rgba(108,99,255,0.15);'}
  border-radius: var(--r-card); padding: 2.5rem 2rem; overflow: hidden;
  transition: transform var(--t-slow), border-color var(--t-base), box-shadow var(--t-base);
  backdrop-filter: blur(8px);
  display: flex; flex-direction: column; gap: 1rem;
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(108,99,255,0.5);
    box-shadow: ${({ $featured }) => $featured
        ? '0 24px 64px rgba(108,99,255,0.35), 0 0 0 1px rgba(108,99,255,0.5)'
        : '0 20px 60px rgba(108,99,255,0.2), 0 0 0 1px rgba(108,99,255,0.3)'};
  }
  &:hover > div:first-child { opacity: ${({ $featured }) => $featured ? 1 : 1}; }
`;
const CardGlow = styled.div`
  position: absolute; top: -30%; left: 50%; transform: translateX(-50%);
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(108,99,255,0.2), transparent 70%);
  border-radius: 50%; pointer-events: none;
  transition: opacity var(--t-base);
  opacity: ${({ $featured }) => $featured ? 0.5 : 0};
  ${Card}:hover & { opacity: 1; }
`;
const FeaturedBadge = styled.div`
  position: absolute; top: 1.25rem; right: 1.25rem;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  color: #fff; background: var(--grad-primary); border-radius: 100px; padding: 0.3em 0.9em;
`;
const IconWrap = styled.div`margin-bottom:0.25rem;`;
const Icon = styled.div`
  width:58px;height:58px;border-radius:14px;
  background:var(--c-primary-dim);border:1px solid var(--c-border);
  display:flex;align-items:center;justify-content:center;
`;
const CardTitle = styled.h3`font-size:1.35rem;color:var(--c-text);`;
const CardDesc = styled.p`font-size:0.92rem;color:var(--c-text-muted);line-height:1.7;`;
const Features = styled.ul`
  flex:1;display:flex;flex-direction:column;gap:0.45rem;
  li { font-size:0.87rem;color:var(--c-text-muted);padding-left:1.25rem;position:relative; }
  li::before {
    content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);
    width:6px;height:6px;border-radius:50%;background:var(--grad-primary);
  }
`;
const CardCta = styled.a`
  display:inline-flex;align-items:center;gap:0.4rem;
  font-size:0.9rem;font-weight:600;color:var(--c-primary);margin-top:0.5rem;
  transition:gap var(--t-fast),color var(--t-fast);
  &:hover{color:var(--c-accent);gap:0.75rem;}
`;

const GradDefs = () => (
    <defs>
        <linearGradient id="g1" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="#6c63ff" /><stop offset="1" stopColor="#00d4ff" /></linearGradient>
        <linearGradient id="g2" x1="2" y1="5" x2="30" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#6c63ff" /><stop offset="1" stopColor="#00d4ff" /></linearGradient>
        <linearGradient id="g3" x1="9" y1="2" x2="23" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#6c63ff" /><stop offset="1" stopColor="#00d4ff" /></linearGradient>
    </defs>
);

/* ── Component ───────────────────────────────────────────────── */
export default function Services() {
    useScrollReveal();

    useEffect(() => {
        if (!window.matchMedia('(hover: hover)').matches) return;
        const cards = document.querySelectorAll('[data-tilt]');
        const handlers = [];
        cards.forEach(card => {
            const onMove = e => {
                const r = card.getBoundingClientRect();
                const rx = ((e.clientY - r.top - r.height / 2) / r.height) * 10;
                const ry = ((e.clientX - r.left - r.width / 2) / r.width) * -10;
                card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            };
            const onLeave = () => { card.style.transform = ''; };
            card.addEventListener('mousemove', onMove);
            card.addEventListener('mouseleave', onLeave);
            handlers.push({ card, onMove, onLeave });
        });
        return () => handlers.forEach(({ card, onMove, onLeave }) => {
            card.removeEventListener('mousemove', onMove);
            card.removeEventListener('mouseleave', onLeave);
        });
    }, []);

    return (
        <Section id="services" aria-label="Our Services">
            <ServicesBg aria-hidden="true" />
            <SectionOverlay aria-hidden="true" />
            <Container>
                <SectionHeader className="reveal">
                    <SectionTag>What We Do</SectionTag>
                    <SectionTitle>Business Growth <span className="gradient-text">Advisory</span></SectionTitle>
                    <SectionSubtitle>Technology is the tool. People are the difference.</SectionSubtitle>
                </SectionHeader>
                <Grid>

                    <Card className="reveal" id="service-branding" data-tilt>
                        <CardGlow /><IconWrap><Icon>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                                <path d="M16 3C9 3 3 9 3 16s6 13 13 13 13-6 13-13S23 3 16 3zm0 4a5 5 0 110 10A5 5 0 0116 7zm0 18c-3.3 0-6.2-1.5-8.2-3.9.2-2.7 5.5-4.1 8.2-4.1s8 1.4 8.2 4.1A10.96 10.96 0 0116 25z" fill="url(#g1)" /><GradDefs />
                            </svg>
                        </Icon></IconWrap>
                        <CardTitle>Branding &amp; UI/UX</CardTitle>
                        <CardDesc>Build experiences that connect and convert. From digital identity design to intuitive user journeys, we ensure your brand speaks clearly across every platform.</CardDesc>
                        <Features><li>Brand Identity &amp; Strategy</li><li>UI/UX Design Systems</li><li>Prototyping &amp; User Research</li></Features>
                        <CardCta href="#contact">Start a Project <span aria-hidden="true">→</span></CardCta>
                    </Card>

                    <Card className="reveal reveal-delay-1" id="service-web" $featured data-tilt>
                        <CardGlow $featured /><FeaturedBadge>Most Popular</FeaturedBadge>
                        <IconWrap><Icon>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                                <rect x="2" y="5" width="28" height="20" rx="3" stroke="url(#g2)" strokeWidth="2" fill="none" />
                                <path d="M10 15l-4 2 4 2M22 15l4 2-4 2M18 11l-4 10" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" /><GradDefs />
                            </svg>
                        </Icon></IconWrap>
                        <CardTitle>Web Development</CardTitle>
                        <CardDesc>Smart, scalable, and secure web solutions built for your business. Our expert developers craft high-performing websites and web apps that deliver seamless results.</CardDesc>
                        <Features><li>Custom Web Applications</li><li>E-commerce Platforms</li><li>Performance Optimisation</li></Features>
                        <CardCta href="#contact">Start a Project <span aria-hidden="true">→</span></CardCta>
                    </Card>

                    <Card className="reveal reveal-delay-2" id="service-mobile" data-tilt>
                        <CardGlow /><IconWrap><Icon>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                                <rect x="9" y="2" width="14" height="28" rx="3" stroke="url(#g3)" strokeWidth="2" fill="none" />
                                <circle cx="16" cy="26" r="1.5" fill="url(#g3)" />
                                <line x1="13" y1="6" x2="19" y2="6" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" /><GradDefs />
                            </svg>
                        </Icon></IconWrap>
                        <CardTitle>Mobile Development</CardTitle>
                        <CardDesc>Stay connected with your audience anywhere, anytime. Cross-platform apps combining sleek design, strong performance, and exceptional user experience.</CardDesc>
                        <Features><li>iOS &amp; Android Apps</li><li>Cross-Platform (React Native)</li><li>App Store Optimisation</li></Features>
                        <CardCta href="#contact">Start a Project <span aria-hidden="true">→</span></CardCta>
                    </Card>

                </Grid>
            </Container>
        </Section>
    );
}
