import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="Header-container">
        <div className="Header-content">
          <img src='' alt='LOGO'/>
          <nav>
            home
            about 
            contact
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;