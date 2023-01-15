import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
        <div className='footer-container-main'>
            <div>
              <Link className='link-text' to={'/contact'}>contact information</Link>
            </div>
            <div className='footer-projects'>
              <Link to={'/login'}>Recipes App</Link>
              <Link to={'/trivia/login'}>Trivia</Link>
              <Link to={'/onlinestore'}>Online Store</Link>
              <Link to={'/projetos/4'}>project 4</Link>
            </div>
          <img src="" alt="footer-logo" />
        </div>
    );
  }
}

export default Footer;