# BitPixel Solutions

Corporate website for **BitPixel Solutions** — _Transforming Bits and Pixels into Digital Solutions._

A custom **WordPress theme** hand-built without any page builder — clean PHP templates, vanilla JS, and a full CSS design system.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| CMS         | WordPress                           |
| Templating  | PHP (custom theme, no page builder) |
| Styling     | Vanilla CSS (custom design system)  |
| JavaScript  | Vanilla JS (no framework)           |
| Contact Form| Web3Forms API                       |
| Fonts       | Space Grotesk & Inter (Google Fonts)|

---

## Theme Structure

```
bitpixel-theme/
├── style.css                 # Theme declaration + full design system
├── functions.php             # Enqueue scripts/styles, theme supports
├── index.php                 # Fallback template
├── front-page.php            # Home page (assembles all sections)
├── header.php                # <head>, navbar
├── footer.php                # Footer markup + wp_footer()
├── 404.php                   # 404 page
├── images/                   # Logo assets
├── js/
│   └── main.js               # All JS: particles, counters, form, tilt, etc.
└── template-parts/
    ├── hero.php
    ├── stats.php
    ├── services.php
    ├── about.php
    ├── team.php
    └── contact.php
```

---

## Local Development

Uses **[Local by WP Engine](https://localwp.com/)** for local WordPress hosting.

1. Copy `bitpixel-theme/` into your WordPress install:
   ```
   wp-content/themes/bitpixel-theme/
   ```

2. Activate in **Appearance → Themes**

3. Set front page: **Settings → Reading → A static page → Home**

---

## Contact Form Configuration

Add these constants to `wp-config.php` (above `/* That's all, stop editing! */`):

```php
define( 'BITPIXEL_WEB3FORMS_KEY', 'YOUR_KEY_HERE' );
define( 'BITPIXEL_CONTACT_EMAIL', 'contact@bitpixelsolutions.com' );
```

The key is passed securely to `main.js` via `wp_localize_script`.

---

## License

Private — All rights reserved © BitPixel Solutions.
