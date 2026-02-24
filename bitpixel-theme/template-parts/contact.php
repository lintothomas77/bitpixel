<!-- ── Contact ─────────────────────────────────────────────────────── -->
<section class="contact-section" id="contact" aria-label="Contact Us">

    <div class="contact-bg" aria-hidden="true"></div>
    <div class="contact-overlay" aria-hidden="true"></div>

    <div class="container">
        <div class="contact-grid">

            <!-- Contact Info -->
            <div>
                <span class="section-tag reveal"><?php echo bpx('contact_tag', 'Get In Touch'); ?></span>
                <h2 class="section-title reveal reveal-delay-1">
                    <?php echo bpx('contact_title', "Let's Build"); ?><br>
                    <span class="gradient-text"><?php echo bpx('contact_title_g', 'Something Great'); ?></span>
                </h2>
                <p class="contact-lead reveal reveal-delay-2">
                    <?php echo bpx('contact_lead', "Ready to transform your digital presence? Reach out and let's talk about your project."); ?>
                </p>

                <div class="contact-details reveal reveal-delay-3">

                    <div class="contact-item" id="contact-email">
                        <div class="contact-item-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <div>
                            <span class="contact-item-label">Email Us</span>
                            <?php $email = bpx('contact_email', 'contact@bitpixelsolutions.com'); ?>
                            <a href="mailto:<?php echo esc_attr($email); ?>" class="contact-item-value"><?php echo $email; ?></a>
                        </div>
                    </div>

                    <div class="contact-item" id="contact-phone">
                        <div class="contact-item-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011.07 2.18 2 2 0 013.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                        </div>
                        <div>
                            <span class="contact-item-label">Call Us</span>
                            <?php $phone = bpx('contact_phone', '+91 97458 75010'); ?>
                            <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $phone)); ?>" class="contact-item-value"><?php echo $phone; ?></a>
                        </div>
                    </div>

                    <div class="contact-item" id="contact-address">
                        <div class="contact-item-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <div>
                            <span class="contact-item-label">Visit Us</span>
                            <address class="contact-item-value"><?php echo bpx_html('contact_address', '3rd Floor, Site No. 74, Mass Complex,<br>15th Cross Road, Sarakki Industrial Area,<br>3rd Phase, J. P. Nagar,<br>Bengaluru, Karnataka 560078'); ?></address>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Contact Form -->
            <div class="form-wrap reveal reveal-delay-2">
                <form id="contact-form" novalidate>
                    <h3 class="form-title">Send a Message</h3>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-name">Your Name</label>
                            <input type="text" id="contact-name" name="name" placeholder="John Doe"
                                   required autocomplete="name">
                        </div>
                        <div class="form-group">
                            <label for="contact-email-input">Email Address</label>
                            <input type="email" id="contact-email-input" name="email"
                                   placeholder="john@example.com" required autocomplete="email">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="contact-subject">Subject</label>
                        <input type="text" id="contact-subject" name="subject"
                               placeholder="Tell us what you need">
                    </div>

                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" name="message" rows="5"
                                  placeholder="Describe your project..." required></textarea>
                    </div>

                    <button type="submit" class="btn-form" id="form-submit">
                        <span id="form-label">Send Message</span>
                        <span id="form-icon" aria-hidden="true">→</span>
                    </button>
                </form>
            </div>

        </div>
    </div>
</section>
<!-- /Contact -->
