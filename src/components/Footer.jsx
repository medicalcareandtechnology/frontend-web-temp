import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-blue-500/20 pt-20 pb-8 relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Top Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-4xl font-light tracking-[0.3em] mb-4 font-serif text-white">
                            MCT
                        </h2>
                        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
                            Medical-grade relief for menstrual pain. Designed with care, engineered for comfort.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-blue-400">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-light tracking-wide">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-light tracking-wide">
                                    Learn More
                                </a>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-light tracking-wide">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-light tracking-wide">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-blue-400">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 group">
                                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                                <a href="mailto:rohitks1124@gmail.com" className="hover:text-blue-400 transition-colors text-sm font-light">
                                    rohitks1124@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 group">
                                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                                <a href="tel:8699715686" className="hover:text-blue-400 transition-colors text-sm font-light">
                                    8699715686
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-500/10 pt-8 text-center">
                    <p className="text-sm text-gray-500 font-light tracking-wide">
                        © {currentYear} <span className="text-blue-400">MCT</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
