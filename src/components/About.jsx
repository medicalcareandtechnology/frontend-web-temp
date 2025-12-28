import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-blue-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Top Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px w-24 bg-blue-500/50 mx-auto mb-12"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-light text-gray-900 mb-12 tracking-[0.15em] font-serif"
                    >
                        Our Vision
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-4"
                    >
                        <span className="text-blue-600 font-medium">MCT</span> is dedicated to improving women's lives through medical technology. We understand that menstrual pain isn't just discomfort—it's days lost, plans canceled, and potential unrealized.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed font-light"
                    >
                        Ease Band represents our commitment to providing relief that's both <span className="text-blue-600">clinically effective</span> and beautifully designed. Because every woman deserves to feel her best, every day of the month.
                    </motion.p>

                    {/* Bottom Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-px w-48 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mx-auto mt-12"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
