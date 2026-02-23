<?php get_header(); ?>

<main style="position:relative;z-index:2;min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:10rem 1.5rem 6rem;">
    <div>
        <span class="section-tag">404</span>
        <h1 class="section-title" style="margin-top:1rem;">
            Page <span class="gradient-text">Not Found</span>
        </h1>
        <p style="color:var(--c-text-muted);margin:1.5rem auto 2.5rem;max-width:440px;line-height:1.7;">
            The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
            Back to Home
        </a>
    </div>
</main>

<?php get_footer(); ?>
