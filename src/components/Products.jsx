import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/productsData';

const Products = () => {
    return (
        <section id="product" className="py-24 bg-white relative overflow-hidden">
            {/* Top Wave Transition (Dark to White) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0a0a0a]"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-orbitron tracking-wide uppercase">
                        Our Products
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Innovative solutions designed with affordability, accessibility, and adaptability at their core.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
