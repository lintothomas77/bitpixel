<!-- ── About ──────────────────────────────────────────────────────── -->
<section class="about-section" id="about" aria-label="About Us">

    <div class="about-bg parallax-bg" aria-hidden="true"></div>
    <div class="about-overlay" aria-hidden="true"></div>

    <div class="container">
        <div class="about-grid">

            <!-- Visual (decorative — not CMS-editable) -->
            <div class="about-visual reveal" aria-hidden="true">
                <div class="visual-inner">
                    <div class="visual-ring ring-1"></div>
                    <div class="visual-ring ring-2"></div>
                    <div class="visual-ring ring-3"></div>
                    <div class="visual-core">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                            <rect width="26" height="26" rx="5" fill="#6c63ff"/>
                            <rect x="34" width="26" height="26" rx="5" fill="#00d4ff" opacity="0.8"/>
                            <rect y="34" width="26" height="26" rx="5" fill="#00d4ff" opacity="0.8"/>
                            <rect x="34" y="34" width="26" height="26" rx="5" fill="#6c63ff"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Text content -->
            <div class="about-content">
                <span class="section-tag reveal">About Us</span>
                <h2 class="section-title reveal reveal-delay-1">
                    <?php echo bpx('about_title', 'Where'); ?>
                    <span class="gradient-text"> <?php echo bpx('about_title_g', 'Passion'); ?></span><br>
                    <?php echo bpx('about_title_2', 'Meets Purpose'); ?>
                </h2>
                <p class="about-lead reveal reveal-delay-2"><?php echo bpx('about_lead', 'At BitPixel, innovation drives everything we do.'); ?></p>
                <p class="about-body reveal reveal-delay-2"><?php echo bpx('about_body', 'Our team of skilled consultants, designers, and developers work together to craft digital experiences that not only meet client goals but exceed expectations. We believe in transparency, collaboration, and continuous improvement — values that make us a trusted partner for global enterprises and startups alike.'); ?></p>

                <div class="values reveal reveal-delay-3">

                    <div class="value-item">
                        <span class="value-icon" aria-hidden="true"><?php echo bpx('about_val1_icon', '🔍'); ?></span>
                        <div class="value-text">
                            <strong><?php echo bpx('about_val1_title', 'Transparency'); ?></strong>
                            <p><?php echo bpx('about_val1_desc', 'Clear communication at every step of the journey'); ?></p>
                        </div>
                    </div>

                    <div class="value-item">
                        <span class="value-icon" aria-hidden="true"><?php echo bpx('about_val2_icon', '🤝'); ?></span>
                        <div class="value-text">
                            <strong><?php echo bpx('about_val2_title', 'Collaboration'); ?></strong>
                            <p><?php echo bpx('about_val2_desc', 'Your team and ours, working as one'); ?></p>
                        </div>
                    </div>

                    <div class="value-item">
                        <span class="value-icon" aria-hidden="true"><?php echo bpx('about_val3_icon', '⚡'); ?></span>
                        <div class="value-text">
                            <strong><?php echo bpx('about_val3_title', 'Innovation'); ?></strong>
                            <p><?php echo bpx('about_val3_desc', "Continuously pushing the boundaries of what's possible"); ?></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>
<!-- /About -->
