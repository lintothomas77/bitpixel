import { useEffect, useRef } from 'react';

/**
 * useCounters — animates all .stat-number[data-target] elements
 * when the given containerRef scrolls into view.
 */
export function useCounters(containerRef) {
    const started = useRef(false);

    useEffect(() => {
        const el = containerRef?.current;
        if (!el) return;

        function animateCounter(el, target, duration = 2000) {
            const start = performance.now();
            const easeOut = t => 1 - Math.pow(1 - t, 3);
            function step(now) {
                const progress = Math.min((now - start) / duration, 1);
                el.textContent = Math.floor(easeOut(progress) * target);
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target;
            }
            requestAnimationFrame(step);
        }

        const io = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !started.current) {
                started.current = true;
                el.querySelectorAll('.stat-number[data-target]').forEach(num => {
                    animateCounter(num, parseInt(num.dataset.target, 10));
                });
                io.disconnect();
            }
        }, { threshold: 0.3 });

        io.observe(el);
        return () => io.disconnect();
    }, [containerRef]);
}
