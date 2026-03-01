import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, MessageSquare, Clock, CheckCircle, AlertCircle, Phone, MapPin, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

import { Link } from 'react-router-dom';
import { submitContactForm } from '../services/api';
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
            await submitContactForm(formData);

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => {
                setStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Unable to submit form. Please check your connection and try again.');
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
                {/* Contact Options Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-full max-w-6xl mb-24"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {/* Phone Section */}
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">Phone</h2>
                            <p className="text-gray-500 text-sm mb-2 font-light">
                                Monday - Saturday<br />10 AM - 10 PM (IST)
                            </p>
                            <p className="text-gray-500 text-sm mb-6 font-light">
                                Sunday<br />10 AM - 9 PM (IST)
                            </p>
                            <a href="tel:+918699715686" className="inline-flex items-center text-sm font-medium border-b border-gray-200 pb-1 hover:border-black transition-colors uppercase tracking-wider">
                                <Phone className="w-4 h-4 mr-2" />
                                +91 86997 15686
                            </a>
                        </div>

                        {/* Email Section */}
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">Email</h2>
                            <p className="text-gray-500 text-sm mb-8 font-light max-w-xs">
                                For general inquiries, support, and partnership opportunities.
                            </p>
                            <a href="mailto:mct.medtech@gmail.com" className="inline-flex items-center text-sm font-medium border-b border-gray-200 pb-1 hover:border-black transition-colors uppercase tracking-wider">
                                <Mail className="w-4 h-4 mr-2" />
                                mct.medtech@gmail.com
                            </a>
                        </div>

                        {/* Social Icons Section */}
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">Follow Us</h2>
                            <p className="text-gray-500 text-sm mb-8 font-light">
                                Stay connected for updates.
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="https://www.instagram.com/medicalcaretechnology/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-black transition-colors duration-300"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/mct-medcaretech/about/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-black transition-colors duration-300"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
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
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-center justify-center space-x-3 text-black text-xs font-light tracking-[0.2em] uppercase border-t border-b border-gray-200 py-4"
                                >
                                    <CheckCircle className="w-4 h-4 text-gray-600" />
                                    <span>Message sent successfully</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-center justify-center space-x-3 text-black text-xs font-light tracking-[0.2em] uppercase border-t border-b border-gray-200 py-4"
                                >
                                    <AlertCircle className="w-4 h-4 text-gray-600" />
                                    <span>{errorMessage || 'Error sending message'}</span>
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
