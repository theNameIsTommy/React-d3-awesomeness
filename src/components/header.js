import React from 'react';
import Navigation from './navigation';
import '../css/header.css';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header">
        <Navigation />
      </header>
    );
  }
};

export default HeaderComponent;
