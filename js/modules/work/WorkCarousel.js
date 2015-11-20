var React = require('react');
var workCarousel = require('./work');
var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;
var classNames = require('classnames');

/**
 * Show a carousel of items based on JSON data
 *
 * A div tag (`<div/>`) that
 * shows the carousel
 *
 * @class WorkCarousel
 */
var WorkCarousel = React.createClass({
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
		return workCarousel.map(function(data) {
			return (
				<CarouselItem key={data.ID}>
					<div className='work'>
						<div className='work__content-holder'>
							<h3 className='work__title'>{data.title}</h3>
							<p className='work__content'>{data.content}</p>
						</div>
						<div className='work__image-holder'>
							<img className='work__image' src={data.img} alt={data.title} />
						</div>
					</div>
				</CarouselItem>
			);
		});
	}

});

module.exports = WorkCarousel;
