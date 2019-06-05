import React from 'react';
import Navigation from './navigation';

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
