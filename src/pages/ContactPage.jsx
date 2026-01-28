import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, MessageSquare, Clock, CheckCircle, AlertCircle, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

import { Link } from 'react-router-dom';
import { submitContactForm } from '../services/api';
import axios from 'axios'
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await axios.post("https://backend-web-tempp.vercel.app/contact", formData);

            if (response.data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                }, 5000);
            } else {
                setStatus('error');
                setErrorMessage(response.data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Unable to submit form. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-white text-black flex flex-col font-sans">
            <SEO
                title="Contact Us"
                description="Get in touch with the MCT team for support, inquiries, or feedback."
                url="/contact"
            />

            <Navbar useDarkText={true} />

            <main className="flex-grow flex flex-col items-center pt-32 pb-20 px-6">

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24 mt-8"
                >
                    <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.15em] mb-4">
                        MCT Support
                    </h1>
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500">
                        Our dedicated team is here to assist you
                    </p>
                </motion.div>

                {/* Contact Options Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex justify-center max-w-5xl w-full mb-24 text-center"
                >
                    {/* Phone Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Phone</h2>
                        <p className="text-gray-600 text-sm mb-2 font-light">
                            Monday - Saturday from 10 AM to 10 PM (EST).
                        </p>
                        <p className="text-gray-600 text-sm mb-6 font-light">
                            Sunday from 10 AM to 9 PM (EST).
                        </p>
                        <a href="tel:+918699715686" className="inline-flex items-center text-sm font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors uppercase tracking-wider">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Us +91 86997 15686
                        </a>
                    </div>
                </motion.div>

                {/* Minimalist Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full max-w-2xl"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-lg font-bold tracking-[0.2em] uppercase">Send a Message</h2>
                    </div>

                    <form className="space-y-12" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent rounded-none"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-xs peer-focus:font-bold"
                                >
                                    Name *
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent rounded-none"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-xs peer-focus:font-bold"
                                >
                                    Email *
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="peer w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent rounded-none"
                                    placeholder="Phone"
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-xs peer-focus:font-bold"
                                >
                                    Phone (Optional)
                                </label>
                            </div>
                            <div className="hidden md:block"></div> {/* Spacer */}
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                rows="1"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent resize-none overflow-hidden rounded-none"
                                placeholder="Message"
                                onInput={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = e.target.scrollHeight + 'px';
                                }}
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-xs peer-focus:font-bold"
                            >
                                Message *
                            </label>
                        </div>

                        {/* Status Messages */}
                        <div className="min-h-[3rem]">
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center justify-center space-x-2 text-green-700 text-sm tracking-wide bg-green-50 py-3"
                                >
                                    <CheckCircle className="w-4 h-4" />
                                    <span>MESSAGE SENT SUCCESSFULLY</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center justify-center space-x-2 text-red-700 text-sm tracking-wide bg-red-50 py-3"
                                >
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errorMessage.toUpperCase() || 'ERROR SENDING MESSAGE'}</span>
                                </motion.div>
                            )}
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="bg-black text-white text-xs font-bold uppercase tracking-[0.2em] px-12 py-4 hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'SENDING...' : "SEND MESSAGE"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
