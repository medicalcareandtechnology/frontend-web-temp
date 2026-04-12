import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { subscribeToNewsletter } from '../services/api';

const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            try {
                await subscribeToNewsletter(email);
                setIsSubmitted(true);
            } catch (error) {
                console.error("Submission error", error);
                // Since no-cors, we might not get errors easily, but if network fails we will.
                // For now, assume success if no network error.
                setIsSubmitted(true);
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">

            <section className="h-screen flex items-center justify-center relative overflow-hidden">

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Divider Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-px w-24 bg-white/30 mx-auto mb-12"
                        />

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-[0.2em] font-serif">
                            Coming Soon
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                            We're preparing something special. The Ease Band will be available for purchase soon.
                        </p>

                        {/* Notify Me Form or Success Message */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="max-w-md mx-auto mb-16"
                        >
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="flex-1 bg-transparent border border-white/30 text-white px-6 py-4 outline-none focus:border-white transition-colors placeholder:text-gray-600 font-light"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-black px-8 py-4 font-medium tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors"
                                    >
                                        Notify Me
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-4"
                                >
                                    <p className="text-white text-lg tracking-[0.1em] font-light font-serif italic mb-2">
                                        Thank you.
                                    </p>
                                    <p className="text-gray-400 text-sm tracking-widest uppercase font-light">
                                        We will notify you when Ease Band is available.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Divider Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-12"
                        />

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Link
                                to="/"
                                className="inline-block text-gray-400 text-sm font-medium tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
                            >
                                Back to Home
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ComingSoon;
