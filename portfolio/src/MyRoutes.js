import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';


function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ <Header /> } /> */}
        <Route path="/abacate" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;