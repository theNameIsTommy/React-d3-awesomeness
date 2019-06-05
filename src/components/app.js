import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './header';
import MainComponent from './main';
import AboutComponent from './about';
import FooterComponent from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

class AppComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Router>
            <Route component={HeaderComponent} />
            <Route exact path="/" component={MainComponent} />
              <Route path="/about" component={AboutComponent} />
              {/* <Route path="/topics" component={Topics} /> */}
            <Route component={FooterComponent} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
};

export default AppComponent;
