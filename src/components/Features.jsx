import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Waves, EyeOff, Battery, Feather, Shield } from 'lucide-react';

const features = [
    {
        icon: <Thermometer className="w-8 h-8" />,
        title: 'INSTANT HEAT',
    },
    {
        icon: <Waves className="w-8 h-8" />,
        title: 'GENTLE MASSAGE',
    },
    {
        icon: <EyeOff className="w-8 h-8" />,
        title: 'DISCREET DESIGN',
    },
    {
        icon: <Battery className="w-8 h-8" />,
        title: 'ALL-DAY BATTERY',
    },
    {
        icon: <Feather className="w-8 h-8" />,
        title: 'LIGHTWEIGHT',
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'SKIN-SAFE',
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white relative">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-black mb-4 font-orbitron tracking-wider"
                    >
                        FEATURES
                    </motion.h2>
                    <div className="h-1 w-24 bg-black mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-gray-200">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="relative p-8 border-b border-r border-gray-200 bg-white/60 backdrop-blur-sm group flex flex-col items-center justify-center aspect-square"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="mb-4 text-black group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-black font-orbitron tracking-widest text-center">
                                {feature.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
