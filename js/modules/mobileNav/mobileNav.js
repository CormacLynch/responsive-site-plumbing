//MobileNavs
var $ = require( 'jquery' );

function MobileNav( el ) {
	$( '[data-nav-trigger]' ).on('click', function(e) {
		e.preventDefault();

		$('[data-nav-content]').slideToggle();

	});
}

module.exports = function($el) {
	var mobileNav = new MobileNav($el);

	return MobileNav;
};
