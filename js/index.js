var initCarousel = require('./modules/carousel/init');
var initWork = require('./modules/work/init');
var initAnchor = require( './modules/anchor/anchor' );

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
		initAnchor(element);
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
