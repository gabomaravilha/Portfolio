import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import Main from './Pages/Main';


function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/abacate" element={ <NotFound /> } />
      </Routes>
  );
}

export default MyRoutes;