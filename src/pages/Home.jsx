import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import ProductShowcase from '../components/ProductShowcase';
import ShowcaseLifestyle from '../components/ShowcaseLifestyle';
import ShowcaseTech from '../components/ShowcaseTech';
import LifestyleUsage from '../components/LifestyleUsage';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Home() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-black selection:text-white">
            <SEO
                title="Ease Band | Revolutionary Menstrual Pain Relief"
                description="Discover Ease Band by MCT. A discreet, wearable device designed to provide effective relief from menstrual cramps using advanced heat and vibration therapy."
                keywords="menstrual pain relief, period cramp relief, wearable heating pad, Ease Band, MCT, women's health technology"
                url="/"
            />
            <Navbar />
            <Hero />
            <ProductShowcase />
            <ShowcaseLifestyle />
            <ShowcaseTech />
            <LifestyleUsage />

            <Footer />
        </div>
    );
}

export default Home;
