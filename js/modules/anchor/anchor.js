//Anchors
var $ = require( 'jquery' );

function Anchor( el ) {
	$( '[data-anchor-trigger]' ).on('click', function(e) {
		var href = $.attr(this, 'href');
		var offsetTop = 0;
		var identifer = href.substr(href.lastIndexOf('#') + 1);
		e.preventDefault();

		if ($( window ).width() < 768) {
			offsetTop = 65;
		} else {
			offsetTop = 20;
		}

		if($( '[data-nav-content]' ).is(":visible")) {
			$('[data-nav-trigger]').removeClass('nav__menu--active');
			$( '[data-nav-content]' ).slideUp();
		}

		var top = $('[id="'+identifer+'"]').offset().top;
		$( 'html, body').animate({ scrollTop: top - offsetTop }, 400);
		return false;
	});
}

module.exports = function($el) {
	var anchor = new Anchor($el);

	return anchor;
};
