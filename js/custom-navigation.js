/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */


	jQuery(document).ready(function( $ ) {

    $("#primary-menu-trigger").click(function() {
      $( "#site-navigation ul").slideToggle( "slow" );
    });
  });
