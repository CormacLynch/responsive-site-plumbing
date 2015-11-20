var React = require('react');
var carouselImages = require('./images');
var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;
var classNames = require('classnames');

/**
 * Show a carousel of items based on JSON data
 *
 * A div tag (`<div/>`) that
 * shows the carousel
 *
 * @class ImageCarousel
 */
var ImageCarousel = React.createClass({
	render: function() {
		return (
			<Carousel
				animateIn={true}
				interval={4000}
				controls={false}
				nextIcon={<span className="icon icon-next" />}
				prevIcon={<span className="icon icon-prev" />}>
				{this.renderItems()}
			</Carousel>
		);
	},

	renderItems: function() {
		return carouselImages.map(function(data) {
			return (
				<CarouselItem key={data.ID}>
					<img className='carousel__image' src={data.img} alt={data.title} />
					<span className='carousel__title'>{data.title}</span>
				</CarouselItem>
			);
		});
	}

});

module.exports = ImageCarousel;
