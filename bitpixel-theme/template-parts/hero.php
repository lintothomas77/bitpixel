<!-- ── Hero ─────────────────────────────────────────────────────── -->
<section class="hero-section" id="home" aria-label="Hero">

    <canvas id="hero-canvas" aria-hidden="true"></canvas>
    <div class="hero-grid-overlay" aria-hidden="true"></div>

    <div class="orb orb-1" aria-hidden="true"></div>
    <div class="orb orb-2" aria-hidden="true"></div>
    <div class="orb orb-3" aria-hidden="true"></div>

    <div class="hero-content">
        <div class="hero-badge reveal">
            <span class="badge-dot"></span>&nbsp;<?php echo bpx('hero_badge', 'Digital Innovation Studio'); ?>
        </div>

        <h1 class="hero-title reveal reveal-delay-1">
            <?php echo bpx('hero_title_1', 'Transforming'); ?>
            <span class="gradient-text"><?php echo bpx('hero_title_g', 'Bits &amp; Pixels'); ?></span><br>
            <?php echo bpx('hero_title_2', 'into Digital Solutions'); ?>
        </h1>

        <p class="hero-subtitle reveal reveal-delay-2">
            <?php echo bpx('hero_subtitle', 'At BitPixel Solutions, we turn ideas into intelligent digital products. Empowering businesses through cutting-edge software, design, and strategy.'); ?>
        </p>

        <div class="hero-cta reveal reveal-delay-3">
            <a href="#services" class="btn btn-primary" id="hero-cta-services"><?php echo bpx('hero_cta1', 'Explore Services'); ?></a>
            <a href="#about"    class="btn btn-outline"  id="hero-cta-about"><?php echo bpx('hero_cta2', 'Our Story'); ?></a>
        </div>

        <div class="scroll-indicator" aria-hidden="true">
            <div class="scroll-line"></div>
            <span>Scroll</span>
        </div>
    </div>

    <!-- Floating cards (hidden on mobile via CSS) -->
    <div class="floating-cards" aria-hidden="true">
        <div class="floating-card fc-1"><span class="fc-icon">🚀</span><span><?php echo bpx('hero_card1', 'Launched 50+ Products'); ?></span></div>
        <div class="floating-card fc-2"><span class="fc-icon">⭐</span><span><?php echo bpx('hero_card2', '5★ Client Rating'); ?></span></div>
        <div class="floating-card fc-3"><span class="fc-icon">🌐</span><span><?php echo bpx('hero_card3', 'Global Clients'); ?></span></div>
    </div>

</section>
<!-- /Hero -->
