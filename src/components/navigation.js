import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/navigation.css';

class NavigationComponent extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/topics" className="nav-link" activeClassName="active">Topics</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
};

export default NavigationComponent;
