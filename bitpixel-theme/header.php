<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="BitPixel Solutions – Transforming Bits and Pixels into Digital Solutions. IT Consulting, Software Development, Branding and Mobile Apps in Bengaluru, India.">
    <meta name="keywords" content="IT consulting, web development, mobile development, branding, UI/UX, digital transformation, Bengaluru">
    <link rel="icon" type="image/x-icon" href="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo.ico">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- ── Navigation ──────────────────────────────────────────────── -->
<nav class="site-nav" id="site-nav" aria-label="Main navigation">
    <div class="nav-container">
        <a href="<?php echo esc_url(home_url('/#home')); ?>" class="nav-logo" id="nav-logo-link">
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo-v02.png"
                 alt="<?php bloginfo('name'); ?>"
                 height="50">
        </a>

        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>

        <ul class="nav-links" id="nav-links" role="list">
            <?php
$nav_items = ['services' => 'Services', 'about' => 'About', 'team' => 'Team', 'contact' => 'Contact'];
foreach ($nav_items as $id => $label): ?>
                <li>
                    <a href="<?php echo esc_url(home_url("/#$id")); ?>" class="nav-link">
                        <?php echo esc_html($label); ?>
                    </a>
                </li>
            <?php
endforeach; ?>
            <li>
                <a href="<?php echo esc_url(home_url('/#contact')); ?>"
                   class="btn btn-nav" id="nav-cta">Get Started</a>
            </li>
        </ul>
    </div>
</nav>
<!-- /Navigation -->
