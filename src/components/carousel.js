import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/carousel.css'

// TODO: find why the 3rd pic animation isn't smooth

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3><span>Can you find Waldo?</span></h3>
           {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3><span>He wasn't there..</span></h3>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3><span>These are random pictures</span></h3>
            {/*<p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

// render(<ControlledCarousel />);
export default ControlledCarousel;