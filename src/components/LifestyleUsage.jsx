import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const baseUseCases = [
    {
        title: "Work",
        subtitle: "Uninterrupted Focus",
        description: "Discreet support during long hours. Designed to remain invisible.",
        image: "https://res.cloudinary.com/dkganhypn/image/upload/v1767017722/ChatGPT_Image_Dec_29_2025_07_44_59_PM_qw5e8q.png",
        label: "Discretion"
    },
    {
        title: "Travel",
        subtitle: "Movement Without Limits",
        description: "Comfort that moves with you from long flights to city walks.",
        image: "https://images.unsplash.com/photo-1503221043305-f7498f8b7888?auto=format&fit=crop&q=80&w=2000",
        label: "Freedom"
    },
    {
        title: "Rest",
        subtitle: "Quiet Restoration",
        description: "Gentle relief when your body needs stillness and decompression.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000",
        label: "Gentleness"
    },
    {
        title: "Daily",
        subtitle: "Seamless Integration",
        description: "Designed to blend effortlessly into everyday life without planning.",
        image: "https://res.cloudinary.com/dkganhypn/image/upload/v1767017654/ChatGPT_Image_Dec_29_2025_07_42_39_PM_asw22l.png",
        label: "Natural Ease"
    }
];

// Initialize with unique IDs
const generateItems = () => {
    let output = [];
    for(let i = 0; i < 2; i++) {
        baseUseCases.forEach(u => {
            output.push({ ...u, instanceId: Math.random().toString(36).substr(2, 9) });
        });
    }
    return output;
};

const LifestyleUsage = () => {
    const containerRef = useRef(null);
    const [items, setItems] = useState(generateItems());
    const [scrollingDown, setScrollingDown] = useState(true);
    const { scrollY } = useScroll();

    // Track vertical scroll to dictate right/left horizontal auto-advance
    useEffect(() => {
        return scrollY.on("change", (latest) => {
            const previous = scrollY.getPrevious();
            if (latest > previous && !scrollingDown) setScrollingDown(true);
            else if (latest < previous && scrollingDown) setScrollingDown(false);
        });
    }, [scrollY, scrollingDown]);

    // Carousel Shift Operations
    // Crucial fix: generate a brand new instanceId so the item "enters" instead of physically flying across the screen
    const shiftRight = () => {
        setItems(prev => {
            const copy = [...prev];
            const first = copy.shift();
            copy.push({ ...first, instanceId: Math.random().toString(36).substr(2, 9) });
            return copy;
        });
    };

    const shiftLeft = () => {
        setItems(prev => {
            const copy = [...prev];
            const last = copy.pop();
            copy.unshift({ ...last, instanceId: Math.random().toString(36).substr(2, 9) });
            return copy;
        });
    };

    // Auto-advance loop connected to scroll direction
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollingDown) shiftRight();
            else shiftLeft();
        }, 3500); 
        return () => clearInterval(interval);
    }, [scrollingDown]);

    return (
        <section ref={containerRef} className="relative bg-[#FAF9F6] py-32 z-10 overflow-hidden">
            {/* Header Phase */}
            <div className="text-center container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-px w-24 bg-[#B58B80] mx-auto mb-10 origin-center"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-[4rem] font-light mb-6 font-serif text-[#3B302C] tracking-tight"
                >
                    Designed for Real Life
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[#8B7355] text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
                >
                    Ease Band adapts to your routine
                </motion.p>
            </div>

            {/* Accordion Carousel Container */}
            <div className="w-full px-2 md:px-6 lg:px-12 mx-auto">
                <div className="flex w-full h-[50vh] md:h-[65vh] gap-2 md:gap-4 lg:gap-6 justify-center items-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {items.map((item, index) => {
                            const isCenter = index === 3;
                            
                            return (
                                <motion.div
                                    key={item.instanceId} // Unique ID prevents flying
                                    layout
                                    initial={{ opacity: 0, flex: 0 }}
                                    animate={{ 
                                        flex: isCenter ? 8 : 1,
                                        opacity: isCenter ? 1 : 0.4,
                                        filter: isCenter ? "grayscale(0%)" : "grayscale(30%) blur(1px)"
                                    }}
                                    exit={{ opacity: 0, flex: 0 }}
                                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                                    onClick={() => {
                                        if (index > 3) shiftRight();
                                        if (index < 3) shiftLeft();
                                    }}
                                    className={`relative h-full rounded-[2rem] overflow-hidden cursor-pointer group shadow-2xl ${isCenter ? 'border border-[#D5C1B6]/40' : ''}`}
                                >
                                    <motion.img 
                                        src={item.image} 
                                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-[4s] group-hover:scale-105" 
                                    />
                                    
                                    {!isCenter && <div className="absolute inset-0 bg-[#3B302C]/20" />}
                                    
                                    {isCenter && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 bg-[#FAF9F6]/85 backdrop-blur-xl p-6 md:p-10 rounded-[1.5rem] border border-white/40 shadow-xl pointer-events-none"
                                        >
                                            <p className="text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase mb-2 md:mb-3 text-[#8B7355]">
                                                {item.label}
                                            </p>
                                            <h3 className="text-3xl md:text-5xl font-light mb-0 md:mb-4 font-serif text-[#3B302C]">
                                                {item.title}.
                                            </h3>
                                            <div className="hidden md:block h-px w-16 bg-[#B58B80]/40 mb-4" />
                                            <p className="hidden md:block text-sm md:text-base leading-relaxed font-light text-[#5A504C] max-w-lg">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    )}
                                    
                                    {!isCenter && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                            style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}
                                        >
                                            <span className="rotate-180 text-white/90 font-serif tracking-[0.3em] font-light text-lg md:text-xl drop-shadow-md">
                                                {item.title}
                                            </span>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default LifestyleUsage;
