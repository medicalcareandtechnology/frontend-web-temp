import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import neoarmImage from '../assets/neoarm_1.jpeg';

const ProductIntro = () => {
    return (
        <section id="product" className="py-24 bg-white relative overflow-hidden">
            {/* Top Wave Transition (Dark to White) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0a0a0a]"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Centered Product Label */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="block text-center text-black font-bold tracking-widest uppercase mb-8 text-4xl font-orbitron"
                >
                    Product
                </motion.span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold text-black mb-8 font-orbitron tracking-wide"
                        >
                            NEOARM
                        </motion.h2>

                        {/* Quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-12"
                        >
                            <p className="text-xl md:text-2xl text-gray-700 font-light italic relative inline-block pl-8">
                                <span className="absolute top-0 left-0 text-blue-600 text-4xl font-serif leading-none -translate-y-2">"</span>
                                An Affordable and Adaptive solution for human kind.
                                <span className="text-blue-600 text-4xl font-serif leading-none ml-2">"</span>
                            </p>
                        </motion.div>

                        {/* About Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6 text-lg text-gray-600 leading-relaxed"
                        >
                            <h3 className="text-2xl font-bold text-black mb-4 font-orbitron">About Neoarm</h3>
                            <p>
                                NeoArm is an assistive prosthetic arm, built with the core ideology of <span className="text-blue-600 font-semibold">MCT</span>, i.e., affordability, accessibility, and adaptability. It integrates intelligent sensing, lightweight design, and user-centered mechanics to give the user natural, intuitive movement.
                            </p>
                            <p>
                                The primary objective is not only to restore basic hand functions but to restore confidence, self-reliance, and dignity. NeoArm reflects the cutting-edge technology which is made accessible for the needy.
                            </p>

                            <div className="pt-4">
                                <Link
                                    to="/view-3d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold border-2 border-black rounded-none hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
                                >
                                    View in 3D
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-full flex items-center justify-center"
                    >
                        <img
                            src={neoarmImage}
                            alt="NeoArm Prosthetic"
                            className="w-[200px] h-auto rounded-2xl shadow-2xl object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductIntro;
