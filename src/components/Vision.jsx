import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Vision = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

    return (
        <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
            {/* Background Texture/Gradient - Subtle light gradient */}
            <div className="absolute inset-0 bg-[#eff6ff]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        style={{ opacity, y }}
                        className="space-y-12"
                    >
                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"
                        />

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 tracking-wide leading-tight">
                            Made for the Rhythm of <br />
                            <span className="text-gray-500 italic">Your Life</span>
                        </h2>

                        {/* Content */}
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
                        We believe relief should be felt, not noticed. 
                        Ease Band is designed to help you get through your day with less discomfort and more ease. 
                        It works quietly in the background, so you can focus on your work, your plans, and everything else that matters.
                        </p>

                        {/* Signature/Brand Element */}
                        <div className="pt-8 opacity-80">
                            <span className="text-xs tracking-[0.4em] uppercase text-gray-400 font-medium">
                                Simply Better Care
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
