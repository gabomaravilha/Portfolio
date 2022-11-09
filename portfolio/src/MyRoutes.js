import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import Main from './Pages/Main/Main';


function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/abacate" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;