import React, { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ComingSoon from './pages/ComingSoon';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutTeam from './pages/AboutTeam';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggleChatbot={toggleChatbot} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
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

