import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Products />
            <Footer />
        </div>
    );
}

export default Home;
