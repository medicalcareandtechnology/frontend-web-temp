import React, { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ComingSoon from './pages/ComingSoon';
import Chatbot from './components/Chatbot';
import ChatbotButton from './components/ChatbotButton';



import Shop from './pages/Shop';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      {/* Chatbot components - available on all pages */}
      {!isChatbotOpen && <ChatbotButton onClick={toggleChatbot} />}
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </>
  );
}

export default App;
