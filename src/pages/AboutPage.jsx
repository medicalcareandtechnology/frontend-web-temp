import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Navbar darkMode={true} />

            <div className="container mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron tracking-wide">
                        About <span className="text-blue-600">MCT</span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed mb-12">
                        Medical Care and Technology (MCT) is dedicated to revolutionizing assistive technology through affordable, accessible, and adaptive solutions.
                    </p>

                    <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm">
                        <p className="text-gray-400 italic">
                            "Our mission is to restore not just function, but confidence and dignity to every individual we serve."
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
