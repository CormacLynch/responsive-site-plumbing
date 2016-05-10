'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Splash
 *
 * @className Splash
 */
class Splash extends React.Component {
	constructor(props) {
		super()

		let {current} = props
		let {navigation} = props

		this.state = {
			navigationItems: window._navigation,
			current: current,
			navigationLowercase: navigation
		}
	}

	render() {
		return (
			<div className="splash">
				<div className="splash__overlay" />
				{this.renderSlogan()}
			</div>
		)
	}

	renderSlogan() {
		let indexOfCurrent = this.state.navigationLowercase.indexOf(this.state.current)
		let slogan = indexOfCurrent > -1 ? this.state.navigationItems[indexOfCurrent] : 'Plumbing at its finest'

		return (<h1>{slogan}</h1>)
	}
};

module.exports = Splash
