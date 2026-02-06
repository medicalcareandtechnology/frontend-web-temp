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
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src="https://res.cloudinary.com/dkganhypn/image/upload/v1769610206/logo_long-removebg_ssuij7.png"
                                alt="MCT Logo"
                                className="h-16 md:h-20 w-auto"
                            />
                        </Link>
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
                                <Link to="/coming-soon" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-light tracking-wide">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-light tracking-wide">
                                    Team
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
                                <a href="mailto:mct.medtech@gmail.com" className="hover:text-blue-400 transition-colors text-sm font-light">
                                    mct.medtech@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 group">
                                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                                <a href="tel:8699715686" className="hover:text-blue-400 transition-colors text-sm font-light">
                                    8699715686
                                </a>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-6 mt-8">
                            <a
                                href="https://www.instagram.com/medicalcaretechnology/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
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
                                className="group"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                                    viewBox="0 0 24 24"
                                    fill="currentColor" // Using fill for LinkedIn for a more solid look if preferred, or stroke for consistency. Let's stick to consistent stroke for now but maybe slightly different path.
                                >
                                    {/* Actually, for LinkedIn, a solid fill often looks better than outlines. Let's try a clean path. */}
                                    <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
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
