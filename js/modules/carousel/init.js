var React = require('react');
var ReactDOM = require('react-dom');
var ImageCarousel = require('./ImageCarousel');

module.exports = function(el) {
	ReactDOM.render(<ImageCarousel />, el);
};
