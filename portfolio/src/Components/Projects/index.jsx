import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Projects () {
    return (
      <div className='projects-container big-container'>
        <h1 className='projects-title'>PROJETOS</h1>
        <div className='projects-list'>
          <Link to={'/login'}>
            <img src='../../../recipe' alt="" />
          </Link>
          <Link to={'/trivia/login'}>Trivia</Link>
          <Link to={'/onlinestore'}>Online Store</Link>
          <Link to={'/projetos/4'}>project 4</Link>
          <Link to={'/projetos/5'}>project 5</Link>
        </div>
      </div>
    );
  }

export default Projects;