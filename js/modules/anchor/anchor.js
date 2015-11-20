//Anchors
var $ = require( 'jquery' );

function Anchor( el ) {
	$( '[data-anchor-trigger]' ).on('click', function(e) {
		var href = $.attr(this, 'href');
		var identifer = href.substr(href.lastIndexOf('#') + 1);
		e.preventDefault();

		var top = $('[id="'+identifer+'"]').offset().top;
		$( 'html, body').animate({ scrollTop: top - 20 }, 400);
		return false;
	});
}

module.exports = function($el) {
	var anchor = new Anchor($el);

	return anchor;
};
