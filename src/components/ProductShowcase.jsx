import React from 'react';
import { motion } from 'framer-motion';


const ProductShowcase = () => {
    return (
        <section id="product-showcase" className="py-32 bg-white relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
                    {/* Image Section - Luxury Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-500/30" />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-blue-500/30" />

                            <div className="relative p-8 bg-gradient-to-br from-blue-50 to-white">
                                <img
                                    src="https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic1_mrjyiv.jpg"
                                    alt="Ease Band Device"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section - Elegant Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-8 flex flex-col justify-start"
                    >
                        <div>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="h-px w-24 bg-blue-500 mb-6 origin-left"
                            />
                            <h2 className="text-5xl md:text-6xl font-light text-black mb-4 leading-tight tracking-tight">
                                Clinical Relief,
                                <span className="block font-serif italic text-blue-600">Elegant Design</span>
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                            Advanced heat therapy and targeted massage work together to ease menstrual cramps naturally. Medical-grade effectiveness meets thoughtful design—because managing pain shouldn't compromise your day.
                        </p>

                        {/* Feature List - Refined */}
                        <div className="space-y-4 pt-4">
                            {[
                                "Ultra-thin, discreet profile",
                                "Soft, breathable materials",
                                "Precision-fit design",
                                "Intuitive one-touch control"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-4 text-black"
                                >
                                    <div className="w-1 h-1 bg-blue-500" />
                                    <span className="text-sm tracking-wide uppercase font-light">{item}</span>
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
