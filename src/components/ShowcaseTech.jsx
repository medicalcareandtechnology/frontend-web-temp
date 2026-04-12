import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

// Reusable Magnetic Card Component for Spec Grid (Softened for Luxury Feel)
const MagneticCard = ({ children, className }) => {
    const ref = useRef(null);

    // Gentler spring for a softer, luxurious pull
    const springConfig = { stiffness: 100, damping: 25, mass: 0.1 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Move 10% towards the cursor for subtlety
        x.set(distanceX * 0.10);
        y.set(distanceY * 0.10);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E6C2BA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* The inner card that physically moves */}
            <motion.div
                style={{ x, y }}
                className="relative p-8 border border-[#D5C1B6]/50 group-hover:border-[#B58B80]/60 transition-colors duration-700 h-full flex flex-col justify-center bg-white/40 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(156,132,118,0.1)] rounded-3xl z-10"
            >
                {children}
            </motion.div>
        </div>
    );
};

const ShowcaseTech = () => {
    return (
        <section id="features" className="py-32 bg-[#FAF9F6] text-[#3B302C] relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px w-24 bg-[#B58B80] mx-auto mb-10"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-light mb-6 tracking-tight font-serif text-[#3B302C]"
                    >
                        Elegant Engineering
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xl md:text-2xl text-[#5A504C] font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Clinically inspired heat therapy meets precision massage. Designed to effortlessly reduce pain while wrapping you in profound comfort.
                    </motion.p>
                </div>

                {/* Blended Tech Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                        {/* Left - Sticky Large Tech Layers Image */}
                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                className="group lg:sticky lg:top-32 h-[500px] lg:h-[calc(100vh-16rem)] min-h-[500px]"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-br from-[#FFE5B4]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
                                <div className="relative overflow-hidden border border-[#D5C1B6]/50 h-full w-full rounded-3xl shadow-[0_20px_60px_-15px_rgba(156,132,118,0.2)] bg-white/30 backdrop-blur-sm">
                                    <img
                                        src="https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/layers_niv9is.jpg"
                                        alt="Ease Band Technology Layers"
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 mix-blend-multiply"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/90 via-[#FAF9F6]/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                                        <motion.div
                                            className="text-6xl font-light text-[#3B302C] mb-2 font-serif tracking-tight flex items-baseline gap-2"
                                            whileHover={{ scale: 1.02, originX: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            45°C <span className="text-2xl italic text-[#B58B80]">Heat</span>
                                        </motion.div>
                                        <div className="h-px w-20 bg-[#B58B80] mb-5" />
                                        <h3 className="text-xl font-light text-[#3B302C] mb-3 tracking-[0.1em] uppercase">Soothing Warmth</h3>
                                        <p className="text-[#5A504C] leading-relaxed font-light text-base max-w-xs">
                                            Instant, enveloping heat reaches 45°C in 15 seconds. Intelligent monitoring ensures perfectly sustained comfort.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Scrolling 2x2 Grid with Soft Magnetic Interaction */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pb-32">

                            {/* Product Floating Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="relative group h-full min-h-[300px]"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-br from-[#E6C2BA]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
                                <div className="relative overflow-hidden border border-[#D5C1B6]/50 h-full w-full rounded-3xl bg-white/40 backdrop-blur-md">
                                    <img
                                        src="https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic2_vjwyyy.jpg"
                                        alt="Ease Band Product"
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 mix-blend-multiply"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#FAF9F6]/90 to-transparent">
                                        <p className="text-sm uppercase tracking-[0.2em] text-[#5A504C] font-medium">Ergonomic Softness</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pulse Massage Spec */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <MagneticCard className="h-full min-h-[300px]">
                                    <div className="text-5xl font-light text-[#3B302C] mb-2 font-serif tracking-tight transition-transform duration-700 group-hover:scale-105 origin-left">
                                        3 Modes
                                    </div>
                                    <div className="h-px w-16 bg-[#B58B80] mb-5 transition-all duration-700 group-hover:w-24" />
                                    <h3 className="text-xl font-light text-[#3B302C] mb-3 tracking-[0.1em] uppercase">Gentle Pulse</h3>
                                    <p className="text-[#5A504C] leading-relaxed font-light text-base">
                                        Graceful vibration patterns designed to quietly interrupt pain signals and deeply relax tense muscles.
                                    </p>
                                </MagneticCard>
                            </motion.div>

                            {/* Battery Life Spec */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <MagneticCard className="h-full min-h-[300px]">
                                    <div className="text-5xl font-light text-[#3B302C] mb-2 font-serif tracking-tight transition-transform duration-700 group-hover:scale-105 origin-left">
                                        8 Hours
                                    </div>
                                    <div className="h-px w-16 bg-[#B58B80] mb-5 transition-all duration-700 group-hover:w-24" />
                                    <h3 className="text-xl font-light text-[#3B302C] mb-3 tracking-[0.1em] uppercase">Lasting Relief</h3>
                                    <p className="text-[#5A504C] leading-relaxed font-light text-base">
                                        Experience uninterrupted comfort from dawn to dusk. Engineered to support you effortlessly all day.
                                    </p>
                                </MagneticCard>
                            </motion.div>

                            {/* Lifestyle Wearing Video */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="relative group h-full min-h-[300px]"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-br from-[#FFE5B4]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
                                <div className="relative overflow-hidden border border-[#D5C1B6]/50 h-full w-full rounded-3xl bg-white/40">
                                    <video
                                        src="https://res.cloudinary.com/dkganhypn/video/upload/v1766934940/WhatsApp_Video_2025-12-28_at_2.51.42_PM_riprfq.mp4"
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 mix-blend-multiply"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10">
                                        <p className="text-sm uppercase tracking-[0.2em] text-[#5A504C] font-medium">Invisible Comfort</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#B58B80]/40 to-transparent mx-auto mt-32"
                />
            </div>
        </section>
    );
};

export default ShowcaseTech;
