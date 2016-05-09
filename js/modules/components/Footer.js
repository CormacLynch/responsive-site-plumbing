'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Footer
 *
 * @className Footer
 */
class Footer extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<div className="l-col-12 l-content l-padding h-clearfix footer__logos">
					<img src="images/logos.jpg" alt="Shane Lynch Plumbing & Heating Logo" />
				</div>
				<div className="footer__copy">
					<div className="l-col-12 l-content l-padding h-clearfix">
						<copyright>© <script>document.write(new Date().getFullYear())</script> by <a href="http://linkedin.cormaclynch.net">Cormac Lynch.</a> All rights reserved.</copyright>
					</div>
				</div>
			</div>
		)
	}
};

module.exports = Footer
