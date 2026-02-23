import { useEffect } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to all `.reveal` elements
 * in the document. Uses rAF to ensure styled-components has rendered before
 * querying the DOM.
 */
export function useScrollReveal() {
    useEffect(() => {
        let io;

        // requestAnimationFrame ensures the DOM is painted before we query
        const raf = requestAnimationFrame(() => {
            const els = document.querySelectorAll('.reveal');

            io = new IntersectionObserver(
                entries => entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                }),
                { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
            );

            els.forEach(el => io.observe(el));
        });

        return () => {
            cancelAnimationFrame(raf);
            io?.disconnect();
        };
    }, []);
}
