import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {

    /* ── Parallax backgrounds on scroll ─────────────────────── */
    useEffect(() => {
        function updateParallax() {
            document.querySelectorAll('.parallax-bg').forEach(el => {
                const section = el.closest('section') || el.parentElement;
                const rect = section.getBoundingClientRect();
                const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.18;
                el.style.transform = `translateY(${offset}px)`;
            });
        }
        window.addEventListener('scroll', updateParallax, { passive: true });
        updateParallax();
        return () => window.removeEventListener('scroll', updateParallax);
    }, []);

    /* ── Smooth anchor scroll (handles dynamically added links) ─ */
    useEffect(() => {
        function onClick(e) {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navH = parseInt(
                getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '76',
                10
            );
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <Services />
            <About />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}
