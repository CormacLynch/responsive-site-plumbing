'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

/**
 * DesktopNavigation
 *
 * @className DesktopNavigation
 */
class DesktopNavigation extends React.Component {
	constructor(props) {
		super()

		let {data} = props

		this.state = {
			navigationItems: window._navigation,
			current: data
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
			let linkName = item.toLowerCase()
			let webLink = linkName + '.html'
			let classes = this.state.current === linkName ? 'nav__item nav__item--current' : 'nav__item'

			return (
				<a key={'navigation__item--' + i} className={classes} href={webLink}>{item}</a>
			)
		}.bind(this))
	}
};

module.exports = DesktopNavigation
