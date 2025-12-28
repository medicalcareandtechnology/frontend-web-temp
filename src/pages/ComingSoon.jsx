import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar darkMode={true} />

            <section className="h-screen flex items-center justify-center relative overflow-hidden">

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Divider Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-px w-24 bg-white/30 mx-auto mb-12"
                        />

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-[0.2em] font-serif">
                            Coming Soon
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                            We're preparing something special. The Ease Band will be available for purchase soon.
                        </p>

                        {/* Divider Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-12"
                        />

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Link
                                to="/"
                                className="inline-block px-12 py-4 border border-white text-white text-sm font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
                            >
                                Back to Home
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ComingSoon;
