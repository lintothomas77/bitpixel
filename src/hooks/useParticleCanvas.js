import { useEffect } from 'react';

/**
 * useParticleCanvas — animated particle + connecting-lines on a <canvas>.
 * @param {React.RefObject} canvasRef — ref to the canvas element
 */
export function useParticleCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const CONFIG = {
            count: 120, maxSize: 2.5, minSize: 0.5, speed: 0.35,
            lineLen: 140, mouseRadius: 120,
            colors: ['rgba(108,99,255,', 'rgba(0,212,255,', 'rgba(200,195,255,'],
        };

        let W, H, particles = [], animId;
        const mouse = { x: -9999, y: -9999 };

        const onMouseMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
        window.addEventListener('mousemove', onMouseMove, { passive: true });

        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        }

        function Particle() {
            this.reset = function () {
                this.x = Math.random() * W; this.y = Math.random() * H;
                this.vx = (Math.random() - 0.5) * CONFIG.speed;
                this.vy = (Math.random() - 0.5) * CONFIG.speed;
                this.r = CONFIG.minSize + Math.random() * (CONFIG.maxSize - CONFIG.minSize);
                this.color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
                this.alpha = 0.4 + Math.random() * 0.5;
            };
            this.reset();
        }

        function draw() {
            ctx.clearRect(0, 0, W, H);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const dx = p.x - mouse.x, dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONFIG.mouseRadius) {
                    const f = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
                    p.vx += (dx / dist) * f * 0.5;
                    p.vy += (dy / dist) * f * 0.5;
                }
                p.vx *= 0.995; p.vy *= 0.995;
                const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (spd > CONFIG.speed * 3) { p.vx *= 0.9; p.vy *= 0.9; }
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color + p.alpha + ')';
                ctx.fill();
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const ldx = p.x - q.x, ldy = p.y - q.y;
                    const len = Math.sqrt(ldx * ldx + ldy * ldy);
                    if (len < CONFIG.lineLen) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(108,99,255,${(1 - len / CONFIG.lineLen) * 0.25})`;
                        ctx.lineWidth = 0.8; ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        }

        const onResize = () => resize();
        window.addEventListener('resize', onResize, { passive: true });

        resize();
        particles = Array.from({ length: CONFIG.count }, () => new Particle());
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
        };
    }, [canvasRef]);
}
