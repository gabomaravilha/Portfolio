import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header-main-container">
          <img className='header-image' src='' alt='LOGO'/>
          <nav className='header-nav'>
            <Link className='link-text' to={'home'}>home</Link>
            <Link className='link-text' to={'about'}>about</Link>
            <Link className='link-text' to={'contact'}>contact</Link>
          </nav>
      </header>
    );
  }
}

export default Header;