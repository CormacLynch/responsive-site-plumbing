//MobileNavs
var $ = require( 'jquery' );

function MobileNav( el ) {
	$( '[data-nav-trigger]' ).on('click', function(e) {
		e.preventDefault();

		if($( '[data-nav-content]' ).is(":visible")) {
			$('[data-nav-trigger]').removeClass('nav__menu--active');
		} else {
			$('[data-nav-trigger]').addClass('nav__menu--active');
		}

		$('[data-nav-content]').slideToggle();

	});
}

module.exports = function($el) {
	var mobileNav = new MobileNav($el);

	return MobileNav;
};
