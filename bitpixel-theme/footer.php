<footer class="site-footer" role="contentinfo">
    <div class="container">
        <div class="footer-grid">

            <!-- Brand -->
            <div class="footer-brand">
                <a href="<?php echo esc_url(home_url('/#home')); ?>" class="footer-logo-link">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo-v02.png"
                         alt="<?php bloginfo('name'); ?>"
                         class="footer-logo">
                </a>
                <p class="footer-tagline">BITPIXEL SOLUTIONS PRIVATE LIMITED</p>
                <p class="footer-desc">Transforming bits and pixels into intelligent digital products since 2019.</p>
            </div>

            <!-- Services col -->
            <div class="footer-col">
                <h4 class="footer-col-heading">Services</h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/#services')); ?>">Branding &amp; UI/UX</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#services')); ?>">Web Development</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#services')); ?>">Mobile Development</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#contact')); ?>">IT Consulting</a></li>
                </ul>
            </div>

            <!-- Company col -->
            <div class="footer-col">
                <h4 class="footer-col-heading">Company</h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/#about')); ?>">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#team')); ?>">Our Team</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#contact')); ?>">Contact</a></li>
                </ul>
            </div>

            <!-- Socials col -->
            <div class="footer-col">
                <h4 class="footer-col-heading">Follow Us</h4>
                <div class="socials">
                    <!-- Facebook -->
                    <a href="#" class="social-link" aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <!-- Instagram -->
                    <a href="#" class="social-link" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <!-- X / Twitter -->
                    <a href="#" class="social-link" aria-label="X (Twitter)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>
            </div>

        </div><!-- /.footer-grid -->

        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> BitPixel Solutions Private Limited. All rights reserved.</p>
            <p>Crafted with <span class="heart" aria-label="love">&#9829;</span> in Bengaluru, India</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
