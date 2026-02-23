<?php
// Fallback – redirect to front page
if (!is_front_page()) {
    wp_redirect(home_url());
    exit;
}
get_template_part('front-page');
