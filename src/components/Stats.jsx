import React, { useRef } from 'react';
import styled from 'styled-components';
import { useCounters } from '../hooks/useCounters.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Container } from '../styles/shared.jsx';

/* ── Styled Components ───────────────────────────────────────── */
const Strip = styled.section`
  position: relative; z-index: 5;
  background: var(--c-surface);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 3rem 0;
`;
const Grid = styled.div`
  display: flex; align-items: center; justify-content: space-around;
  gap: 1rem; flex-wrap: wrap;
  @media (max-width: 768px) { gap: 2rem; }
`;
const StatItem = styled.div`
  text-align: center; padding: 1rem;
`;
const GradText = styled.span`
  font-family: var(--f-heading);
  font-size: ${({ $size }) => $size || 'clamp(2rem,4vw,3.5rem)'};
  font-weight: 700;
  background: var(--grad-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
`;
const StatLabel = styled.span`
  display: block; font-size: 0.85rem;
  color: var(--c-text-muted); margin-top: 0.25rem; letter-spacing: 0.05em;
`;
const Divider = styled.div`
  width: 1px; height: 60px; background: var(--c-border); flex-shrink: 0;
  @media (max-width: 768px) { display: none; }
`;

const STATS = [
  { id: 'stat-projects', target: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 'stat-clients', target: 30, suffix: '+', label: 'Happy Clients' },
  { id: 'stat-years', target: 5, suffix: '+', label: 'Years Experience' },
  { id: 'stat-satisfaction', target: 100, suffix: '%', label: 'Client Satisfaction' },
];

/* ── Component ───────────────────────────────────────────────── */
export default function Stats() {
  const ref = useRef(null);
  useCounters(ref);
  useScrollReveal();

  return (
    <Strip aria-label="Company statistics" ref={ref}>
      <Container>
        <Grid>
          {STATS.map((s, i) => (
            <React.Fragment key={s.id}>
              {i > 0 && <Divider aria-hidden="true" />}
              <StatItem className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <GradText className="stat-number" data-target={s.target} id={s.id}>0</GradText>
                <GradText $size="clamp(1.5rem,3vw,2.5rem)">{s.suffix}</GradText>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Strip>
  );
}
