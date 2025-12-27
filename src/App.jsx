import React, { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import Chatbot from './components/Chatbot';
import ChatbotButton from './components/ChatbotButton';



function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/view-3d" element={<ModelPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      {/* Chatbot components - available on all pages */}
      {!isChatbotOpen && <ChatbotButton onClick={toggleChatbot} />}
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </>
  );
}

export default App;
