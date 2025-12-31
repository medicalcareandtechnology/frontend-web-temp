import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Navbar darkMode={true} />

            {/* Header Section */}
            <div className="pt-40 pb-12 text-center container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight font-serif">
                        Meet the <span className="text-blue-500">Team</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                        The people behind Ease Band.
                    </p>
                </motion.div>
            </div>

            {/* Team Grid */}
            <Team />

            {/* Closing Statement */}
            <div className="py-24 text-center container mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-500 font-light italic"
                >
                    "Ease Band is built at the intersection of empathy, engineering, and care."
                </motion.p>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
