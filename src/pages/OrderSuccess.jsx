import React from 'react';
import { motion } from 'framer-motion';
import { Check, Package, ArrowRight, Copy } from 'lucide-react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const OrderSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { orderId, address } = location.state || {};

    // If no order data, redirect to shop
    if (!orderId) {
        return <Navigate to="/shop" replace />;
    }

    const handleCopyOrderId = () => {
        navigator.clipboard.writeText(orderId);
        // Could add a toast here
    };

    return (
        <div className="bg-[#F8F4F0] min-h-screen text-[#2D2424] font-sans selection:bg-[#C4956A] selection:text-white">
            <SEO
                title="Order Confirmed | Ease Band"
                description="Your order has been placed successfully."
                url="/order-success"
            />

            <section className="pt-16 pb-24 md:pt-24 px-6">
                <div className="container mx-auto max-w-lg text-center">
                    {/* Success Animation */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="w-20 h-20 rounded-full bg-[#2D2424] flex items-center justify-center mx-auto mb-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <Check size={32} className="text-white" strokeWidth={2.5} />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-4xl font-serif text-[#2D2424] mb-3"
                    >
                        Order Confirmed
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[#6B5C50] font-light mb-8"
                    >
                        Thank you for your purchase! Your Ease Band is on its way.
                    </motion.p>

                    {/* Order ID Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-[#F2EAE4] rounded-2xl p-6 mb-6 text-left"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C7A6B]">
                                Order ID
                            </span>
                            <button
                                onClick={handleCopyOrderId}
                                className="flex items-center gap-1.5 text-[10px] text-[#C4956A] hover:text-[#2D2424] transition-colors font-medium uppercase tracking-wider cursor-pointer"
                            >
                                <Copy size={12} />
                                Copy
                            </button>
                        </div>
                        <p className="text-lg font-mono font-medium text-[#2D2424] tracking-wide break-all">
                            {orderId}
                        </p>
                    </motion.div>

                    {/* Delivery Address Card */}
                    {address && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-[#F2EAE4] rounded-2xl p-6 mb-6 text-left"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C7A6B] block mb-3">
                                Delivering To
                            </span>
                            <p className="text-sm font-medium text-[#2D2424]">{address.fullName}</p>
                            <p className="text-sm text-[#6B5C50] font-light mt-1">
                                {address.addressLine1}
                                {address.addressLine2 && `, ${address.addressLine2}`}
                            </p>
                            <p className="text-sm text-[#6B5C50] font-light">
                                {address.city}, {address.state} — {address.pincode}
                            </p>
                        </motion.div>
                    )}

                    {/* Estimated Delivery */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="bg-[#E8CFBA]/20 rounded-xl p-4 mb-8 flex items-center gap-3 justify-center"
                    >
                        <Package size={18} className="text-[#C4956A]" />
                        <span className="text-xs font-medium text-[#2D2424]">
                            Estimated Delivery: 5–7 Business Days
                        </span>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="space-y-3"
                    >
                        <button
                            onClick={() => navigate('/')}
                            className="w-full group relative h-14 border border-[#2D2424] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-transparent"
                        >
                            <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 text-[#2D2424] group-hover:text-white">
                                Continue Browsing
                                <ArrowRight size={16} />
                            </span>
                            <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </button>

                        <p className="text-[10px] text-[#8C7A6B] font-light">
                            A confirmation email has been sent to your registered email address.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OrderSuccess;
