import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

class Main extends React.Component{
  render() {
    return (
      <main className='Main-container'>
        <Header />
        MAIN
        <Footer />
      </main>
    )
  }
}

export default Main;