import React from 'react';
import './App.css';
import Products from './features/products/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
