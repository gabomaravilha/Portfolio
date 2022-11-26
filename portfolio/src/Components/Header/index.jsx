import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
          <img className='header-image' src='' alt='LOGO'/>
          <nav className='header-nav'>
          <Link to={'home'}>home</Link>
          <Link to={'about'}>about</Link>
          <Link to={'contact'}>contact</Link>
          </nav>
      </header>
    );
  }
}

export default Header;