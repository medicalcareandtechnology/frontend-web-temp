import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

const ShowcaseLifestyle = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);

    // Background Slow Zoom Parallax tied to scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    // Dynamic Glare effect (Mouse tracking spotlight on glass card)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-end">

            {/* Background Image with Slow Parallax Zoom */}
            <motion.div
                className="absolute inset-0 z-0 origin-[center_top]"
                style={{ scale: bgScale }}
            >
                <img
                    src="https://res.cloudinary.com/dkganhypn/image/upload/v1766939130/ChatGPT_Image_Dec_28_2025_09_53_56_PM_sh75ov.png"
                    alt="Woman experiencing relief"
                    className="w-full h-full object-cover object-[center_top]"
                />
                {/* Refined Gradient - Darker on right to punch out text */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/90" />
            </motion.div>

            {/* Subtle product context caption - positioned near waist */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden sm:flex items-center gap-2 text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-white/60 absolute z-10"
                style={{ top: 'calc(55% + 280px)', right: '300px' }}
            >
                <span className="w-6 h-px bg-white/40" />
                <span>Wearing Ease Band</span>
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
                    className="max-w-2xl ml-auto"
                >
                    {/* Interactive Glassmorphic Card with Dynamic Spotlight */}
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        className="relative group p-8 md:p-14 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20"
                    >
                        {/* Dynamic Glare Overlay */}
                        <motion.div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(
                                        500px circle at ${mouseX}px ${mouseY}px,
                                        rgba(255, 255, 255, 0.15),
                                        transparent 80%
                                    )
                                `,
                            }}
                        />

                        {/* Decorative Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30" />

                        {/* Relative z-10 keeps text above the moving glare */}
                        <div className="relative z-10">
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

                            {/* Features - Hover interactions */}
                            <div className="flex gap-8 md:gap-16 pt-6 md:pt-8 border-t border-white/20">
                                <div className="group/stat cursor-default">
                                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide transition-all duration-300 group-hover/stat:-translate-y-1">Silent</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em] transition-colors duration-300 group-hover/stat:text-white">Heat Therapy</div>
                                </div>
                                <div className="group/stat cursor-default">
                                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide transition-all duration-300 group-hover/stat:-translate-y-1">Discreet</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em] transition-colors duration-300 group-hover/stat:text-white">Under Clothing</div>
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
