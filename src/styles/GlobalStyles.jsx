import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ── Reset & Base ─────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --c-bg: #0a0a14;
    --c-surface: #111124;
    --c-surface-2: #181830;
    --c-border: rgba(108, 99, 255, 0.2);
    --c-primary: #6c63ff;
    --c-primary-dim: rgba(108, 99, 255, 0.15);
    --c-accent: #00d4ff;
    --c-accent-dim: rgba(0, 212, 255, 0.12);
    --c-text: #f0f0ff;
    --c-text-muted: #8888aa;
    --c-card-glass: rgba(255, 255, 255, 0.04);
    --grad-primary: linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%);
    --grad-radial: radial-gradient(ellipse at center, rgba(108,99,255,0.25) 0%, transparent 70%);
    --f-heading: 'Space Grotesk', sans-serif;
    --f-body: 'Inter', sans-serif;
    --section-pad: 7rem 0;
    --r-card: 20px;
    --r-btn: 100px;
    --t-fast: 0.2s ease;
    --t-base: 0.4s ease;
    --t-slow: 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    --nav-h: 76px;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--c-primary) var(--c-surface);
  }
  html::-webkit-scrollbar { width: 6px; }
  html::-webkit-scrollbar-track { background: var(--c-surface); }
  html::-webkit-scrollbar-thumb { background: var(--c-primary); border-radius: 3px; }

  body {
    background: var(--c-bg);
    color: var(--c-text);
    font-family: var(--f-body);
    font-size: 1rem;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 { font-family: var(--f-heading); font-weight: 700; line-height: 1.15; }
  img  { display: block; max-width: 100%; }
  a    { text-decoration: none; color: inherit; }
  ul   { list-style: none; }
  address { font-style: normal; }

  /* ── Keyframes ─────────────────────────────────────────────── */
  @keyframes orbFloat {
    0%,100% { transform: translate(0,0) scale(1); }
    33%     { transform: translate(30px,-40px) scale(1.05); }
    66%     { transform: translate(-20px,20px) scale(0.97); }
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); box-shadow:0 0 0 0 rgba(0,212,255,0.4); }
    50%     { opacity:0.8; transform:scale(1.1); box-shadow:0 0 0 6px rgba(0,212,255,0); }
  }
  @keyframes scrollLine {
    0%   { opacity:0; transform:scaleY(0) translateY(-10px); }
    50%  { opacity:1; transform:scaleY(1) translateY(0); }
    100% { opacity:0; transform:scaleY(0) translateY(10px); }
  }
  @keyframes floatCard {
    0%,100% { transform:translateY(0); }
    50%     { transform:translateY(-12px); }
  }
  @keyframes ringRotate {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes fadeUpIn {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shake {
    0%,100% { transform:translateX(0); }
    20%     { transform:translateX(-6px); }
    40%     { transform:translateX(6px); }
    60%     { transform:translateX(-4px); }
    80%     { transform:translateX(4px); }
  }

  /* ── Scroll Reveal ─────────────────────────────────────────── */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1);
  }
  .reveal.visible { opacity:1; transform:translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }

  /* ── Global Utilities ──────────────────────────────────────── */
  .gradient-text {
    background: var(--grad-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Responsive Overrides ──────────────────────────────────── */
  @media (max-width: 768px) {
    :root { --section-pad: 5rem 0; }
  }
`;

export default GlobalStyles;
