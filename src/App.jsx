import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductIntro from './components/ProductIntro';
import Demo from './components/Demo';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import ModelPage from './components/ModelPage';
import ContactPage from './components/ContactPage';

function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <ProductIntro />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view-3d" element={<ModelPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
