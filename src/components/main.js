import React from 'react';
import '../css/main.css';

class MainComponent extends React.Component {
  render() {
    return (
      <main id="main" className="main-main container-fluid">
        <div class="row">
          <div class="col-sm">
            main content area
          </div>
        </div>
      </main>
    );
  }
};

export default MainComponent;
