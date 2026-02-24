<!-- ── Services ──────────────────────────────────────────────────── -->
<section class="services-section" id="services" aria-label="Our Services">

    <div class="services-bg parallax-bg" aria-hidden="true"></div>
    <div class="services-overlay" aria-hidden="true"></div>

    <div class="container">
        <div class="section-header reveal">
            <span class="section-tag"><?php echo bpx('svc_tag', 'What We Do'); ?></span>
            <h2 class="section-title"><?php echo bpx('svc_title', 'Business Growth'); ?> <span class="gradient-text"><?php echo bpx('svc_title_g', 'Advisory'); ?></span></h2>
            <p class="section-subtitle"><?php echo bpx('svc_subtitle', 'Technology is the tool. People are the difference.'); ?></p>
        </div>

        <div class="services-grid">

            <!-- Branding & UI/UX -->
            <div class="service-card reveal" id="service-branding" data-tilt>
                <div class="card-glow" aria-hidden="true"></div>
                <div class="icon-wrap">
                    <div class="service-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                            <defs>
                                <linearGradient id="g1" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6c63ff"/><stop offset="1" stop-color="#00d4ff"/>
                                </linearGradient>
                            </defs>
                            <path d="M16 3C9 3 3 9 3 16s6 13 13 13 13-6 13-13S23 3 16 3zm0 4a5 5 0 110 10A5 5 0 0116 7zm0 18c-3.3 0-6.2-1.5-8.2-3.9.2-2.7 5.5-4.1 8.2-4.1s8 1.4 8.2 4.1A10.96 10.96 0 0116 25z" fill="url(#g1)"/>
                        </svg>
                    </div>
                </div>
                <h3 class="card-title"><?php echo bpx('svc1_title', 'Branding &amp; UI/UX'); ?></h3>
                <p class="card-desc"><?php echo bpx('svc1_desc', 'Build experiences that connect and convert. From digital identity design to intuitive user journeys, we ensure your brand speaks clearly across every platform.'); ?></p>
                <ul class="card-features">
                    <li><?php echo bpx('svc1_feat1', 'Brand Identity &amp; Strategy'); ?></li>
                    <li><?php echo bpx('svc1_feat2', 'UI/UX Design Systems'); ?></li>
                    <li><?php echo bpx('svc1_feat3', 'Prototyping &amp; User Research'); ?></li>
                </ul>
                <a href="#contact" class="card-cta"><?php echo bpx('svc1_cta', 'Start a Project'); ?> <span aria-hidden="true">→</span></a>
            </div>

            <!-- Web Development (featured) -->
            <div class="service-card featured reveal reveal-delay-1" id="service-web" data-tilt>
                <div class="card-glow" aria-hidden="true"></div>
                <span class="featured-badge">Most Popular</span>
                <div class="icon-wrap">
                    <div class="service-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                            <defs>
                                <linearGradient id="g2" x1="2" y1="5" x2="30" y2="25" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6c63ff"/><stop offset="1" stop-color="#00d4ff"/>
                                </linearGradient>
                            </defs>
                            <rect x="2" y="5" width="28" height="20" rx="3" stroke="url(#g2)" stroke-width="2" fill="none"/>
                            <path d="M10 15l-4 2 4 2M22 15l4 2-4 2M18 11l-4 10" stroke="url(#g2)" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <h3 class="card-title"><?php echo bpx('svc2_title', 'Web Development'); ?></h3>
                <p class="card-desc"><?php echo bpx('svc2_desc', 'Smart, scalable, and secure web solutions built for your business. Our expert developers craft high-performing websites and web apps that deliver seamless results.'); ?></p>
                <ul class="card-features">
                    <li><?php echo bpx('svc2_feat1', 'Custom Web Applications'); ?></li>
                    <li><?php echo bpx('svc2_feat2', 'E-commerce Platforms'); ?></li>
                    <li><?php echo bpx('svc2_feat3', 'Performance Optimisation'); ?></li>
                </ul>
                <a href="#contact" class="card-cta"><?php echo bpx('svc2_cta', 'Start a Project'); ?> <span aria-hidden="true">→</span></a>
            </div>

            <!-- Mobile Development -->
            <div class="service-card reveal reveal-delay-2" id="service-mobile" data-tilt>
                <div class="card-glow" aria-hidden="true"></div>
                <div class="icon-wrap">
                    <div class="service-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                            <defs>
                                <linearGradient id="g3" x1="9" y1="2" x2="23" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6c63ff"/><stop offset="1" stop-color="#00d4ff"/>
                                </linearGradient>
                            </defs>
                            <rect x="9" y="2" width="14" height="28" rx="3" stroke="url(#g3)" stroke-width="2" fill="none"/>
                            <circle cx="16" cy="26" r="1.5" fill="url(#g3)"/>
                            <line x1="13" y1="6" x2="19" y2="6" stroke="url(#g3)" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <h3 class="card-title"><?php echo bpx('svc3_title', 'Mobile Development'); ?></h3>
                <p class="card-desc"><?php echo bpx('svc3_desc', 'Stay connected with your audience anywhere, anytime. Cross-platform apps combining sleek design, strong performance, and exceptional user experience.'); ?></p>
                <ul class="card-features">
                    <li><?php echo bpx('svc3_feat1', 'iOS &amp; Android Apps'); ?></li>
                    <li><?php echo bpx('svc3_feat2', 'Cross-Platform (React Native)'); ?></li>
                    <li><?php echo bpx('svc3_feat3', 'App Store Optimisation'); ?></li>
                </ul>
                <a href="#contact" class="card-cta"><?php echo bpx('svc3_cta', 'Start a Project'); ?> <span aria-hidden="true">→</span></a>
            </div>

        </div><!-- /.services-grid -->
    </div>
</section>
<!-- /Services -->
