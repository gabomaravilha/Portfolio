import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getSurpriseMe } from '../../services/apiFilter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';
import ingredientsIcon from '../../images/ingredientes.svg';
import surpraseIcon from '../../images/surprase.svg';

function DrinksScreenExplore() {
  const navigate = useNavigate();
  const handleGetSurpriseMe = async () => {
    const response = await getSurpriseMe('drinks');

    const id = response.drinks[0].idDrink;
    navigate(`/drinks/${id}`);
  };

  return (
    <div className="drinks-explorer-container">
      <Header />
      <div className="btn-explorer">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => navigate('/explore/drinks/ingredients') }
        >
          By Ingredient
          <img src={ ingredientsIcon } alt="IconIngrediets" />
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handleGetSurpriseMe() }
        >
          Surprise me!
          <img src={ surpraseIcon } alt="surpraseIcon" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default DrinksScreenExplore;
