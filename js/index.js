var initCarousel = require('./modules/carousel/init');
var initWork = require('./modules/work/init');
var initAnchor = require( './modules/anchor/anchor' );
var initMoblieNav = require( './modules/mobileNav/mobileNav' );

/**
 * Run a callback if a selector matches, passing the matched element as an argument
 *
 * @param string selector
 * @param callable callback - function(element: DOMElement)
 */
function runWithElement(selector: string, callback) {
	var element = document.querySelector(selector);

	if (element) {
		callback(element);
	}
}

function run() {

	runWithElement('[data-anchor]', element => {
		var width = window.innerWidth;
		initAnchor(element);

		if (width < 768) {
			initMoblieNav(element);
		}
	});

	runWithElement('[data-carousel]', element => {
		initCarousel(element);
	});

	runWithElement('[data-work]', element => {
		initWork(element);
	});

}

if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', run);
} else {
	window.attachEvent('onload', run);
}
