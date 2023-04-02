import React, { useState } from 'react';
import './styles/styles.scss'

import Header from './components/Header/Header';
import Catalog from './components/Pages/Catalog';
import Footer from './components/Footer/Footer';
import Card from './components/Pages/Card';
import Basket from './components/Pages/Basket';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {



  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route path='/' element={<Catalog />} />
            <Route path='/edit' element={<Catalog />} />
            <Route path='/product/:id' element={<Card />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </main>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;
