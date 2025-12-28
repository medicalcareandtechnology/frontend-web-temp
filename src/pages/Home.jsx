import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductShowcase from '../components/ProductShowcase';
import ShowcaseLifestyle from '../components/ShowcaseLifestyle';
import ShowcaseTech from '../components/ShowcaseTech';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-black selection:text-white">
            <Navbar />
            <Hero />
            <ProductShowcase />
            <ShowcaseLifestyle />
            <ShowcaseTech />
            <About />
            <Footer />
        </div>
    );
}

export default Home;
