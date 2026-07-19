import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0b] text-neutral-300 min-h-screen flex flex-col justify-between pt-0 pb-12 relative overflow-hidden border-t border-neutral-900/60">
            {/* Extremely subtle blue radial ambient glow at the bottom center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />

            {/* Loop Marquee Banner at the top of the footer */}
            <div className="w-full overflow-hidden border-b border-neutral-900/60 py-8 md:py-10 select-none bg-black/20">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 22
                        }}
                        className="flex gap-12 md:gap-16 text-[10vw] md:text-[8vw] font-barlow font-black text-[#ffffff] uppercase tracking-tight select-none pr-12 md:pr-16 shrink-0"
                    >
                        <span>Get in touch</span>
                        <span className="text-neutral-800 font-light">/</span>
                        <span className="text-[#3b82f6]">MCT</span>
                        <span className="text-neutral-800 font-light">/</span>
                        <span>Get in touch</span>
                        <span className="text-neutral-800 font-light">/</span>
                        <span className="text-[#3b82f6]">MCT</span>
                        <span className="text-neutral-800 font-light">/</span>
                        {/* Duplicate content for seamless scrolling loop */}
                        <span>Get in touch</span>
                        <span className="text-neutral-800 font-light">/</span>
                        <span className="text-[#3b82f6]">MCT</span>
                        <span className="text-neutral-800 font-light">/</span>
                        <span>Get in touch</span>
                        <span className="text-neutral-800 font-light">/</span>
                        <span className="text-[#3b82f6]">MCT</span>
                        <span className="text-neutral-800 font-light">/</span>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center py-16">
                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 w-full">
                    {/* Brand Logo column */}
                    <div className="relative inline-block select-none">
                        <img
                            src="/logo.png"
                            alt="MCT Logo"
                            className="w-24 h-24 md:w-32 md:h-32 object-contain brightness-95 hover:brightness-100 transition-all duration-300"
                        />
                        <span className="absolute top-0 -right-2 text-xs font-light text-neutral-500">®</span>
                    </div>

                    {/* Navigation Columns Grid - 3 Columns (Products removed, clean structure) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 flex-1 max-w-3xl lg:ml-20">
                        {/* Column 1: Visit us */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase font-barlow">
                                Visit us
                            </h4>
                            <div className="text-sm text-neutral-400 font-light leading-relaxed space-y-1.5">
                                <p>Medical Care & Technology</p>
                                <p>Chandigarh, India</p>
                                <p className="pt-2">
                                    <a href="mailto:mct.medtech@gmail.com" className="hover:text-[#3b82f6] text-neutral-300 transition-colors duration-300 font-normal">
                                        mct.medtech@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:8699715686" className="hover:text-[#3b82f6] text-neutral-300 transition-colors duration-300 font-normal">
                                        +91 8699715686
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Sitemap */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase font-barlow">
                                Sitemap
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-normal">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-normal">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-normal">
                                        About Team
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Socials */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase font-barlow">
                                Socials
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="https://www.instagram.com/medicalcaretechnology/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-normal"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/mct-medcaretech/about/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-normal"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Scroll to Top button */}
                    <div className="flex justify-end items-center self-stretch lg:self-start lg:pt-1">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-12 h-12 rounded-full border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-300 cursor-pointer"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Terms */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full select-none">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 uppercase tracking-widest pt-8 border-t border-neutral-900/60 font-light w-full">
                    <p>© Medical Care and Technology® {currentYear}</p>
                    <div className="flex gap-4 items-center">
                        <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                            Privacy
                        </Link>
                        <span className="text-neutral-800">/</span>
                        <Link to="/terms" className="hover:text-white transition-colors duration-300">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
