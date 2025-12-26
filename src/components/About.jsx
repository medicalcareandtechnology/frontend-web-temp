import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-8"
                    >
                        Vision
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed"
                    >
                        <span className="text-blue-400 font-semibold">Medical Care and Technology</span> is a human augmented and assistive startup which works on building smart solutions for the needy. The main focus is to bridge the gap of that part of society where the people lack the availability of affordable and reliable products and services.
                        It is basically a purpose-driven organization dedicated to creating affordable, reliable, and intelligent solutions for people who need them the most.
                        The motive is to build technologies that restore dignity, independence, and hope for the underserved.

                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
