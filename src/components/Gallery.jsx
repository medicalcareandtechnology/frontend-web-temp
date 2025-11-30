import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import gallery1 from '../assets/neoarm_1.jpeg';
import gallery2 from '../assets/neoarm_2.jpeg';
import gallery3 from '../assets/neoarm_3.jpeg';


const images = [
    {
        src: gallery1,
        alt: 'Lifestyle Usage',
        title: 'Daily Life Integration',
        description: 'MCT seamlessly integrates into everyday activities, providing natural grip and dexterity for tasks like holding objects, eating, and more.',
        specs: ['Grip Force: 45N', 'Response Time: <100ms', 'Weight: 420g']
    },
    {
        src: gallery2,
        alt: 'Tech Detail',
        title: 'Precision Engineering',
        description: 'Advanced mechanical design featuring high-precision sensors, adaptive finger mechanisms, and carbon fiber construction for durability.',
        specs: ['6 DOF Movement', 'Titanium Joints', 'IP67 Rated']
    },
    {
        src: gallery3,
        alt: 'Dark Mode',
        title: 'Night Vision Mode',
        description: 'Integrated LED indicators provide visual feedback in low-light conditions, enhancing usability and safety during nighttime activities.',
        specs: ['LED Indicators', 'Low-Light Sensors', 'Auto-Brightness']
    },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Gallery</h2>
                    <p className="text-gray-400">Experience the MCT Prosthetic Arm in action.</p>
                </div>

                {/* Collage Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(image)}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${index === 0 ? 'row-span-2' :
                                index === 2 ? 'col-span-2' : ''
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 ? 'object-bottom' : ''
                                    }`}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                                    <div className="flex items-center text-blue-400 text-sm font-medium">
                                        <ZoomIn size={16} className="mr-2" />
                                        Click to expand
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl w-full bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image */}
                                <div className="relative aspect-square md:aspect-auto">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/50" />
                                </div>

                                {/* Info */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            {selectedImage.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            {selectedImage.description}
                                        </p>

                                        {/* Specs */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                                                Technical Specifications
                                            </h4>
                                            {selectedImage.specs.map((spec, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                                    className="flex items-center text-gray-300"
                                                >
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                                    {spec}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
