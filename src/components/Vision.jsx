import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Vision = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

    return (
        <section ref={containerRef} className="relative py-40 overflow-hidden bg-[#e2d2c9]">
            {/* Solid elegant background without the dark footer blend */}

            <div className="container mx-auto px-6 relative z-10 pt-16 pb-32">
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
                            className="h-px w-24 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent mx-auto"
                        />

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-[#3B302C] tracking-wide leading-[1.1]">
                            Made for the <span className="italic block mt-3">Rhythm of Your Life</span>
                        </h2>

                        {/* Content */}
                        <p className="text-lg md:text-2xl text-[#1e1917] font-light leading-relaxed max-w-2xl mx-auto tracking-wide mix-blend-color-burn opacity-80">
                            We believe relief should be felt, not noticed. Ease Band is designed to help you get through your day with less discomfort and more profound ease. It acts quietly in the background, offering warmth where you need it most.
                        </p>

                        {/* Signature/Brand Element */}
                        <div className="pt-16 opacity-80">
                            <span className="text-xs tracking-[0.4em] uppercase text-[#8B7355] font-medium">
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
