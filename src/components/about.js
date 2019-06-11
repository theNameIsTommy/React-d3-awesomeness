import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import ControlledCarousel from './carousel';
import '../css/about.css'

class AboutComponent extends React.Component {
  render() {
    return (
      <main id="main" className="main-about">
        {/* about content area*/}
        <ControlledCarousel></ControlledCarousel>
      </main>
    );
  }
};

export default AboutComponent;

