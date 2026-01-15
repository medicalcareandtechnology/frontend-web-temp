import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ useDarkText = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isShopPage = location.pathname === '/shop';
    const isContactPage = location.pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Logo transforms based on scroll
    const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);
    const logoOpacity = useTransform(scrollY, [0, 50], [0, 1]);

    // Dynamic classes based on scroll and theme
    const textColorClass = isScrolled || !useDarkText ? "text-white" : "text-black";
    const borderColorClass = isScrolled || !useDarkText ? "border-white" : "border-black";
    const logoLineClass = isScrolled || !useDarkText ? "bg-white/30" : "bg-black/30";

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                ? 'bg-black/95 backdrop-blur-xl py-4'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Animated Logo - Grows from hero */}
                <Link to="/" className="relative overflow-hidden">
                    <motion.div
                        style={{ opacity: logoOpacity }}
                        className="flex items-center gap-3"
                    >
                        <span className={`text-3xl md:text-4xl font-light tracking-[0.3em] font-serif transition-colors duration-500 ${textColorClass}`}>
                            MCT
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isScrolled ? 1 : 0 }}
                            className={`h-px w-12 origin-left ${logoLineClass}`}
                        />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isScrolled ? 1 : 0,
                                x: isScrolled ? 0 : -20
                            }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase"
                        >
                            Ease Band
                        </motion.span>
                    </motion.div>
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
                    {!isShopPage && (
                        <Link
                            to="/shop"
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

                            {!isContactPage && (
                                <Link
                                    to="/contact"
                                    className="text-white text-lg font-light tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            )}

                            {!isShopPage && (
                                <div className="pt-4">
                                    <Link
                                        to="/shop"
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
