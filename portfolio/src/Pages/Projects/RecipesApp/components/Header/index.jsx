import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import IconProfile from '../../images/profileIcon.svg';
import IconSearch from '../../images/searchIcon.svg';
import Search from '../Search/index';
import verifyTittle from '../../services/verifyTittle';
import './index.css';

function Header({ buttonSearch }) {
  const [inputSearch, setInputSearch] = useState(false);
  const [inputFilter, setInputFilter] = useState('');

  const handleInput = ({ target: { value } }) => {
    setInputFilter(value);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-nav">
          <button
            type="button"
            onClick={ () => navigate('/profile') }
            className="button-user"
          >
            <img
              src={ IconProfile }
              alt="Icone do Perfil"
              className="icon-user-avatar"
              data-testid="profile-top-btn"
            />
          </button>
          <h3 data-testid="page-title">{verifyTittle(pathname)}</h3>

          {buttonSearch && (
            <button
              type="button"
              onClick={ () => setInputSearch(!inputSearch) }
              className="button-search"
            >
              <img
                src={ IconSearch }
                alt="Icone de busca"
                className="icon-search"
                data-testid="search-top-btn"
              />
            </button>
          )}
        </div>
        {inputSearch && (
          <div className="search">
            <input
              type="text"
              className="input-search"
              name="inputSearch"
              placeholder="Pesquisar"
              data-testid="search-input"
              onChange={ (e) => handleInput(e) }
            />
            <Search inputText={ inputFilter } />
          </div>
        )}
      </div>
    </header>
  );
}

Header.defaultProps = {
  buttonSearch: false,
};

Header.propTypes = {
  buttonSearch: PropTypes.bool,
};

export default Header;
