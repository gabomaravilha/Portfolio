import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Projects from '../../Components/Projects';
import './index.css';

class Main extends React.Component{
  render() {
    return (
      <div>
        <Header />
          <main className='main-container'>
            <p className='main-content'>
              Desenvolvedor Web Full Stack 
            </p>
            <img src="" alt="foto-perfil" className='main-img' />
          </main>
          <Projects />
        <Footer />
      </div>
    )
  }
}

export default Main;