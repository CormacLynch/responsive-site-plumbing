var React = require('react');
var ReactDOM = require('react-dom');
var WorkCarousel = require('./WorkCarousel');

module.exports = function(el) {
	ReactDOM.render(<WorkCarousel />, el);
};
