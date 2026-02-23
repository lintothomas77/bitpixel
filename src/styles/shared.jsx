import styled, { css } from 'styled-components';

/* ── Shared styled primitives exported for reuse ─────────────── */

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionTag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-accent);
  background: var(--c-accent-dim);
  border: 1px solid rgba(0,212,255,0.25);
  border-radius: 100px;
  padding: 0.3em 1em;
  margin-bottom: 1rem;
  width: fit-content;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
  color: var(--c-text);
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--c-text-muted);
  max-width: 520px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const ParallaxBg = styled.div`
  position: absolute;
  inset: -30%;
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: 0;
`;

export const SectionOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

/* ── Buttons ──────────────────────────────────────────────────── */
export const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85em 2em;
  border-radius: var(--r-btn);
  font-family: var(--f-heading);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--t-base);
  border: 2px solid transparent;
  white-space: nowrap;

  ${({ $variant }) => $variant === 'primary' && css`
    background: var(--grad-primary);
    color: #fff;
    box-shadow: 0 0 24px rgba(108,99,255,0.4);
    &:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(108,99,255,0.6); }
  `}

  ${({ $variant }) => $variant === 'outline' && css`
    background: transparent;
    color: var(--c-text);
    border-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(8px);
    &:hover { border-color: var(--c-primary); color: var(--c-primary); transform: translateY(-3px); }
  `}

  ${({ $variant }) => $variant === 'nav' && css`
    background: var(--c-primary-dim);
    color: var(--c-primary);
    border-color: var(--c-border);
    font-size: 0.9rem;
    padding: 0.6em 1.4em;
    &:hover { background: var(--c-primary); color: #fff; }
  `}
`;

export const BtnFull = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.85em 2em;
  border-radius: var(--r-btn);
  font-family: var(--f-heading);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--t-base);
  border: 2px solid transparent;
  background: var(--grad-primary);
  color: #fff;
  box-shadow: 0 0 24px rgba(108,99,255,0.4);
  &:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(108,99,255,0.6); }
  &:disabled { opacity: 0.8; cursor: not-allowed; }
`;
