import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import drinkIcon from '../../images/explore-drink-icon.svg';
import foodIcon from '../../images/explore-food-icon.svg';
import './index.css';

function MainScreenExplore() {
  const navigate = useNavigate();

  return (
    <div className="main-explorer-container">
      <Header />
      <div className="main-explorer-content">
        <button
          type="button"
          onClick={ () => navigate('/explore/foods') }
          className="card-explorer-food"
          data-testid="explore-foods"
        >
          Explore Foods
          <img src={ foodIcon } alt="IconDrink" />
        </button>
        <button
          type="button"
          className="card-explorer-drink"
          onClick={ () => navigate('/explore/drinks') }
          data-testid="explore-drinks"
        >
          Explore Drinks
          <img src={ drinkIcon } alt="IconFood" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default MainScreenExplore;
