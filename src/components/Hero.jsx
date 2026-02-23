import { useRef } from 'react';
import styled from 'styled-components';
import { useParticleCanvas } from '../hooks/useParticleCanvas.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Btn } from '../styles/shared.jsx';

/* ── Styled Components ───────────────────────────────────────── */
const HeroSection = styled.section`
  position: relative; min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; background: var(--c-bg);
`;
const HeroCanvas = styled.canvas`
  position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0;
`;
const GridOverlay = styled.div`
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
  z-index: 1;
`;
const Orb = styled.div`
  position: absolute; border-radius: 50%; filter: blur(80px);
  will-change: transform; z-index: 1;
  animation: orbFloat 8s ease-in-out infinite;
`;
const Orb1 = styled(Orb)`
  width:500px;height:500px;background:rgba(108,99,255,0.2);top:-10%;left:-10%;animation-delay:0s;
`;
const Orb2 = styled(Orb)`
  width:400px;height:400px;background:rgba(0,212,255,0.15);bottom:-10%;right:-5%;animation-delay:-3s;
`;
const Orb3 = styled(Orb)`
  width:300px;height:300px;background:rgba(108,99,255,0.12);top:40%;right:20%;animation-delay:-6s;
`;
const HeroContent = styled.div`
  position: relative; z-index: 3; text-align: center;
  padding: calc(var(--nav-h) + 2rem) 1.5rem 6rem;
  max-width: 900px; margin: 0 auto;
`;
const HeroBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.8rem; font-weight: 500; color: var(--c-text-muted);
  background: rgba(255,255,255,0.05); border: 1px solid var(--c-border);
  border-radius: 100px; padding: 0.4em 1.2em; margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
`;
const BadgeDot = styled.span`
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--c-accent); animation: pulse 2s ease-in-out infinite;
`;
const HeroTitle = styled.h1`
  font-size: clamp(2.5rem,6vw,5rem); font-weight: 700; line-height: 1.1;
  margin-bottom: 1.5rem; letter-spacing: -0.02em;
`;
const HeroSubtitle = styled.p`
  font-size: clamp(1rem,2vw,1.25rem); color: var(--c-text-muted);
  max-width: 640px; margin: 0 auto 2.5rem; line-height: 1.7;
`;
const HeroCta = styled.div`
  display: flex; flex-wrap: wrap; gap: 1rem;
  justify-content: center; margin-bottom: 4rem;
  @media (max-width: 480px) {
    flex-direction: column; align-items: center;
    a { width: 200px; justify-content: center; }
  }
`;
const ScrollIndicator = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  color: var(--c-text-muted); font-size: 0.75rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  animation: fadeUpIn 1s 1.5s both;
`;
const ScrollLine = styled.div`
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, transparent, var(--c-primary), transparent);
  animation: scrollLine 2s ease-in-out infinite;
`;
const FloatingCards = styled.div`
  position: absolute; inset: 0; z-index: 3; pointer-events: none;
  @media (max-width: 768px) { display: none; }
`;
const FloatingCard = styled.div`
  position: absolute; display: flex; align-items: center; gap: 0.6rem;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px); border-radius: 14px; padding: 0.65em 1.2em;
  font-size: 0.82rem; font-weight: 500; color: var(--c-text); white-space: nowrap;
  animation: floatCard 6s ease-in-out infinite;
`;
const Fc1 = styled(FloatingCard)`top:25%;left:6%;animation-delay:0s;`;
const Fc2 = styled(FloatingCard)`top:65%;left:5%;animation-delay:-2s;`;
const Fc3 = styled(FloatingCard)`top:30%;right:6%;animation-delay:-4s;`;
const FcIcon = styled.span`font-size:1.1rem;`;

/* ── Component ───────────────────────────────────────────────── */
export default function Hero() {
    const canvasRef = useRef(null);
    useParticleCanvas(canvasRef);
    useScrollReveal();

    return (
        <HeroSection id="home" aria-label="Hero">
            <HeroCanvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
            <GridOverlay aria-hidden="true" />
            <Orb1 aria-hidden="true" /><Orb2 aria-hidden="true" /><Orb3 aria-hidden="true" />

            <HeroContent>
                <HeroBadge className="reveal">
                    <BadgeDot />&nbsp;Digital Innovation Studio
                </HeroBadge>
                <HeroTitle className="reveal reveal-delay-1">
                    Transforming <span className="gradient-text">Bits &amp; Pixels</span><br />
                    into Digital Solutions
                </HeroTitle>
                <HeroSubtitle className="reveal reveal-delay-2">
                    At BitPixel Solutions, we turn ideas into intelligent digital products.<br />
                    Empowering businesses through cutting-edge software, design, and strategy.
                </HeroSubtitle>
                <HeroCta className="reveal reveal-delay-3">
                    <Btn href="#services" $variant="primary" id="hero-cta-services">Explore Services</Btn>
                    <Btn href="#about" $variant="outline" id="hero-cta-about">Our Story</Btn>
                </HeroCta>
                <ScrollIndicator aria-hidden="true">
                    <ScrollLine /><span>Scroll</span>
                </ScrollIndicator>
            </HeroContent>

            <FloatingCards aria-hidden="true">
                <Fc1><FcIcon>🚀</FcIcon><span>Launched 50+ Products</span></Fc1>
                <Fc2><FcIcon>⭐</FcIcon><span>5★ Client Rating</span></Fc2>
                <Fc3><FcIcon>🌐</FcIcon><span>Global Clients</span></Fc3>
            </FloatingCards>
        </HeroSection>
    );
}
