import React from 'react';
import { motion } from 'framer-motion';

const ShowcaseTech = () => {
    return (
        <section id="features" className="py-32 bg-black text-white relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
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
                        Clinically-proven heat therapy meets precision massage technology. Designed to interrupt pain signals and promote natural muscle relaxation during menstruation.
                    </motion.p>
                </div>

                {/* Tech Cards - Luxury Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Smart Heating",
                            desc: "Instant heating up to 45°C in 15 seconds. Intelligent temperature monitoring ensures consistency and safety.",
                            value: "45°C"
                        },
                        {
                            title: "Pulse Massage",
                            desc: "3 distinct vibration patterns designed to interrupt pain signals and relax cramped muscles.",
                            value: "3 Modes"
                        },
                        {
                            title: "Battery Life",
                            desc: "High-density lithium polymer battery provides up to 8 hours of continuous relief on a single charge.",
                            value: "8 Hours"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Card Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500">
                                {/* Metric */}
                                <div className="mb-8">
                                    <motion.div
                                        className="text-7xl font-light text-white mb-2 font-serif tracking-tight"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.value}
                                    </motion.div>
                                    <div className="h-px w-16 bg-blue-500" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-light text-white mb-4 tracking-[0.1em] uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Accent */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-24"
                />
            </div>
        </section>
    );
};

export default ShowcaseTech;
