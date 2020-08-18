<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @package lilly2020
 */

?>

	<footer id="colophon" class="site-footer">
	<div class="footer-widgets">
		<div class="footer-widget-one">
		This is footer widget one.
		</div>
		<div class="footer-widget-two">
		This is footer widget two.
		</div>
		<div class="footer-widget-three">
		This is footer widget three.
		</div>
	</div>
		<div class="site-info">
			Copyright &copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>.
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
