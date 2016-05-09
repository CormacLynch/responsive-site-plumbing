import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './modules/carousel/init'
import Work from './modules/work/init'
import Anchor from './modules/anchor/anchor'
import MoblieNav from'./modules/mobileNav/mobileNav'
import DesktopNavigation from'./modules/navigation/DesktopNavigation'
import Footer from'./modules/components/Footer'

window._touch = window.innerWidth < 992

window.addEventListener('DOMContentLoaded', function() {

	// navigation
	let navigationEl = document.querySelector('[data-navigation]')

	if (navigationEl) {
		// if (window._touch) {
		// 	console.log('mobile nav')
		// } else {
			ReactDOM.render(<DesktopNavigation />, navigationEl)
		// }
	}

	// footer
	let footerEl = document.querySelector('[data-footer]')

	if (footerEl) {
		ReactDOM.render(<Footer />, footerEl)
	}
})
// function runWithElement(selector: string, callback) {
// 	var element = document.querySelector(selector);

// 	if (element) {
// 		callback(element);
// 	}
// }

// function run() {

// 	runWithElement('[data-anchor]', element => {
// 		var width = window.innerWidth;
// 		initAnchor(element);

// 		if (width < 768) {
// 			initMoblieNav(element);
// 		}
// 	});

// 	runWithElement('[data-carousel]', element => {
// 		initCarousel(element);
// 	});

// 	runWithElement('[data-navigation]', element => {
// 		// initCarousel(element);
// 		console.log('found')
// 	});

// 	runWithElement('[data-work]', element => {
// 		initWork(element);
// 	});

// }

// if (window.addEventListener) {
// 	window.addEventListener('DOMContentLoaded', run);
// } else {
// 	window.attachEvent('onload', run);
// }
