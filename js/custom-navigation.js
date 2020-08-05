/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */


	jQuery(document).ready(function( $ ) {

    var menu 	= $('#site-navigation');
		$(window).resize(function(){
			var w = $(window).width();
			if(w > 768 ) {
				menu.removeAttr('style');
			}
		});

    $("#primary-menu-trigger").click(function() {
      $( "#site-navigation ul").slideToggle( "slow" );
    });
  });
