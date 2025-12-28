
import React from 'react';
import { motion } from 'framer-motion';
import lifestyleImage from '../assets/lifestyle.png';

const ShowcaseLifestyle = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-end">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={lifestyleImage}
                    alt="Woman experiencing relief"
                    className="w-full h-full object-cover object-[center_top]"
                />
                {/* Refined Gradient - More subtle */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/70" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
                    className="max-w-2xl ml-auto"
                >
                    {/* Elegant Content Card */}
                    <div className="relative">
                        {/* Decorative Corner Accents */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-white/30" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-white/30" />

                        <div className="backdrop-blur-md bg-black/20 border border-white/10 p-8 md:p-12">
                            {/* Section Label */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-px w-20 bg-white/50 mb-8 origin-left"
                            />

                            {/* Heading - Luxury Typography */}
                            <h2 className="text-4xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
                                Unnoticeable.
                                <span className="block font-serif italic text-3xl md:text-6xl text-gray-300 mt-2">
                                    Until you need it.
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed font-light">
                                Engineered to vanish beneath your clothes. Designed to stand out when relief matters most.
                            </p>

                            {/* Features - Minimal Style */}
                            <div className="flex gap-8 md:gap-12 pt-6 md:pt-8 border-t border-white/20">
                                <div>
                                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide">Silent</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Operation</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide">Invisible</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ShowcaseLifestyle;
