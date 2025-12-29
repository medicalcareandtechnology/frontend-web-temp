import React from 'react';
import { motion } from 'framer-motion';




const ShowcaseTech = () => {
    return (
        <section id="features" className="py-32 bg-black text-white relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px w-24 bg-white/30 mx-auto mb-8"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-light mb-6 tracking-[0.2em] font-serif"
                    >
                        The Science
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-400 font-light leading-relaxed"
                    >
                        Clinically inspired heat therapy meets precision massage technology. Designed to reduce pain signal intensity and promote natural muscle relaxation during menstruation.
                    </motion.p>
                </div>

                {/* Blended Tech Grid - Images + Specs */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Left - Large Tech Layers Image with Overlay */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="lg:col-span-5 relative group"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            <div className="relative overflow-hidden border border-white/10 h-full min-h-[500px]">
                                <img
                                    src="https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/layers_niv9is.jpg"
                                    alt="Ease Band Technology Layers"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <motion.div
                                        className="text-6xl font-light text-white mb-2 font-serif tracking-tight"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        45°C (safe, regulated warmth)
                                    </motion.div>
                                    <div className="h-px w-16 bg-blue-500 mb-4" />
                                    <h3 className="text-lg font-light text-white mb-2 tracking-[0.1em] uppercase">Smart Heating</h3>
                                    <p className="text-gray-300 leading-relaxed font-light text-sm max-w-xs">
                                        Instant heating up to 45°C in 15 seconds with intelligent temperature monitoring.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - 2x2 Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Product Floating Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                <div className="relative overflow-hidden border border-white/10 h-full min-h-[240px]">
                                    <img
                                        src="https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic2_vjwyyy.jpg"
                                        alt="Ease Band Product"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/80">Ergonomic Design</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pulse Massage Spec */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative p-8 border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500 h-full flex flex-col justify-center">
                                    <motion.div
                                        className="text-5xl font-light text-white mb-2 font-serif tracking-tight"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        3 Modes
                                    </motion.div>
                                    <div className="h-px w-16 bg-blue-500 mb-4" />
                                    <h3 className="text-lg font-light text-white mb-2 tracking-[0.1em] uppercase">Pulse Massage</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                                        Distinct vibration patterns to interrupt pain signals.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Battery Life Spec */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative p-8 border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500 h-full flex flex-col justify-center">
                                    <motion.div
                                        className="text-5xl font-light text-white mb-2 font-serif tracking-tight"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        8 Hours
                                    </motion.div>
                                    <div className="h-px w-16 bg-blue-500 mb-4" />
                                    <h3 className="text-lg font-light text-white mb-2 tracking-[0.1em] uppercase">Battery Life</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                                        All-day relief on a single charge.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Lifestyle Wearing Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                <div className="relative overflow-hidden border border-white/10 h-full min-h-[240px]">
                                    <video
                                        src="https://res.cloudinary.com/dkganhypn/video/upload/v1766934940/WhatsApp_Video_2025-12-28_at_2.51.42_PM_riprfq.mp4"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/80">Discreet & Comfortable</p>
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
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-16"
                />
            </div>
        </section>
    );
};

export default ShowcaseTech;
