import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function CardByCategory() {
  const data = useSelector(({ filters }) => filters.categoryFilter);
  const MAX_LENGTH = 12;
  const { pathname } = useLocation();    
  const URLName = pathname.split('/')[1];

  return (
    <ul className="card-list">
      {URLName === 'foods'
        && data.meals
        && data.meals.slice(0, MAX_LENGTH).map((item, index) => (
          <Link to={ `/${URLName}/${item.idMeal}` } key={ index }>
            <li className="card-list-item" data-testid={ `${index}-recipe-card` }>
              <img
                src={ item.strMealThumb }
                alt="FoodsImage"
                data-testid={ `${index}-card-img` }
              />
              <strong data-testid={ `${index}-card-name` }>{item.strMeal}</strong>
            </li>
          </Link>
        ))}

      {URLName === 'drinks'
        && data.drinks
        && data.drinks.slice(0, MAX_LENGTH).map((item, index) => (
          <Link to={ `/${URLName}/${item.idDrink}` } key={ index }>
            <li className="card-list-item" data-testid={ `${index}-recipe-card` }>
              <img
                src={ item.strDrinkThumb }
                alt="FoodsImage"
                data-testid={ `${index}-card-img` }
              />
              <strong data-testid={ `${index}-card-name` }>{item.strDrink}</strong>
            </li>
          </Link>
        ))}
    </ul>
  );
}

export default CardByCategory;
