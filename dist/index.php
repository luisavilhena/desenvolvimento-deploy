<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package desenvolvimento-deploy-wp-theme
 */

get_header(); ?>

<main class="below-header-container">
  <?php while (have_posts()) : the_post(); ?>
    <?php
    dd_component__page_section(array(
      'background-color' => 'magenta',
    ), function () {
      ?>
      <h1>
        <?php the_title(); ?>
      </h1>
      <?php
    })
    ?>
  <?php endwhile; ?>
</main>

<?php
get_footer();