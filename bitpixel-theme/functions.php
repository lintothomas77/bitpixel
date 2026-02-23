<?php
/**
 * BitPixel Solutions – functions.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ── Theme Support ───────────────────────────────────────────── */
function bitpixel_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'bitpixel' ),
    ] );
}
add_action( 'after_setup_theme', 'bitpixel_setup' );

/* ── Enqueue Scripts & Styles ────────────────────────────────── */
function bitpixel_enqueue() {
    // Google Fonts
    wp_enqueue_style(
        'bitpixel-fonts',
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
        [],
        null
    );

    // Theme stylesheet
    wp_enqueue_style( 'bitpixel-style', get_stylesheet_uri(), [ 'bitpixel-fonts' ], '1.0.0' );

    // Main JS (deferred)
    wp_enqueue_script(
        'bitpixel-main',
        get_template_directory_uri() . '/js/main.js',
        [],
        '1.0.0',
        true   // load in footer
    );

    // Pass Web3Forms key and contact email to JS
    wp_localize_script( 'bitpixel-main', 'BitPixelData', [
        'web3formsKey'  => defined( 'BITPIXEL_WEB3FORMS_KEY' )  ? BITPIXEL_WEB3FORMS_KEY  : '',
        'contactEmail'  => defined( 'BITPIXEL_CONTACT_EMAIL' )  ? BITPIXEL_CONTACT_EMAIL  : 'contact@bitpixelsolutions.com',
    ] );
}
add_action( 'wp_enqueue_scripts', 'bitpixel_enqueue' );

/*
 * ── How to set your Web3Forms key ──────────────────────────────
 * Add these two lines to your wp-config.php (above "That's all"):
 *
 *   define( 'BITPIXEL_WEB3FORMS_KEY',  'YOUR_KEY_HERE' );
 *   define( 'BITPIXEL_CONTACT_EMAIL',  'contact@bitpixelsolutions.com' );
 */
