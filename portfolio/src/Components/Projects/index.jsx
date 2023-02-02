import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
const triviaImage = 'https://media.istockphoto.com/id/1064066314/pt/vetorial/trivia.jpg?s=612x612&w=0&k=20&c=Y5p6pxqjt3qkmv96ssbj_RkNwA99g6Mrz_D3B8Sh3CA='
const onlineStore = 'https://cdn2.wpbeginner.com/wp-content/uploads/2016/10/buildonlinestore.jpg'

function Projects () {
    return (
      <div className='projects-container big-container'>
        <h1 className='projects-title'>PROJETOS</h1>
        <div className='projects-list'>
          <Link to={'/login'}>
            <img src="https://i.ibb.co/gPhnvvR/recipe.png" alt="Recipes app" className='project-image'/>
          </Link>
          <Link to={'/trivia/login'} className='link-project'>
            <img src={ triviaImage } alt="Trivia" className='project-image'/>
          </Link>
          <Link to={'/onlinestore'}>
            <img src={ onlineStore } alt="Online Store" className='project-image' />
          </Link>
        </div>
      </div>
    );
  }

export default Projects;