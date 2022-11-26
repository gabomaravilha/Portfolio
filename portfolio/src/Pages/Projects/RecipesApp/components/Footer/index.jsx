import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import drinks from '../../images/drinkIcon.svg';
import explore from '../../images/exploreIcon.svg';
import food from '../../images/mealIcon.svg';
import { actionCardCategories } from '../../redux/slices/filterSlice';

import './index.css';

export default function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div data-testid="footer" className="footer-container">
      <div className="footer-content">
        <button
          type="button"
          onClick={ () => {
            dispatch(actionCardCategories(false));
            navigate('/drinks');
          } }
        >
          <img data-testid="drinks-bottom-btn" src={ drinks } alt="drinksIcon" />
        </button>
        <button
          type="button"
          onClick={ () => {
            dispatch(actionCardCategories(false));
            navigate('/explore');
          } }
        >
          <img data-testid="explore-bottom-btn" src={ explore } alt="drinksIcon" />
        </button>
        <button
          type="button"
          onClick={ () => {
            dispatch(actionCardCategories(false));
            navigate('/foods');
          } }
        >
          <img data-testid="food-bottom-btn" src={ food } alt="drinksIcon" />
        </button>
      </div>
    </div>
  );
}
