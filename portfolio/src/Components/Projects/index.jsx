import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Projects () {
  
    return (
      <div>
        <p>PROJETOS</p>
        <div>
          <Link to={'/login'}>project 1</Link>
          <Link to={'/projetos/2'}>project 2</Link>
          <Link to={'/projetos/3'}>project 3</Link>
          <Link to={'/projetos/4'}>project 4</Link>
          <Link to={'/projetos/5'}>project 5</Link>
        </div>
      </div>
    );
  }

export default Projects;