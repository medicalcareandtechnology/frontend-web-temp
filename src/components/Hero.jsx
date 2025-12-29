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
    const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ scale }}
            >
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dkganhypn/image/upload/v1766937813/ChatGPT_Image_Dec_28_2025_09_32_44_PM_mard9h.png")`,
                        transform: `translateY(${scrollY * 0.3}px)`
                    }}
                />
            </motion.div>

            {/* Product-First Hero Content */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    style={{ opacity }}
                    className="space-y-8"
                >
                    {/* Hero Product Name - The Star */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="text-7xl md:text-[10rem] font-light text-white tracking-[0.15em] leading-none"
                    >
                        Ease Band
                    </motion.h1>

                    {/* Impactful Product Quote */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-2xl text-white/90 font-light italic max-w-3xl mx-auto leading-relaxed"
                    >
                        A wearable relief band designed to ease menstrual cramps
                    </motion.p>

                    {/* Divider Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-px bg-white/30 max-w-sm mx-auto"
                    />

                    {/* Product Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        "Relief that moves with you. Freedom that stays with you."
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
                    >
                        <a
                            href="#product-showcase"
                            className="group relative px-12 py-4 bg-white text-black font-medium uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-500 hover:tracking-[0.3em]"
                        >
                            <span className="relative z-10">Learn More</span>
                            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em]">
                                Learn More
                            </span>
                        </a>
                        <a
                            href="/contact"
                            className="px-12 py-4 border border-white text-white font-medium uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500 hover:tracking-[0.3em]"
                        >
                            Contact
                        </a>
                    </motion.div>

                    {/* Company Signature - Subtle Brand Placement */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="pt-8"
                    >
                        <p className="text-sm text-white/50 tracking-[0.3em] uppercase font-light">
                            by
                        </p>
                        <p className="text-lg md:text-xl text-white/70 tracking-[0.4em] font-light mt-1 font-serif">
                            MCT
                        </p>
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
