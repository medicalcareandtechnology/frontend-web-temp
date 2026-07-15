import React, { useState, lazy, Suspense } from 'react';
import './App.css';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { PageSkeleton } from './components/SkeletonLoaders';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ModelPage = lazy(() => import('./pages/ModelPage'));
const PreOrder = lazy(() => import('./pages/PreOrder'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const AboutTeam = lazy(() => import('./pages/AboutTeam'));
const PrivacyPolicy = lazy(() => import('./pages/LegalDocs').then(m => ({ default: m.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/LegalDocs').then(m => ({ default: m.TermsConditions })));

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
      
      <Suspense fallback={<PageSkeleton />}>
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
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </Suspense>

      {/* Chatbot panel - available on all pages */}
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </>
  );
}

export default App;

