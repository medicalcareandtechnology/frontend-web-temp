import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LifestyleUsage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ["#0a0a0a", "#111827", "#1e293b", "#eff6ff"]
    );

    const useCases = [
        {
            title: "Work",
            subtitle: "Uninterrupted Focus",
            description: "Discreet support during long hours, meetings, and daily tasks. Designed to remain invisible, giving you the confidence to lead without distraction.",
            image: "https://res.cloudinary.com/dkganhypn/image/upload/v1767017722/ChatGPT_Image_Dec_29_2025_07_44_59_PM_qw5e8q.png",
            label: "Discretion & Confidence"
        },
        {
            title: "Travel",
            subtitle: "Movement Without Limits",
            description: "Comfort that moves with you — wherever the day takes you. From long flights to city walks, Ease Band ensures your plans stay on track.",
            image: "https://images.unsplash.com/photo-1503221043305-f7498f8b7888?auto=format&fit=crop&q=80&w=2000",
            label: "Freedom of Movement"
        },
        {
            title: "Rest",
            subtitle: "Quiet Restoration",
            description: "Gentle relief when your body needs stillness. A soft companion for those moments of decompression, providing warmth without overstimulation.",
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000",
            label: "Gentleness & Calm"
        },
        {
            title: "Daily Wear",
            subtitle: "Seamless Integration",
            description: "Designed to blend effortlessly into everyday life. No need to plan your outfit or routine around your relief — it simply fits.",
            image: "https://res.cloudinary.com/dkganhypn/image/upload/v1767017654/ChatGPT_Image_Dec_29_2025_07_42_39_PM_asw22l.png",
            label: "Natural Ease"
        }
    ];

    return (
        <section ref={containerRef} className="relative">
            {/* Dynamic Background Layer */}
            <motion.div
                style={{ backgroundColor }}
                className="absolute inset-0 z-0 h-full w-full"
            />

            {/* Content Container */}
            <div className="relative z-10 pb-24">
                {/* Header */}
                <div className="pt-32 pb-24 text-center container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-px w-24 bg-white/30 mx-auto mb-12"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 font-serif text-white"
                    >
                        Designed for Real Life
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-xs md:text-sm font-light tracking-[0.3em] uppercase"
                    >
                        Ease Band adapts to your routine
                    </motion.p>
                </div>

                {/* Vertical Scroll Sections */}
                <div className="flex flex-col gap-24 md:gap-32 px-4 md:px-8">
                    {useCases.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative w-full max-w-6xl mx-auto h-[60vh] md:h-[75vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-2xl"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/20" /> {/* General dimming */}

                            {/* Centered Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="max-w-3xl"
                                >
                                    <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8 text-white/70">
                                        {item.label}
                                    </p>
                                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 font-serif italic drop-shadow-lg">
                                        {item.title}
                                    </h3>
                                    <div className="h-px w-24 bg-white/40 mx-auto mb-8" />
                                    <p className="text-lg md:text-2xl leading-relaxed font-light text-gray-200 drop-shadow-md">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LifestyleUsage;
