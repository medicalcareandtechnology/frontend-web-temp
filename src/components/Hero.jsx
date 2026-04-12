import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Elegant Parallax Drift (Softer, premium feel)
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Subtle slow-zoom
    const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]); // Fade to dark
    const bgBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(4px)"]); // Minimal blur

    // Title gently floats up and fades away, instead of zooming into the camera
    const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]); // Slight push back
    const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]); // Float UP into the ether

    // Subtitle fades out faster as we scroll
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -50]); // Float UP instead of down

    return (
        <section ref={containerRef} id="home" className={`relative bg-[#0a0a0a] ${isMobile ? 'h-screen' : 'h-[150vh]'}`}>
            {/* Sticky Container keeps everything in view while scrolling the 150vh on desktop */}
            <div className={`overflow-hidden flex items-center justify-center pt-20 w-full ${isMobile ? 'relative h-full' : 'sticky top-0 h-screen'}`}>

                {/* Background Image with Deep Parallax & Blur */}
                <motion.div
                    className="absolute inset-0 z-0 origin-center"
                    style={isMobile ? {} : {
                        scale: bgScale,
                        opacity: bgOpacity,
                        filter: bgBlur
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url("https://res.cloudinary.com/dkganhypn/image/upload/v1766937813/ChatGPT_Image_Dec_28_2025_09_32_44_PM_mard9h.png")` }}
                    />
                </motion.div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full -mt-24 md:-mt-12 gap-4 md:gap-0">

                    {/* Element entrance animation wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        {/* The Star - Massive Scaling Title */}
                        <motion.h1
                            style={{
                                ...(isMobile ? {} : {
                                    scale: titleScale,
                                    opacity: titleOpacity,
                                    y: titleY,
                                }),
                                fontFamily: '"Azeret Mono", monospace'
                            }}
                            className="text-[14vw] md:text-[12vw] text-white tracking-tight leading-none whitespace-nowrap origin-center select-none font-medium"
                        >
                            EASE BAND
                        </motion.h1>

                    {/* Secondary Content - Centered below title with gap */}
                    <motion.div
                        style={isMobile ? {} : { opacity: contentOpacity, y: contentY }}
                        className="flex flex-col items-center w-full px-6 mt-4 md:mt-12 z-30"
                    >
                        <p className="text-xl md:text-2xl text-white/90 font-light italic max-w-3xl mx-auto leading-relaxed text-shadow-sm">
                            A wearable relief band designed to ease menstrual cramps
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 md:mt-10">
                            <a
                                href="#product-showcase"
                                className="group relative px-12 py-4 bg-white text-black font-medium uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-500 hover:tracking-[0.3em]"
                            >
                                <span className="relative z-10 pointer-events-none">Explore</span>
                                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em] pointer-events-none">
                                    Explore
                                </span>
                            </a>
                        </div>
                    </motion.div>
                    </motion.div>

                    {/* Animated Scroll Indicator - Fixed to bottom of screen */}
                    <motion.div
                        style={isMobile ? {} : { opacity: contentOpacity }}
                        className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 ${isMobile ? 'bottom-8 scale-75' : 'bottom-12'}`}
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] font-light text-white/60">Scroll</span>
                        <motion.div
                            className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"
                            animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
