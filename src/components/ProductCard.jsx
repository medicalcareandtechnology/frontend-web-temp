import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 transition-all duration-300 hover:shadow-2xl"
        >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2 font-orbitron tracking-wide">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic line-clamp-2">
                    "{product.tagline}"
                </p>

                {/* View More Button */}
                <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-none hover:bg-blue-600 transition-all duration-300 uppercase tracking-wider group/button"
                >
                    View More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ProductCard;
