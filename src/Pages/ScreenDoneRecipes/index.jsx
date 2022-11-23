import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import DoneAndFavorite from '../../components/DoneAndFavorite';
import { getLocalStorage } from '../../services/LocalStorage';

import './index.css';
import atentionIcon from '../../images/atencao.svg';

function ScreenFavoriteRecipes() {
  const [haveDone, setHaveDone] = useState(false);
  useEffect(() => {
    const favoriteStorage = async () => {
      const favoriteCheck = await getLocalStorage('doneRecipes');
      if (favoriteCheck) { setHaveDone(true); }
    };
    favoriteStorage();
  }, []);
  return (
    <div className="favorites-container">
      <Header />
      {haveDone ? (<DoneAndFavorite />
      ) : (
        <div className="favorites-not-found-container">
          <div className="favorites-not-found">
            <img src={ atentionIcon } alt="AtençãoIcon" />
            <h3>Você ainda não possui receitas completas.</h3>
          </div>
        </div>)}
    </div>
  );
}

export default ScreenFavoriteRecipes;
