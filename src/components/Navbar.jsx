import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ useDarkText = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isShopPage = location.pathname === '/shop';
    const isContactPage = location.pathname === '/contact';
    const isTeamPage = location.pathname === '/team';
    const isComingSoonPage = location.pathname === '/coming-soon';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic classes based on scroll and theme
    const textColorClass = isScrolled || !useDarkText ? "text-white" : "text-black";
    const borderColorClass = isScrolled || !useDarkText ? "border-white" : "border-black";

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                ? 'bg-black/95 backdrop-blur-xl py-4'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Animated Logo */}
                <Link to="/" className="relative overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/dkganhypn/image/upload/v1769610206/logo_long-removebg_ssuij7.png"
                        alt="MCT Logo"
                        className={`transition-all duration-300 w-auto ${isScrolled ? 'h-10' : 'h-14 md:h-16'}`}
                    />
                </Link>

                {/* Desktop Menu - Luxury Spacing */}
                <div className="hidden md:flex items-center gap-12">
                    {!isHomePage && (
                        <Link
                            to="/"
                            className={`group relative text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:tracking-[0.25em] ${textColorClass}`}
                        >
                            Home
                            <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled || !useDarkText ? 'bg-white' : 'bg-black'}`} />
                        </Link>
                    )}

                    <a
                        href="/#features"
                        className={`group relative text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:tracking-[0.25em] ${textColorClass}`}
                    >
                        Learn More
                        <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled || !useDarkText ? 'bg-white' : 'bg-black'}`} />
                    </a>

                    {!isTeamPage && (
                        <Link
                            to="/team"
                            className={`group relative text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:tracking-[0.25em] ${textColorClass}`}
                        >
                            Team
                            <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled || !useDarkText ? 'bg-white' : 'bg-black'}`} />
                        </Link>
                    )}

                    {!isContactPage && (
                        <Link
                            to="/contact"
                            className={`group relative text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:tracking-[0.25em] ${textColorClass}`}
                        >
                            Contact
                            <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled || !useDarkText ? 'bg-white' : 'bg-black'}`} />
                        </Link>
                    )}
                </div>

                {/* CTA Button - Luxury */}
                <div className="hidden md:block">
                    {!isComingSoonPage && (
                        <Link
                            to="/coming-soon"
                            className={`group relative px-8 py-3 border overflow-hidden ${borderColorClass}`}
                        >
                            <span className={`relative z-10 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-black ${textColorClass}`}>
                                Shop Now
                            </span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${textColorClass}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden border-t border-white/5"
                    >
                        <div className="flex flex-col items-center py-12 space-y-8">
                            {!isHomePage && (
                                <Link
                                    to="/"
                                    className="text-white text-lg font-light tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            )}

                            <a
                                href="/#features"
                                className="text-white text-lg font-light tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Learn More
                            </a>

                            {!isTeamPage && (
                                <Link
                                    to="/team"
                                    className="text-white text-lg font-light tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Team
                                </Link>
                            )}

                            {!isContactPage && (
                                <Link
                                    to="/contact"
                                    className="text-white text-lg font-light tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            )}

                            {!isComingSoonPage && (
                                <div className="pt-4">
                                    <Link
                                        to="/coming-soon"
                                        className="block px-12 py-3 border border-white text-white text-sm font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
