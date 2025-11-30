import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
        { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
    ];

    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "Features", href: "#features" },
        { name: "About", href: "#about" },
        { name: "Product", href: "#product" },
        { name: "Contact", href: "/contact", external: true }
    ];

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    maskImage: 'linear-gradient(to top, black, transparent)'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold font-orbitron tracking-wider mb-4">
                            MCT
                        </h2>

                        <div className="flex space-x-4">

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-orbitron mb-6 text-white/90">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    {link.external ? (
                                        <Link
                                            to={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors flex items-center group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors flex items-center group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-orbitron mb-6 text-white/90">Contact</h3>
                        <ul className="space-y-4">

                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 shrink-0" />
                                <a href="mailto:rohitks1124@gmail.com" className="hover:text-white transition-colors">rohitks1124@gmail.com</a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 shrink-0" />
                                <a href="tel:8699715686" className="hover:text-white transition-colors">8699715686</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} MCT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
