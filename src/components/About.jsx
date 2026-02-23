import styled from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Container, SectionTag, SectionTitle, ParallaxBg, SectionOverlay } from '../styles/shared.jsx';

/* ── Styled Components ───────────────────────────────────────── */
const Section = styled.section`position:relative;padding:var(--section-pad);overflow:hidden;`;
const AboutBg = styled(ParallaxBg)`
  background:
    radial-gradient(ellipse 100% 70% at 80% 50%, rgba(0,212,255,0.1) 0%, transparent 55%),
    radial-gradient(ellipse 70% 100% at 10% 60%, rgba(108,99,255,0.1) 0%, transparent 55%),
    var(--c-surface);
`;
const AboutOverlay = styled(SectionOverlay)`background:linear-gradient(to right,rgba(10,10,20,0.4),rgba(10,10,20,0.1));`;
const Grid = styled.div`
  display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;align-items:center;
  position:relative;z-index:2;
  @media(max-width:1024px){grid-template-columns:1fr;gap:3rem;}
`;
const Visual = styled.div`
  display:flex;justify-content:center;align-items:center;
  @media(max-width:1024px){display:none;}
`;
const VisualInner = styled.div`
  position:relative;width:320px;height:320px;
  display:flex;align-items:center;justify-content:center;
`;
const Ring = styled.div`
  position:absolute;border-radius:50%;border:1px solid var(--c-border);
  animation:ringRotate linear infinite;
`;
const Ring1 = styled(Ring)`width:100%;height:100%;border-color:rgba(108,99,255,0.3);animation-duration:20s;
  &::before{content:'';position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:var(--c-primary);box-shadow:0 0 12px var(--c-primary);}
`;
const Ring2 = styled(Ring)`width:70%;height:70%;border-color:rgba(0,212,255,0.25);animation-duration:15s;animation-direction:reverse;
  &::before{content:'';position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:var(--c-accent);box-shadow:0 0 10px var(--c-accent);}
`;
const Ring3 = styled(Ring)`width:40%;height:40%;border:2px solid rgba(108,99,255,0.5);animation-duration:10s;
  &::before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:8px;height:8px;border-radius:50%;background:#fff;}
`;
const Core = styled.div`
  position:relative;z-index:2;width:100px;height:100px;
  background:var(--c-surface);border-radius:24px;border:1px solid var(--c-border);
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 0 40px rgba(108,99,255,0.3),0 0 80px rgba(108,99,255,0.1);
`;
const Content = styled.div`display:flex;flex-direction:column;`;
const LeadText = styled.p`font-size:1.2rem;font-weight:600;color:var(--c-text);margin-bottom:0.75rem;`;
const BodyText = styled.p`color:var(--c-text-muted);line-height:1.8;margin-bottom:2rem;`;
const Values = styled.div`display:flex;flex-direction:column;gap:1.25rem;`;
const ValueItem = styled.div`display:flex;align-items:flex-start;gap:1rem;`;
const ValueIcon = styled.span`
  font-size:1.5rem;flex-shrink:0;width:46px;height:46px;
  background:var(--c-primary-dim);border:1px solid var(--c-border);border-radius:12px;
  display:flex;align-items:center;justify-content:center;
`;
const ValueText = styled.div`
  strong{display:block;font-size:0.95rem;margin-bottom:0.15rem;color:var(--c-text);}
  p{font-size:0.87rem;color:var(--c-text-muted);line-height:1.5;}
`;

const VALUES = [
    { icon: '🔍', title: 'Transparency', desc: 'Clear communication at every step of the journey' },
    { icon: '🤝', title: 'Collaboration', desc: 'Your team and ours, working as one' },
    { icon: '⚡', title: 'Innovation', desc: "Continuously pushing the boundaries of what's possible" },
];

/* ── Component ───────────────────────────────────────────────── */
export default function About() {
    useScrollReveal();
    return (
        <Section id="about" aria-label="About Us">
            <AboutBg aria-hidden="true" /><AboutOverlay aria-hidden="true" />
            <Container>
                <Grid>
                    <Visual className="reveal" aria-hidden="true">
                        <VisualInner>
                            <Ring1 /><Ring2 /><Ring3 />
                            <Core>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <rect width="26" height="26" rx="5" fill="#6c63ff" />
                                    <rect x="34" width="26" height="26" rx="5" fill="#00d4ff" opacity="0.8" />
                                    <rect y="34" width="26" height="26" rx="5" fill="#00d4ff" opacity="0.8" />
                                    <rect x="34" y="34" width="26" height="26" rx="5" fill="#6c63ff" />
                                </svg>
                            </Core>
                        </VisualInner>
                    </Visual>
                    <Content>
                        <SectionTag className="reveal">About Us</SectionTag>
                        <SectionTitle className="reveal reveal-delay-1">
                            Where <span className="gradient-text">Passion</span><br />Meets Purpose
                        </SectionTitle>
                        <LeadText className="reveal reveal-delay-2">At BitPixel, innovation drives everything we do.</LeadText>
                        <BodyText className="reveal reveal-delay-2">
                            Our team of skilled consultants, designers, and developers work together to craft digital
                            experiences that not only meet client goals but exceed expectations. We believe in transparency,
                            collaboration, and continuous improvement — values that make us a trusted partner for global
                            enterprises and startups alike.
                        </BodyText>
                        <Values className="reveal reveal-delay-3">
                            {VALUES.map(v => (
                                <ValueItem key={v.title}>
                                    <ValueIcon>{v.icon}</ValueIcon>
                                    <ValueText><strong>{v.title}</strong><p>{v.desc}</p></ValueText>
                                </ValueItem>
                            ))}
                        </Values>
                    </Content>
                </Grid>
            </Container>
        </Section>
    );
}
