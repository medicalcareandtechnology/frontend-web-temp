import React, { useState } from 'react';
import './App.css';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ComingSoon from './pages/ComingSoon';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import ModelPage from './pages/ModelPage';
import PreOrder from './pages/PreOrder';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutTeam from './pages/AboutTeam';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const location = useLocation();
  const hideNavbarRoutes = ['/pre-order'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {shouldShowNavbar && <Navbar toggleChatbot={toggleChatbot} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pre-order" element={<PreOrder />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/view-3d" element={<ModelPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team" element={<AboutTeam />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>

      {/* Chatbot panel - available on all pages */}
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </>
  );
}

export default App;

