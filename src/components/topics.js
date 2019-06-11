import React from 'react';
import '../css/topics.css';

class TopicsComponent extends React.Component {
  render() {
    return (
      <main id="main" className="main-topics">
        <p>More to come here. Until then:</p>
        <iframe width="720" height="540" src="https://www.youtube.com/embed/EyFObnbB1dw" frameborder="10" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>
    );
  }
};

export default TopicsComponent;
