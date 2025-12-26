import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/view-3d" element={<ModelPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
