import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Box } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Demo from '../components/Demo';
import { getProductById } from '../data/productsData';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = getProductById(productId);

    // If product not found, show error
    if (!product) {
        return (
            <div className="bg-[#0a0a0a] min-h-screen text-white">
                <Navbar />
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-none hover:bg-blue-700 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Navbar darkMode={true} />

            {/* Product Detail Section */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    {/* Back Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-black transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-semibold">Back to Products</span>
                    </motion.button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-left">
                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-6xl font-bold text-black mb-8 font-orbitron tracking-wide"
                            >
                                {product.name}
                            </motion.h1>

                            {/* Quote */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-12"
                            >
                                <p className="text-xl md:text-2xl text-gray-700 font-light italic relative inline-block pl-8">
                                    <span className="absolute top-0 left-0 text-blue-600 text-4xl font-serif leading-none -translate-y-2">"</span>
                                    {product.tagline}
                                    <span className="text-blue-600 text-4xl font-serif leading-none ml-2">"</span>
                                </p>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8"
                            >
                                <h3 className="text-2xl font-bold text-black mb-4 font-orbitron">About {product.name}</h3>
                                {product.description.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace('MCT', '<span class="text-blue-600 font-semibold">MCT</span>') }} />
                                ))}
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                {product.modelPath && (
                                    <Link
                                        to="/view-3d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold border-2 border-black rounded-none hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
                                    >
                                        <Box className="w-5 h-5" />
                                        View in 3D
                                    </Link>
                                )}
                            </motion.div>
                        </div>

                        {/* Right Column: Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="h-full flex items-center justify-center"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <Features />

            {/* Demo Section */}
            <Demo />

            <Footer />
        </div>
    );
};

export default ProductDetail;
