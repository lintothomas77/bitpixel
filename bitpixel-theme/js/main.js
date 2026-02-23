/**
 * BitPixel Solutions – main.js
 * Vanilla JS port of all React hooks and App-level effects.
 * Runs after DOM is ready (loaded via wp_enqueue_script in footer).
 */

(function () {
    'use strict';

    /* ── 1. Navbar: scroll state + hamburger ──────────────────── */
    (function initNav() {
        const nav = document.getElementById('site-nav');
        const ham = document.getElementById('hamburger');
        const list = document.getElementById('nav-links');
        if (!nav || !ham || !list) return;

        // Scroll → add class
        function onScroll() {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Hamburger toggle
        ham.addEventListener('click', function () {
            const open = list.classList.toggle('open');
            ham.classList.toggle('open', open);
            ham.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        });

        // Close menu when a nav link is clicked
        list.addEventListener('click', function (e) {
            if (e.target.closest('a')) {
                list.classList.remove('open');
                ham.classList.remove('open');
                ham.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    })();

    /* ── 2. Smooth anchor scroll ──────────────────────────────── */
    document.addEventListener('click', function (e) {
        const a = e.target.closest('a[href*="#"]');
        if (!a) return;
        const hash = a.getAttribute('href').split('#')[1];
        if (!hash) return;
        const target = document.getElementById(hash);
        if (!target) return;
        e.preventDefault();
        const navH = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '76',
            10
        );
        window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - navH,
            behavior: 'smooth',
        });
    });

    /* ── 3. Scroll Reveal (IntersectionObserver) ──────────────── */
    (function initReveal() {
        const items = document.querySelectorAll('.reveal');
        if (!items.length) return;
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        items.forEach(function (el) { observer.observe(el); });
    })();

    /* ── 4. Parallax backgrounds ──────────────────────────────── */
    (function initParallax() {
        const els = document.querySelectorAll('.parallax-bg');
        if (!els.length) return;
        function updateParallax() {
            els.forEach(function (el) {
                const section = el.closest('section') || el.parentElement;
                const rect = section.getBoundingClientRect();
                const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.18;
                el.style.transform = 'translateY(' + offset + 'px)';
            });
        }
        window.addEventListener('scroll', updateParallax, { passive: true });
        updateParallax();
    })();

    /* ── 5. Stat Counters ────────────────────────────────────── */
    (function initCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        if (!counters.length) return;

        function animateCounter(el) {
            const target = parseInt(el.dataset.target, 10);
            const duration = 1800;
            const start = performance.now();
            function step(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                el.textContent = Math.floor(ease * target);
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target;
            }
            requestAnimationFrame(step);
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        counters.forEach(function (el) { observer.observe(el); });
    })();

    /* ── 6. Hero Particle Canvas ──────────────────────────────── */
    (function initParticles() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let W, H, particles, animId;

        function resize() {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        }

        function Particle() {
            this.reset();
        }
        Particle.prototype.reset = function () {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 1.5 + 0.3;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.o = Math.random() * 0.5 + 0.1;
        };
        Particle.prototype.update = function () {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        };

        function init() {
            resize();
            const count = Math.floor((W * H) / 8000);
            particles = Array.from({ length: count }, function () { return new Particle(); });
        }

        function draw() {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(function (p) {
                p.update();
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(108,99,255,' + p.o + ')';
                ctx.fill();
            });

            // Draw connection lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = 'rgba(108,99,255,' + (0.08 * (1 - dist / 100)) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        }

        init();
        draw();

        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                cancelAnimationFrame(animId);
                init();
                draw();
            }, 200);
        });
    })();

    /* ── 7. Service Card Tilt Effect ──────────────────────────── */
    (function initTilt() {
        if (!window.matchMedia('(hover: hover)').matches) return;
        document.querySelectorAll('[data-tilt]').forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                const r = card.getBoundingClientRect();
                const rx = ((e.clientY - r.top - r.height / 2) / r.height) * 10;
                const ry = ((e.clientX - r.left - r.width / 2) / r.width) * -10;
                card.style.transform =
                    'translateY(-8px) perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        });
    })();

    /* ── 8. Contact Form (Web3Forms) ──────────────────────────── */
    (function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const btnLabel = document.getElementById('form-label');
        const btnIcon = document.getElementById('form-icon');
        const btn = document.getElementById('form-submit');

        // Keys injected by wp_localize_script
        const accessKey = (typeof BitPixelData !== 'undefined' && BitPixelData.web3formsKey) || '';
        const contactEmail = (typeof BitPixelData !== 'undefined' && BitPixelData.contactEmail) || 'contact@bitpixelsolutions.com';
        const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function setState(state) {
            const labels = { idle: 'Send Message', loading: 'Sending…', success: 'Message Sent!', error: 'Failed – Try Again' };
            const icons = { idle: '→', loading: '⏳', success: '✓', error: '✕' };
            btnLabel.textContent = labels[state];
            btnIcon.textContent = icons[state];
            btn.disabled = state === 'loading';

            if (state === 'success') {
                Object.assign(btn.style, {
                    background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                    boxShadow: '0 8px 24px rgba(34,197,94,.4)',
                    borderColor: 'transparent',
                });
            } else if (state === 'error') {
                Object.assign(btn.style, {
                    background: 'linear-gradient(135deg,#ef4444,#b91c1c)',
                    boxShadow: '0 8px 24px rgba(239,68,68,.35)',
                });
            } else {
                btn.style.background = '';
                btn.style.boxShadow = '';
                btn.style.borderColor = '';
            }
        }

        function shake() {
            btn.style.animation = 'none';
            void btn.offsetHeight; // reflow
            btn.style.animation = 'shake 0.4s ease';
            btn.addEventListener('animationend', function () { btn.style.animation = ''; }, { once: true });
        }

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const name = form.querySelector('[name="name"]').value.trim();
            const email = form.querySelector('[name="email"]').value.trim();
            const subject = form.querySelector('[name="subject"]').value.trim();
            const message = form.querySelector('[name="message"]').value.trim();

            if (!name || !email || !message || !EMAIL_RE.test(email)) { shake(); return; }

            setState('loading');
            try {
                const data = new FormData();
                data.append('access_key', accessKey);
                data.append('to', contactEmail);
                data.append('subject', 'New Contact Form Message – BitPixel Solutions');
                data.append('redirect', 'false');
                data.append('name', name);
                data.append('email', email);
                data.append('subject_field', subject);
                data.append('message', message);

                const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
                const json = await res.json();
                if (json.success) {
                    setState('success');
                    form.reset();
                    setTimeout(function () { setState('idle'); }, 4000);
                } else {
                    throw new Error(json.message);
                }
            } catch (err) {
                console.error('Contact form error:', err);
                setState('error');
                setTimeout(function () { setState('idle'); }, 3000);
            }
        });
    })();

})(); // end IIFE
