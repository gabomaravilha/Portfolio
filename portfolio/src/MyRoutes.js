import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import Main from './Pages/Main';
import Project2 from './Pages/Projects/Project2'; 
import Project3 from './Pages/Projects/Project3';
import Project4 from './Pages/Projects/Project4';
import Project5 from './Pages/Projects/Project5';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Projects/RecipesApp/Pages/Login';
import ScreenDetails from './Pages/Projects/RecipesApp/Pages/ScreenDetails';
import FoodsScreenExplore from './Pages/Projects/RecipesApp/Pages/FoodsScreenExplore';
import ScreenInProgress from './Pages/Projects/RecipesApp/Pages/ScreenInProgress';
import MainScreenExplore from './Pages/Projects/RecipesApp/Pages/ScreenExploreMain';
import ScreenProfile from './Pages/Projects/RecipesApp/Pages/ScreenProfile';
import ScreenDoneRecipes from './Pages/Projects/RecipesApp/Pages/ScreenDoneRecipes';
import ScreenFavoriteRecipes from './Pages/Projects/RecipesApp/Pages/ScreenFavoriteRecipes';
import DrinksScreenExplore from './Pages/Projects/RecipesApp/Pages/DrinksScreenExplore';
import DrinksIngredients from './Pages/Projects/RecipesApp/Pages/DrinksIngredients';
import FoodsIngredients from './Pages/Projects/RecipesApp/Pages/FoodsIngredients';
import FoodsNationalities from './Pages/Projects/RecipesApp/Pages/FoodsNationalities';
import MainScreen from './Pages/Projects/RecipesApp/Pages/ScreenMain';

function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/projetos/2" element={ <Project2 /> } />
        <Route path="/projetos/3" element={ <Project3 /> } />
        <Route path="/projetos/4" element={ <Project4 /> } />
        <Route path="/projetos/5" element={ <Project5 /> } />
        <Route exact path="/explore/foods/nationalities" element={ <FoodsNationalities />} />
        <Route exact path="/explore/foods/ingredients" element={ <FoodsIngredients />} />
        <Route exact path="/explore/foods" element={ <FoodsScreenExplore />} />
        <Route exact path="/foods/:id/in-progress" element={ <ScreenInProgress />} />
        <Route exact path="/foods/:id" element={ <ScreenDetails />} />
        <Route exact path="/foods" element={ <MainScreen />} />
        <Route exact path="/explore/drinks/ingredients" element={ <DrinksIngredients />} />
        <Route exact path="/explore/drinks" element={ <DrinksScreenExplore /> } />
        <Route exact path="/drinks/:id/in-progress" element={ <ScreenInProgress /> } />
        <Route exact path="/drinks/:id" element={ <ScreenDetails /> } />
        <Route exact path="/drinks" element={ <MainScreen /> } />
        <Route exact path="/explore" element={ <MainScreenExplore /> } />
        <Route exact path="/profile" element={ <ScreenProfile /> } />
        <Route exact path="/done-recipes" element={ <ScreenDoneRecipes /> } />
        <Route exact path="/favorite-recipes" element={ <ScreenFavoriteRecipes /> } />
        <Route exact path="/Login" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
  );
}

export default MyRoutes;