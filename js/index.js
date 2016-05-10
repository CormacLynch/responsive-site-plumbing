import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './modules/carousel/init'
import Work from './modules/work/init'
import Anchor from './modules/anchor/anchor'
import MoblieNav from'./modules/mobileNav/mobileNav'
import DesktopNavigation from'./modules/navigation/DesktopNavigation'
import Footer from'./modules/components/Footer'
import Splash from'./modules/components/Splash'

window._touch = window.innerWidth < 992
window._location = window.location

window.addEventListener('DOMContentLoaded', function() {
	let currentURL = null
	let pathname = window._location.pathname
	let pathnameSplit = pathname.split('/');
	let htmlString = pathnameSplit[pathnameSplit.length - 1]
	let htmlStringSplit = htmlString.split('.');
	currentURL = htmlStringSplit[0]

	var navigationLowecase = [];
	for (var i = 0; i < window._navigation.length; i++) {
		navigationLowecase.push(window._navigation[i].toLowerCase());
	}

	// navigation
	let navigationEl = document.querySelector('[data-navigation]')

	if (navigationEl) {
		// if (window._touch) {
		// 	console.log('mobile nav')
		// } else {
			ReactDOM.render(<DesktopNavigation data={currentURL}/>, navigationEl)
		// }
	}

	// footer
	let footerEl = document.querySelector('[data-footer]')

	if (footerEl) {
		ReactDOM.render(<Footer />, footerEl)
	}

	// splash
	let splashEl = document.querySelector('[data-splash]')

	if (splashEl) {
		ReactDOM.render(<Splash current={currentURL} navigation={navigationLowecase}/>, splashEl)
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
