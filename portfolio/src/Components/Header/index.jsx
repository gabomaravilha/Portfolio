import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="Header-container">
        <div className="Header-content">
          <img src='' alt='LOGO'/>
          <nav>
            home
            about 
            contact
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;