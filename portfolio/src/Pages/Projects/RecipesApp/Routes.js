import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ScreenMain from './Pages/ScreenMain';
import ScreenDetails from './Pages/ScreenDetails';
import FoodsScreenExplore from './Pages/FoodsScreenExplore';
import ScreenInProgress from './Pages/ScreenInProgress';
import ScreenExploreMain from './Pages/ScreenExploreMain';
import ScreenProfile from './Pages/ScreenProfile';
import ScreenDoneRecipes from './Pages/ScreenDoneRecipes';
import ScreenFavoriteRecipes from './Pages/ScreenFavoriteRecipes';
import DrinksScreenExplore from './Pages/DrinksScreenExplore';
import DrinksIngredients from './Pages/DrinksIngredients';
import FoodsIngredients from './Pages/FoodsIngredients';
import FoodsNationalities from './Pages/FoodsNationalities';
import NotFound from './components/NotFound/NotFound';

function RecipesRoutes() {
  return (
    <Routes>
      <Route exact path="/explore/foods/nationalities" Elemente={ FoodsNationalities } />
      <Route exact path="/explore/foods/ingredients" Elemente={ FoodsIngredients } />
      <Route exact path="/explore/foods" Elemente={ FoodsScreenExplore } />
      <Route exact path="/foods/:id/in-progress" Elemente={ ScreenInProgress } />
      <Route exact path="/foods/:id" Elemente={ ScreenDetails } />
      <Route exact path="/foods" Elemente={ ScreenMain } />
      <Route exact path="/explore/drinks/ingredients" Elemente={ DrinksIngredients } />
      <Route exact path="/explore/drinks" Elemente={ DrinksScreenExplore } />
      <Route exact path="/drinks/:id/in-progress" Elemente={ ScreenInProgress } />
      <Route exact path="/drinks/:id" Elemente={ ScreenDetails } />
      <Route exact path="/drinks" Elemente={ ScreenMain } />
      <Route exact path="/explore" Elemente={ ScreenExploreMain } />
      <Route exact path="/profile" Elemente={ ScreenProfile } />
      <Route exact path="/done-recipes" Elemente={ ScreenDoneRecipes } />
      <Route exact path="/favorite-recipes" Elemente={ ScreenFavoriteRecipes } />
      <Route exact path="/" Elemente={ Login } />
      <Route path="*" Elemente={ NotFound } />
    </Routes>
  );
}

export default RecipesRoutes;
