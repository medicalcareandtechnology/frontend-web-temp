import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, MessageSquare, Clock, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../services/api';
import axios from 'axios'
import SEO from '../components/SEO';

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
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-hidden">
            <SEO
                title="Contact Us"
                description="Get in touch with the MCT team for support, inquiries, or feedback."
                url="/contact"
            />
            {/* Subtle Gradient Background instead of Grid */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-900/10 to-transparent" />

            <div className="container mx-auto px-6 py-12 relative z-10 flex-grow flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left Column: Context & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-8 mt-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Chat to us</h3>
                                    <p className="text-gray-400 mb-2">Our friendly team is here to help.</p>
                                    <a href="mailto:rohitks1124@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">rohitks1124@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Call us</h3>
                                    <p className="text-gray-400 mb-2">Mon-Fri from 8am to 5pm.</p>
                                    <a href="tel:8699715686" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">8699715686</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                    >
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder-gray-600"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 group ${status === 'submitting'
                                    ? 'bg-blue-600/50 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                                    }`}
                            >
                                {status === 'submitting' ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-center space-x-2 text-green-400 text-sm mt-4"
                                >
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Message sent successfully!</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-start space-x-2 text-red-400 text-sm mt-4 bg-red-500/10 p-3 rounded-lg border border-red-500/20"
                                >
                                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                    <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                                </motion.div>
                            )}

                            <p className="text-xs text-center text-gray-500 mt-4">
                                Your privacy is important to us. We'll never share your email.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
