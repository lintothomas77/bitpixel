<?php
/**
 * BitPixel Solutions – functions.php
 */

if (!defined('ABSPATH'))
    exit;

/* ── Theme Support ───────────────────────────────────────────── */
function bitpixel_setup()
{
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'gallery', 'caption']);

    register_nav_menus([
        'primary' => __('Primary Navigation', 'bitpixel'),
    ]);
}
add_action('after_setup_theme', 'bitpixel_setup');

/* ── Enqueue Scripts & Styles ────────────────────────────────── */
function bitpixel_enqueue()
{
    wp_enqueue_style(
        'bitpixel-fonts',
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
    [],
        null
    );

    wp_enqueue_style('bitpixel-style', get_stylesheet_uri(), ['bitpixel-fonts'], '1.0.1');

    wp_enqueue_script(
        'bitpixel-main',
        get_template_directory_uri() . '/js/main.js',
    [],
        '1.0.1',
        true
    );

    wp_localize_script('bitpixel-main', 'BitPixelData', [
        'web3formsKey' => defined('BITPIXEL_WEB3FORMS_KEY') ? BITPIXEL_WEB3FORMS_KEY : '',
        'contactEmail' => defined('BITPIXEL_CONTACT_EMAIL') ? BITPIXEL_CONTACT_EMAIL : 'contact@bitpixelsolutions.com',
    ]);
}
add_action('wp_enqueue_scripts', 'bitpixel_enqueue');

/* ── Helper: safe text output ────────────────────────────────── */
/**
 * Get a Customizer setting with a fallback default.
 * Returns HTML-escaped text safe for output.
 */
function bpx($key, $default = '')
{
    return esc_html(get_theme_mod($key, $default));
}

/**
 * Same as bpx() but allows basic HTML (e.g. <br> in addresses).
 */
function bpx_html($key, $default = '')
{
    return wp_kses_post(get_theme_mod($key, $default));
}

/* ── WordPress Customizer ─────────────────────────────────────── */
function bitpixel_customizer($wp_customize)
{

    /* helper to register a text setting + control */
    $add = function ($id, $label, $section, $default = '', $type = 'text') use ($wp_customize) {
        $wp_customize->add_setting($id, [
            'default' => $default,
            'sanitize_callback' => 'wp_kses_post',
            'transport' => 'refresh',
        ]);
        $wp_customize->add_control($id, [
            'label' => $label,
            'section' => $section,
            'type' => $type,
        ]);
    };

    /* ────────────────────────────────────────────────────────── */
    /* HERO                                                        */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_hero', [
        'title' => '🚀 Hero',
        'priority' => 10,
    ]);
    $add('hero_badge', 'Badge text', 'bpx_hero', 'Digital Innovation Studio');
    $add('hero_title_1', 'Title — plain part', 'bpx_hero', 'Transforming');
    $add('hero_title_g', 'Title — gradient', 'bpx_hero', 'Bits & Pixels');
    $add('hero_title_2', 'Title — line 2', 'bpx_hero', 'into Digital Solutions');
    $add('hero_subtitle', 'Subtitle', 'bpx_hero', 'At BitPixel Solutions, we turn ideas into intelligent digital products. Empowering businesses through cutting-edge software, design, and strategy.', 'textarea');
    $add('hero_cta1', 'CTA 1 label', 'bpx_hero', 'Explore Services');
    $add('hero_cta2', 'CTA 2 label', 'bpx_hero', 'Our Story');
    $add('hero_card1', 'Floating card 1', 'bpx_hero', 'Launched 50+ Products');
    $add('hero_card2', 'Floating card 2', 'bpx_hero', '5★ Client Rating');
    $add('hero_card3', 'Floating card 3', 'bpx_hero', 'Global Clients');

    /* ────────────────────────────────────────────────────────── */
    /* STATS                                                       */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_stats', [
        'title' => '📊 Stats',
        'priority' => 20,
    ]);
    $defaults = [
        1 => ['50', '+', 'Projects Delivered'],
        2 => ['30', '+', 'Happy Clients'],
        3 => ['5', '+', 'Years Experience'],
        4 => ['100', '%', 'Client Satisfaction'],
    ];
    foreach ($defaults as $i => $d) {
        $add("stat{$i}_number", "Stat $i — number", 'bpx_stats', $d[0]);
        $add("stat{$i}_suffix", "Stat $i — suffix", 'bpx_stats', $d[1]);
        $add("stat{$i}_label", "Stat $i — label", 'bpx_stats', $d[2]);
    }

    /* ────────────────────────────────────────────────────────── */
    /* SERVICES                                                    */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_services', [
        'title' => '⚙️ Services',
        'priority' => 30,
    ]);
    $add('svc_tag', 'Section tag', 'bpx_services', 'What We Do');
    $add('svc_title', 'Title', 'bpx_services', 'Business Growth');
    $add('svc_title_g', 'Title (gradient)', 'bpx_services', 'Advisory');
    $add('svc_subtitle', 'Subtitle', 'bpx_services', 'Technology is the tool. People are the difference.');

    $svcs = [
        1 => ['Branding & UI/UX', 'Build experiences that connect and convert. From digital identity design to intuitive user journeys, we ensure your brand speaks clearly across every platform.', 'Brand Identity & Strategy', 'UI/UX Design Systems', 'Prototyping & User Research'],
        2 => ['Web Development', 'Smart, scalable, and secure web solutions built for your business. Our expert developers craft high-performing websites and web apps that deliver seamless results.', 'Custom Web Applications', 'E-commerce Platforms', 'Performance Optimisation'],
        3 => ['Mobile Development', 'Stay connected with your audience anywhere, anytime. Cross-platform apps combining sleek design, strong performance, and exceptional user experience.', 'iOS & Android Apps', 'Cross-Platform (React Native)', 'App Store Optimisation'],
    ];
    foreach ($svcs as $i => $d) {
        $add("svc{$i}_title", "Service $i — title", 'bpx_services', $d[0]);
        $add("svc{$i}_desc", "Service $i — description", 'bpx_services', $d[1], 'textarea');
        $add("svc{$i}_feat1", "Service $i — feature 1", 'bpx_services', $d[2]);
        $add("svc{$i}_feat2", "Service $i — feature 2", 'bpx_services', $d[3]);
        $add("svc{$i}_feat3", "Service $i — feature 3", 'bpx_services', $d[4]);
        $add("svc{$i}_cta", "Service $i — CTA label", 'bpx_services', 'Start a Project');
    }

    /* ────────────────────────────────────────────────────────── */
    /* ABOUT                                                       */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_about', [
        'title' => 'ℹ️ About',
        'priority' => 40,
    ]);
    $add('about_title', 'Title — plain', 'bpx_about', 'Where');
    $add('about_title_g', 'Title — gradient', 'bpx_about', 'Passion');
    $add('about_title_2', 'Title — line 2', 'bpx_about', 'Meets Purpose');
    $add('about_lead', 'Lead paragraph', 'bpx_about', 'At BitPixel, innovation drives everything we do.');
    $add('about_body', 'Body paragraph', 'bpx_about', 'Our team of skilled consultants, designers, and developers work together to craft digital experiences that not only meet client goals but exceed expectations. We believe in transparency, collaboration, and continuous improvement — values that make us a trusted partner for global enterprises and startups alike.', 'textarea');

    $values = [
        ['🔍', 'Transparency', 'Clear communication at every step of the journey'],
        ['🤝', 'Collaboration', 'Your team and ours, working as one'],
        ['⚡', 'Innovation', "Continuously pushing the boundaries of what's possible"],
    ];
    foreach ($values as $i => $v) {
        $n = $i + 1;
        $add("about_val{$n}_icon", "Value $n — icon", 'bpx_about', $v[0]);
        $add("about_val{$n}_title", "Value $n — title", 'bpx_about', $v[1]);
        $add("about_val{$n}_desc", "Value $n — desc", 'bpx_about', $v[2]);
    }

    /* ────────────────────────────────────────────────────────── */
    /* TEAM                                                        */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_team', [
        'title' => '👥 Team',
        'priority' => 50,
    ]);
    $add('team_title', 'Title — plain', 'bpx_team', 'Experts Driving');
    $add('team_title_g', 'Title — gradient', 'bpx_team', 'Your Success');
    $add('team_subtitle', 'Subtitle', 'bpx_team', 'Meet the minds behind the magic.');

    $members = [
        1 => ['LT', 'Linto Thomas', 'Co-Founder', 'Visionary leader with a passion for building scalable digital products that make a difference.'],
        2 => ['LE', 'Libin Emmanuel', 'Co-Founder', 'Strategic thinker and technology architect dedicated to delivering innovative solutions that exceed expectations.'],
    ];
    foreach ($members as $i => $m) {
        $add("team{$i}_initials", "Member $i — initials", 'bpx_team', $m[0]);
        $add("team{$i}_name", "Member $i — name", 'bpx_team', $m[1]);
        $add("team{$i}_role", "Member $i — role", 'bpx_team', $m[2]);
        $add("team{$i}_bio", "Member $i — bio", 'bpx_team', $m[3], 'textarea');
    }

    /* ────────────────────────────────────────────────────────── */
    /* CONTACT                                                     */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_contact', [
        'title' => '📬 Contact',
        'priority' => 60,
    ]);
    $add('contact_title', 'Title — plain', 'bpx_contact', "Let's Build");
    $add('contact_title_g', 'Title — gradient', 'bpx_contact', 'Something Great');
    $add('contact_lead', 'Lead text', 'bpx_contact', "Ready to transform your digital presence? Reach out and let's talk about your project.", 'textarea');
    $add('contact_email', 'Email address', 'bpx_contact', 'contact@bitpixelsolutions.com');
    $add('contact_phone', 'Phone number', 'bpx_contact', '+91 97458 75010');
    $add('contact_address', 'Address (HTML OK)', 'bpx_contact', '3rd Floor, Site No. 74, Mass Complex,<br>15th Cross Road, Sarakki Industrial Area,<br>3rd Phase, J. P. Nagar,<br>Bengaluru, Karnataka 560078', 'textarea');

    /* ────────────────────────────────────────────────────────── */
    /* FOOTER                                                      */
    /* ────────────────────────────────────────────────────────── */
    $wp_customize->add_section('bpx_footer', [
        'title' => '🦶 Footer',
        'priority' => 70,
    ]);
    $add('footer_tagline', 'Tagline', 'bpx_footer', 'BITPIXEL SOLUTIONS PRIVATE LIMITED');
    $add('footer_desc', 'Description', 'bpx_footer', 'Transforming bits and pixels into intelligent digital products since 2019.');
}
add_action('customize_register', 'bitpixel_customizer');

/*
 * ── How to set your Web3Forms key ──────────────────────────────
 * Add these two lines to your wp-config.php (above "That's all"):
 *
 *   define( 'BITPIXEL_WEB3FORMS_KEY',  'YOUR_KEY_HERE' );
 *   define( 'BITPIXEL_CONTACT_EMAIL',  'contact@bitpixelsolutions.com' );
 */
