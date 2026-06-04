import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EaseflowApp = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Majestic parallax floating for the centered device
    const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

    return (
        <section ref={containerRef} id="easeflow-app" className="py-40 relative overflow-hidden bg-[#FAF9F6] flex flex-col items-center justify-center text-center">
            
            {/* Ambient Animated Luxury Background representing the ethereal space */}
            <div className="absolute inset-0 z-0 overflow-hidden mix-blend-multiply opacity-50 pointer-events-none">
                <motion.div 
                    className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center"
                    style={{ backgroundImage: `url('/ethereal-bg.png')` }}
                    animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, 0],
                        x: [0, -15, 0],
                        y: [0, -15, 0]
                    }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity,
                        repeatType: "reverse", 
                        ease: "easeInOut" 
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#fbf8f1]/90 via-[#f4eee0]/70 to-[#eddcd2]/60 backdrop-blur-[4px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-[#FAF9F6] opacity-90" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center w-full">
                
                {/* Header Phase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-4xl mb-20"
                >
                    <div className="h-px w-24 bg-[#B58B80] mx-auto mb-10 origin-center" />
                    <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-light text-[#3B302C] mb-8 leading-[1.1] tracking-tight">
                        Serene Relief.
                        <span className="block font-serif italic text-[#8B7355] mt-4 text-4xl md:text-6xl">Timeless Comfort.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-[#5A504C] leading-relaxed font-light max-w-2xl mx-auto">
                        Bathe in pure luxury. The easeflow app wraps you in a calming experience, giving you precise control over your Ease Band's heat and rhythms.
                    </p>
                </motion.div>

                {/* Main Showcase Layout (Grid for text on sides, phone in middle) */}
                <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 mb-20">
                    
                    {/* Left Features (Desktop only, hidden on mobile) */}
                    <div className="hidden lg:flex flex-col items-end justify-center w-1/3 gap-24 text-right pr-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="flex flex-col items-end"
                        >
                            <h4 className="text-2xl font-serif italic text-[#3B302C] mb-3">Personalized Heat</h4>
                            <p className="text-[#5A504C] font-light leading-relaxed mb-4 max-w-[280px]">
                                Craft your own ideal thermal curve. Watch the warm gradient adjust softly to wrap your exact needs.
                            </p>
                            <div className="w-8 h-px bg-[#B58B80]/50" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex flex-col items-end"
                        >
                            <h4 className="text-2xl font-serif italic text-[#3B302C] mb-3">Seamless Sync</h4>
                            <p className="text-[#5A504C] font-light leading-relaxed mb-4 max-w-[280px]">
                                Instantly recognizes your band via low-energy Bluetooth. Control silently with zero physical effort.
                            </p>
                            <div className="w-8 h-px bg-[#B58B80]/50" />
                        </motion.div>
                    </div>

                    {/* Centerpiece - The majestic floating device */}
                    <div className="w-full lg:w-1/3 flex justify-center perspective-1000 z-20">
                        {/* Floating ambient glow behind phone */}
                        <motion.div 
                            style={{ y: imageY }}
                            className="absolute w-[300px] h-[500px] bg-[#FFE5B4]/50 rounded-[100%] blur-[100px] z-0"
                        />

                        <motion.div 
                            style={{ y: imageY, scale: imageScale }} 
                            className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[2/3.5] flex items-center justify-center p-6 rounded-[2.5rem] bg-white/30 border border-white/60 shadow-[0_30px_80px_-20px_rgba(156,132,118,0.3)] backdrop-blur-md z-10"
                        >
                            <img 
                                src="/easeflow-luxury-mockup.png" 
                                alt="Easeflow App Dashboard" 
                                className="w-full h-full object-cover rounded-3xl pointer-events-none drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Features (Desktop only, hidden on mobile) */}
                    <div className="hidden lg:flex flex-col items-start justify-center w-1/3 gap-24 text-left pl-4 z-20">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex flex-col items-start"
                        >
                            <h4 className="text-2xl font-serif italic text-[#3B302C] mb-3">Calming Insights</h4>
                            <p className="text-[#5A504C] font-light leading-relaxed mb-4 max-w-[280px]">
                                Track patterns without the anxiety. A serene dashboard that replaces medical charts with beautiful flow states.
                            </p>
                            <div className="w-8 h-px bg-[#B58B80]/50" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex flex-col items-start"
                        >
                            <h4 className="text-2xl font-serif italic text-[#3B302C] mb-3">Quiet Forecasting</h4>
                            <p className="text-[#5A504C] font-light leading-relaxed mb-4 max-w-[280px]">
                                Subtle, gentle preparations for your cycle. No alarms. Just a whisper when you might need your band.
                            </p>
                            <div className="w-8 h-px bg-[#B58B80]/50" />
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Fallback Features (Hidden on Desktop) */}
                <div className="flex lg:hidden flex-col gap-10 mb-16 text-center">
                    {[
                        { t: "Personalized Heat", d: "Craft your own ideal thermal curve. Watch the warm gradient adjust softly to wrap your exact needs." },
                        { t: "Seamless Sync", d: "Instantly recognizes your band via low-energy Bluetooth. Control silently with zero physical effort." },
                        { t: "Calming Insights", d: "A serene dashboard that replaces medical charts with beautiful flow states." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <h4 className="text-xl font-serif italic text-[#3B302C] mb-2">{item.t}</h4>
                            <p className="text-[#5A504C] font-light text-sm max-w-[280px] mb-3">{item.d}</p>
                            <div className="w-6 h-px bg-[#B58B80]/50" />
                        </div>
                    ))}
                </div>
                
                {/* Download CTA - Centered below the assembly (Hidden for easeflow app)
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <a href="#" className="flex items-center justify-center gap-5 bg-white/70 hover:bg-white border border-[#D5C1B6]/60 transition-all duration-700 rounded-2xl px-10 py-5 group shadow-sm hover:shadow-lg backdrop-blur-md">
                        <svg viewBox="0 0 512 512" className="w-6 h-6 fill-[#5A504C] group-hover:scale-105 transition-transform duration-700">
                            <path d="M325.3 201.2l-165.7-93.6c-23.8-13.4-52-2.6-61.9 22.8-5.8 14.8-5.8 30.7 0 45.5l165.7 93.6v-68.3zm-56.1 149.2V246l-149.7-84.6v218.1c0 15.5 4.4 30.3 12.4 42.5l137.3-71.6zM481.6 211.8c-15.5-24.3-43.1-37-70.5-31.3l-44.6 9.4v118.1l44.6 9.4c27.4 5.7 55-6.9 70.5-31.3 10.5-16.5 10.5-38.5 0-55z"/>
                            <path d="M72 434.7c9.9 25.4 38.2 36.3 61.9 22.8l165.7-93.6v-68.3L134 389.2c-15.7 8.9-36.6 6.5-49.6-5.1-3.8-3.4-7-7.4-9.4-11.9-2-3.7-3.3-7.8-3.9-12l-6.2 58.7c2.3 5.6 5 11 8.1 15.8z"/>
                        </svg>
                        <div className="text-left flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] group-hover:text-[#5A504C] transition-colors">Get it on</span>
                            <span className="text-base font-medium tracking-wide text-[#3B302C]">Google Play</span>
                        </div>
                    </a>
                    
                    <a href="#" className="flex items-center justify-center gap-5 bg-white/70 hover:bg-white border border-[#D5C1B6]/60 transition-all duration-700 rounded-2xl px-10 py-5 group shadow-sm hover:shadow-lg backdrop-blur-md">
                        <svg viewBox="0 0 512 512" className="w-6 h-6 fill-[#5A504C] group-hover:scale-105 transition-transform duration-700">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 46.4 17.5 73.1 17.5 49.3 0 92.5-84.6 111.4-123-41-20.4-67.4-53.7-67.2-87.8z"/>
                            <path d="M320.8 45.4C333 30.6 341 12 341 .4c0-2-1.2-2.8-3.4-2.8-4.9 0-32.9 2-53.1 18.2-16 12.8-28.5 30-28.5 50.8 0 3.2 2.3 4.4 5 4.4 20.4.4 43.1-9 57.8-25.6z"/>
                        </svg>
                        <div className="text-left flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] group-hover:text-[#5A504C] transition-colors">Download on the</span>
                            <span className="text-base font-medium tracking-wide text-[#3B302C]">App Store</span>
                        </div>
                    </a>
                </motion.div>
                */}

            </div>
        </section>
    );
};

export default EaseflowApp;
