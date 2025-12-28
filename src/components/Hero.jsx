import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ scale }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" style={{ transform: 'scale(1.2)' }} />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/src/assets/ease_band.png)`,
                        transform: `translateY(${scrollY * 0.5}px) scale(1.2)`
                    }}
                />
            </motion.div>

            {/* Large Brand Text - Luxury Style */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    style={{ opacity }}
                    className="space-y-12"
                >
                    {/* Massive Brand Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="text-8xl md:text-[12rem] font-light text-white tracking-[0.3em] leading-none font-serif"
                    >
                        MCT
                    </motion.h1>

                    {/* Divider Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-px bg-white/30 max-w-md mx-auto"
                    />

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-2xl md:text-3xl text-white font-light tracking-[0.2em] uppercase"
                    >
                        Ease Band
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Medical-grade relief for menstrual pain. Because comfort shouldn't be a luxury.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                    >
                        <a
                            href="/shop"
                            className="group relative px-12 py-4 bg-white text-black font-medium uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-500 hover:tracking-[0.3em]"
                        >
                            <span className="relative z-10">Shop Now</span>
                            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em]">
                                Shop Now
                            </span>
                        </a>
                        <a
                            href="/contact"
                            className="px-12 py-4 border border-white text-white font-medium uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500 hover:tracking-[0.3em]"
                        >
                            Contact
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-white text-xs tracking-[0.3em] uppercase font-light">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-px h-16 bg-gradient-to-b from-white to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
