import styled from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Container, SectionTag, SectionTitle, SectionSubtitle, SectionHeader } from '../styles/shared.jsx';

/* ── Styled Components ───────────────────────────────────────── */
const Section = styled.section`position:relative;padding:var(--section-pad);background:var(--c-bg);`;
const Grid = styled.div`
  display:grid;grid-template-columns:repeat(2,360px);gap:2rem;justify-content:center;
  @media(max-width:768px){grid-template-columns:1fr;max-width:380px;}
`;
const Card = styled.div`
  background:var(--c-card-glass);border:1px solid var(--c-border);
  border-radius:var(--r-card);overflow:hidden;
  transition:transform var(--t-slow),box-shadow var(--t-base),border-color var(--t-base);
  &:hover{transform:translateY(-8px) scale(1.01);border-color:rgba(108,99,255,0.4);box-shadow:0 24px 48px rgba(108,99,255,0.18);}
`;
const CardInner = styled.div`
  padding:2.5rem 2rem;display:flex;flex-direction:column;align-items:center;text-align:center;
`;
const Avatar = styled.div`position:relative;margin-bottom:1.25rem;`;
const Initials = styled.div`
  width:80px;height:80px;border-radius:50%;background:var(--grad-primary);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--f-heading);font-size:1.5rem;font-weight:700;color:#fff;
  position:relative;z-index:1;
`;
const Ring = styled.div`
  position:absolute;inset:-4px;border-radius:50%;border:2px solid transparent;
  background:var(--grad-primary) border-box;
  -webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);
  mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite:destination-out;mask-composite:exclude;
  animation:ringRotate 4s linear infinite;
`;
const Name = styled.h3`font-size:1.25rem;margin-bottom:0.25rem;`;
const Role = styled.span`
  font-size:0.8rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
  color:var(--c-accent);background:var(--c-accent-dim);border:1px solid rgba(0,212,255,0.2);
  border-radius:100px;padding:0.25em 0.9em;display:inline-block;margin-bottom:1rem;
`;
const Bio = styled.p`font-size:0.9rem;color:var(--c-text-muted);line-height:1.6;`;

const MEMBERS = [
    { id: 'team-linto', initials: 'LT', name: 'Linto Thomas', role: 'Co-Founder', bio: 'Visionary leader with a passion for building scalable digital products that make a difference.', delay: '' },
    { id: 'team-libin', initials: 'LE', name: 'Libin Emmanuel', role: 'Co-Founder', bio: 'Strategic thinker and technology architect dedicated to delivering innovative solutions that exceed expectations.', delay: ' reveal-delay-2' },
];

/* ── Component ───────────────────────────────────────────────── */
export default function Team() {
    useScrollReveal();
    return (
        <Section id="team" aria-label="Our Team">
            <Container>
                <SectionHeader className="reveal">
                    <SectionTag>The People</SectionTag>
                    <SectionTitle>Experts Driving <span className="gradient-text">Your Success</span></SectionTitle>
                    <SectionSubtitle>Meet the minds behind the magic.</SectionSubtitle>
                </SectionHeader>
                <Grid>
                    {MEMBERS.map(m => (
                        <Card className={`reveal${m.delay}`} key={m.id} id={m.id}>
                            <CardInner>
                                <Avatar><Initials>{m.initials}</Initials><Ring aria-hidden="true" /></Avatar>
                                <Name>{m.name}</Name>
                                <Role>{m.role}</Role>
                                <Bio>{m.bio}</Bio>
                            </CardInner>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
