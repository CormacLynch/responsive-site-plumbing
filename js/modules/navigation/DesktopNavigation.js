'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

/**
 * DesktopNavigation
 *
 * @className DesktopNavigation
 */
class DesktopNavigation extends React.Component {
	constructor() {
		super()
		this.state = {
			navigationItems: window._navigation
		}
	}

	render() {
		return (
			<div>
				<a href="/">
					<img className="header__logo" src="images/logo.png" alt="Shane Lynch Plumbing & Heating Logo" />
				</a>
				<div className="nav nav--desktop">
					<div className="l-col-12 l-content h-clearfix l-padding">
						<div className="nav__inner">
							{this.renderNavigationItems()}
						</div>
					</div>
				</div>
			</div>
		)
	}

	renderNavigationItems() {
		return this.state.navigationItems.map(function(item, i) {
			let link = '#' + item.toLowerCase()
			return (
				<a key={'navigation__item--' + i} className="nav__item" href={link}>{item}</a>
			)
		})
	}
};

module.exports = DesktopNavigation
