import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-container">
          <div className="footer-content">
            <div>
              <Link to={'/contact'}>contact information</Link>
            </div>
            <div>
              <Link to={'/projetos/1'}>project 1</Link>
              <Link to={'/projetos/2'}>project 2</Link>
              <Link to={'/projetos/3'}>project 3</Link>
              <Link to={'/projetos/4'}>project 4</Link>
              <Link to={'/projetos/5'}>project 5</Link>
            </div>
          </div>
        </footer>
        <img src="" alt="footer-logo" />
      </>
    );
  }
}

export default Footer;