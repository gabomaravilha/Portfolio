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
import ScreenMain from './Pages/Projects/RecipesApp/Pages/ScreenMain'

function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path ="/login" element={ <Login /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/projetos/2" element={ <Project2 /> } />
        <Route path="/projetos/3" element={ <Project3 /> } />
        <Route path="/projetos/4" element={ <Project4 /> } />
        <Route path="/projetos/5" element={ <Project5 /> } />
        <Route path="/foods" element={ < ScreenMain /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
  );
}

export default MyRoutes;