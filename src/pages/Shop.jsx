import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check, ShieldCheck, Truck, RotateCcw, ArrowRight, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import useRazorpay from '../hooks/useRazorpay';
import { useAuth } from '../hooks/useAuth';
import { createOrder, verifyPayment } from '../services/api';

// Icons for Trust Section
const CODIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <path d="M12 15h.01" />
    </svg>
);

const Shop = () => {
    // Zoom/Gallery State
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isProcessing, setIsProcessing] = useState(false);

    const { displayRazorpay } = useRazorpay();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const images = [
        "https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic2_vjwyyy.jpg", // Main View
        "https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic1_mrjyiv.jpg", // Lifestyle
        "https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/layers_niv9is.jpg" // Detail
    ];

    const handleMouseMove = (e) => {
        if (!isZoomed) return;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
    };

    const handleBuyNow = async () => {
        if (!isAuthenticated) {
            // Redirect to login, but save the current URL to come back after login
            navigate('/login', { state: { from: location } });
            return;
        }

        setIsProcessing(true);
        try {
            // 1. Create Order on Backend
            const orderData = await createOrder(1999); // Amount in INR

            // 2. Open Razorpay Checkout
            await displayRazorpay(
                orderData,
                async (paymentData) => {
                    // 3. On Success, Verify Payment
                    try {
                        const verificationResult = await verifyPayment(paymentData);
                        if (verificationResult.success) {
                            alert("Payment Successful! Your Ease Band is on its way.");
                            // Optional: Redirect to success page
                        } else {
                            alert("Payment verification failed. Please contact support.");
                        }
                    } catch (verifyError) {
                        console.error("Verification Error", verifyError);
                        alert("Payment Successful but verification failed. Please contact support.");
                    }
                },
                (error) => {
                    console.error("Payment Failed", error);
                    alert(`Payment Failed: ${error.description}`);
                }
            );

        } catch (error) {
            console.error("Transaction Error", error);
            alert("Could not initiate transaction. Please try again later.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="bg-[#F8F4F0] min-h-screen text-[#2D2424] font-sans selection:bg-[#C4956A] selection:text-white">
            <SEO
                title="Shop Ease Band | Wearable Heating Pad"
                description="Buy the Ease Band online. Intelligent heating and vibration therapy for menstrual cramps. secure checkout, free shipping in India."
                keywords="buy ease band, Ease Band price, heating pad for periods, menstrual relief device shop"
                url="/shop"
            />
            <Navbar useDarkText={true} />

            {/* 1. ABOVE THE FOLD */}
            <section className="pt-12 pb-24 md:pt-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                        {/* Left: Product Visuals (Gallery + Zoom) */}
                        <div className="lg:w-1/2">
                            <div
                                className="relative aspect-[4/5] bg-[#F2EAE4] rounded-2xl overflow-hidden cursor-crosshair mb-6"
                                onMouseEnter={() => setIsZoomed(true)}
                                onMouseLeave={() => setIsZoomed(false)}
                                onMouseMove={handleMouseMove}
                            >
                                <img
                                    src={images[activeImage]}
                                    alt="Ease Band View"
                                    className={`w-full h-full object-cover transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                                    style={isZoomed ? { transformOrigin: `${mousePosition.x}% ${mousePosition.y}%` } : {}}
                                />
                                {!isZoomed && (
                                    <div className="absolute bottom-4 right-4 bg-[#F8F4F0]/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-[#6B5C50] pointer-events-none">
                                        Hover to Zoom
                                    </div>
                                )}
                            </div>
                            {/* Thumbnails */}
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`w-20 h-20 rounded-lg overflow-hidden transition-all flex-shrink-0 ${activeImage === idx ? 'ring-2 ring-[#C4956A]' : 'hover:opacity-80'}`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Product Details & Purchase */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            {/* Header */}
                            <div className="mb-2 flex items-center gap-2">
                                <span className="bg-[#E8CFBA] text-[#6B5C50] text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">New Arrival</span>
                                <div className="flex text-[#C4956A] text-xs">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                                    <span className="text-[#8C7A6B] ml-1">(1,240+ Reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#2D2424] mb-4 leading-tight">
                                Ease Band
                            </h1>
                            <p className="text-xl text-[#6B5C50] font-light mb-8 max-w-md leading-relaxed">
                                Relief that moves with you. The intelligent wearable for natural, instant comfort.
                            </p>

                            {/* Price Block */}
                            <div className="bg-[#F2EAE4] p-6 rounded-xl mb-8 max-w-md">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-4xl font-bold text-[#2D2424]">₹1,999</span>
                                    <span className="text-lg text-[#8C7A6B] line-through">₹4,999</span>
                                    <span className="text-[#6B5C50] text-sm font-medium bg-[#E8CFBA]/60 px-2 py-1 rounded">-60% OFF</span>
                                </div>
                                <p className="text-xs text-[#8C7A6B] mb-4">Inclusive of all taxes. Free shipping across India.</p>

                                {/* Trust Badges - Mini */}
                                <div className="flex gap-4 text-xs text-[#6B5C50] font-medium py-3">
                                    <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#C4956A]" /> 1 Year Warranty</div>
                                    <div className="flex items-center gap-1.5"><Truck size={14} className="text-[#C4956A]" /> Free Delivery</div>
                                </div>

                                {/* Primary CTA (Editorial Style) */}
                                <button
                                    onClick={handleBuyNow}
                                    disabled={isProcessing}
                                    className={`w-full group relative h-14 border border-[#2D2424] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 font-sans ${isProcessing ? 'bg-[#2D2424] cursor-wait' : 'bg-transparent'}`}
                                >
                                    <span className={`relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 ${isProcessing ? 'text-white' : 'text-[#2D2424] group-hover:text-white'}`}>
                                        {isProcessing && (
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        {isProcessing ? 'PROCESSING...' : 'BUY NOW'}
                                    </span>
                                    {!isProcessing && <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />}
                                </button>
                                <p className="text-center text-[10px] text-[#8C7A6B] mt-3 font-medium uppercase tracking-wider">
                                    Safe & Secure Checkout via Razorpay
                                </p>
                            </div>

                            {/* Expanded Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 max-w-md">
                                {[
                                    { icon: CODIcon, label: "Cash on Delivery Available" },
                                    { icon: RotateCcw, label: "7 Day Replacement" },
                                    { icon: Check, label: "100% Original Product" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-2 p-3 bg-[#F2EAE4] rounded-xl hover:bg-[#E8CFBA]/30 transition-colors">
                                        <div className="p-2 bg-[#F8F4F0] rounded-full text-[#2D2424]">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-[10px] md:text-xs font-semibold text-[#6B5C50] leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECTION A: WHY THIS EXISTS (Empathic Approach) */}
            <section className="py-24 bg-[#F5ECE5]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-serif text-[#2D2424] mb-6 leading-tight">
                                Because life <br /> doesn't pause.
                            </h2>
                            <p className="text-[#6B5C50] leading-relaxed font-light text-lg mb-8">
                                We know those days. The meetings you can't skip, the classes that drag on, or just the desire to feel <i>okay</i> without relying on painkillers.
                            </p>
                            <p className="text-[#2D2424] font-medium">
                                Ease Band isn't a cure. It's a companion. <br />
                                <span className="text-[#8C7A6B] font-normal">A gentle way to reclaim your day, naturally.</span>
                            </p>
                        </div>

                        <div className="md:w-1/2 relative">
                            <div className="absolute inset-0 bg-[#D4A08A]/30 rounded-full blur-[60px] opacity-40 mix-blend-multiply"></div>
                            <div className="relative bg-[#F8F4F0] p-8 rounded-3xl">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-[#8C7A6B] mb-6">Designed For</h3>
                                <ul className="space-y-4">
                                    {[
                                        "The long work meetings",
                                        "University lectures",
                                        "Travel days",
                                        "Quiet evenings at home"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C4956A] group-hover:scale-125 transition-transform"></div>
                                            <span className="text-[#6B5C50] font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 text-[10px] text-[#8C7A6B] leading-relaxed italic">
                                    Note: Ease Band provides symptom relief for menstrual cramps. It is not a medical treatment for conditions like Endometriosis.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION B: KEY BENEFITS (Clean, No-Box Design) */}
            <section className="py-24 bg-[#F8F4F0]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#2D2424] mb-4">Relief that fits your rhythm.</h2>
                        <p className="text-[#8C7A6B] font-light">Engineered to work around your schedule, not the other way around.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                        {[
                            {
                                title: "Instant Warmth",
                                desc: "Reaches a comforting 45°C in just 15 seconds. Like a warm hug, exactly when you need it."
                            },
                            {
                                title: "Invisible",
                                desc: "Paper-thin profile means you can wear it under anything. Your secret source of comfort."
                            },
                            {
                                title: "All Day",
                                desc: "One charge lasts 8 hours. From your morning commute to your evening unwind."
                            }
                        ].map((b, i) => (
                            <div key={i} className="flex flex-col items-start text-left space-y-4 group">
                                <span className="text-xs font-bold tracking-widest text-[#E8CFBA] group-hover:text-[#2D2424] transition-colors duration-500">0{i + 1}</span>
                                <h3 className="text-3xl font-serif text-[#2D2424]">{b.title}</h3>
                                <p className="text-[#8C7A6B] leading-relaxed font-light text-sm">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 4. SECTION C: HOW IT WORKS */}
            < section className="py-20 bg-[#2D2424] text-[#F8F4F0]" >
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-16">Simple as 1, 2, 3.</h2>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line removed */}

                        {[
                            { step: "01", title: "Strap It On", desc: "Adjust the flexible band for a snug fit around your waist." },
                            { step: "02", title: "Power Up", desc: "Long press to start. Select your preferred heat & massage mode." },
                            { step: "03", title: "Live Free", desc: "Go about your day while the warmth melts the tension away." }
                        ].map((s, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#1A1414] rounded-full flex items-center justify-center text-[#C4956A] text-3xl font-serif italic mb-6 shadow-2xl shadow-black/20">
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-medium mb-3">{s.title}</h3>
                                <p className="text-[#C4B5A5] text-sm max-w-xs font-light">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION D: PROOF / TRUST */}
            <section className="py-24 bg-[#F2EAE4]">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="flex justify-center text-[#C4956A] mb-6 gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif text-[#2D2424] mb-6">
                        "I used to take leave every month. Now I just take my Ease Band."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="w-12 h-12 bg-[#E8CFBA] rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-[#2D2424] text-sm">Priya S.</div>
                            <div className="text-xs text-[#8C7A6B] uppercase tracking-wider">Verified Purchase • Bangalore</div>
                        </div>
                    </div>

                    <div className="pt-12">
                        <p className="text-xs font-bold text-[#8C7A6B] uppercase tracking-widest mb-6">Secured & Powered By</p>
                        <div className="flex justify-center gap-8 opacity-50 grayscale">
                            {/* Replaced with text placeholders for reliability if SVGs missing */}
                            <span className="font-bold text-xl text-[#2D2424]">Razorpay</span>
                            <span className="font-bold text-xl text-[#2D2424]">UPI</span>
                            <span className="font-bold text-xl text-[#2D2424]">VISA</span>
                            <span className="font-bold text-xl text-[#2D2424]">RuPay</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SECTION E: FINAL CTA (Immersive Anchor) */}
            <section className="py-32 bg-[#050505] text-[#F8F4F0] relative overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#8B5E6B]/15 blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-7xl font-serif italic text-white/90 leading-tight">
                            "A quiet revolution <br /> <span className="text-white not-italic">for your comfort."</span>
                        </h2>

                        {/* Divider removed */}

                        <p className="text-lg text-[#8C7A6B] font-light tracking-wide max-w-xl mx-auto">
                            Join the thousands of women who have already chosen freedom over pain.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <button
                                onClick={handleBuyNow}
                                disabled={isProcessing}
                                className={`group relative px-12 py-5 border border-[#F8F4F0] overflow-hidden rounded-none min-w-[280px] transition-all duration-300 ${isProcessing ? 'bg-[#F8F4F0] cursor-wait' : 'bg-transparent cursor-pointer'}`}
                            >
                                <span className={`relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 ${isProcessing ? 'text-[#050505]' : 'text-[#F8F4F0] group-hover:text-[#2D2424]'}`}>
                                    {isProcessing && (
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    {isProcessing ? 'PROCESSING...' : 'Get Ease Band — ₹1,999'}
                                </span>
                                {!isProcessing && <div className="absolute inset-0 bg-[#F8F4F0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />}
                            </button>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A6B]">
                                7-Day Risk-Free Trial · Free Shipping
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Shop;
