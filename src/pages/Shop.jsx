import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check, ShieldCheck, Truck, RotateCcw, ArrowRight, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar useDarkText={true} />

            {/* 1. ABOVE THE FOLD */}
            <section className="pt-12 pb-24 md:pt-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                        {/* Left: Product Visuals (Gallery + Zoom) */}
                        <div className="lg:w-1/2">
                            <div
                                className="relative aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden cursor-crosshair mb-6 border border-gray-100 shadow-sm"
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
                                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-500 pointer-events-none">
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
                                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === idx ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'}`}
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
                                <span className="bg-blue-100 text-blue-800 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">New Arrival</span>
                                <div className="flex text-yellow-500 text-xs">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                                    <span className="text-gray-400 ml-1">(1,240+ Reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-4 leading-tight">
                                Ease Band
                            </h1>
                            <p className="text-xl text-gray-500 font-light mb-8 max-w-md leading-relaxed">
                                Relief that moves with you. The intelligent wearable for natural, instant comfort.
                            </p>

                            {/* Price Block */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8 max-w-md">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-4xl font-bold text-gray-900">₹1,999</span>
                                    <span className="text-lg text-gray-400 line-through">₹4,999</span>
                                    <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">-60% OFF</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-4">Inclusive of all taxes. Free shipping across India.</p>

                                {/* Trust Badges - Mini */}
                                <div className="flex gap-4 text-xs text-gray-600 font-medium py-3 border-t border-gray-200">
                                    <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-blue-600" /> 1 Year Warranty</div>
                                    <div className="flex items-center gap-1.5"><Truck size={14} className="text-blue-600" /> Free Delivery</div>
                                </div>

                                {/* Primary CTA */}
                                <button className="w-full bg-black text-white h-14 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-[0.98] shadow-lg shadow-gray-200">
                                    BUY NOW
                                </button>
                                <p className="text-center text-[10px] text-gray-400 mt-3 font-medium uppercase tracking-wider">
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
                                    <div key={i} className="flex flex-col items-center text-center gap-2 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                                        <div className="p-2 bg-gray-50 rounded-full text-gray-900">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-[10px] md:text-xs font-semibold text-gray-600 leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECTION A: WHY THIS EXISTS (Empathic Approach) */}
            <section className="py-24 bg-orange-50/50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                                Because life <br /> doesn't pause.
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                                We know those days. The meetings you can't skip, the classes that drag on, or just the desire to feel <i>okay</i> without relying on painkillers.
                            </p>
                            <p className="text-gray-900 font-medium">
                                Ease Band isn't a cure. It's a companion. <br />
                                <span className="text-gray-500 font-normal">A gentle way to reclaim your day, naturally.</span>
                            </p>
                        </div>

                        <div className="md:w-1/2 relative">
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-[60px] opacity-40 mix-blend-multiply"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Designed For</h3>
                                <ul className="space-y-4">
                                    {[
                                        "The long work meetings",
                                        "University lectures",
                                        "Travel days",
                                        "Quiet evenings at home"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform"></div>
                                            <span className="text-gray-700 font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-100 text-[10px] text-gray-400 leading-relaxed italic">
                                    Note: Ease Band provides symptom relief for menstrual cramps. It is not a medical treatment for conditions like Endometriosis.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION B: KEY BENEFITS (Clean, No-Box Design) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Relief that fits your rhythm.</h2>
                        <p className="text-gray-500 font-light">Engineered to work around your schedule, not the other way around.</p>
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
                                <span className="text-xs font-bold tracking-widest text-[#e5e5e5] group-hover:text-black transition-colors duration-500">0{i + 1}</span>
                                <h3 className="text-3xl font-serif text-gray-900">{b.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION C: HOW IT WORKS */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-16">Simple as 1, 2, 3.</h2>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-white/20 -z-0" />

                        {[
                            { step: "01", title: "Strap It On", desc: "Adjust the flexible band for a snug fit around your waist." },
                            { step: "02", title: "Power Up", desc: "Long press to start. Select your preferred heat & massage mode." },
                            { step: "03", title: "Live Free", desc: "Go about your day while the warmth melts the tension away." }
                        ].map((s, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-3xl font-serif italic mb-6 shadow-2xl shadow-blue-900/20">
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-medium mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-sm max-w-xs">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION D: PROOF / TRUST */}
            <section className="py-24 bg-blue-50/50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="flex justify-center text-yellow-500 mb-6 gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-6">
                        "I used to take leave every month. Now I just take my Ease Band."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-gray-900 text-sm">Priya S.</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Verified Purchase • Bangalore</div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-12">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Secured & Powered By</p>
                        <div className="flex justify-center gap-8 opacity-50 grayscale">
                            {/* Replaced with text placeholders for reliability if SVGs missing */}
                            <span className="font-bold text-xl">Razorpay</span>
                            <span className="font-bold text-xl">UPI</span>
                            <span className="font-bold text-xl">VISA</span>
                            <span className="font-bold text-xl">RuPay</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SECTION E: FINAL CTA (Immersive Anchor) */}
            <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-900/10 blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-7xl font-serif italic text-white/90 leading-tight">
                            "A quiet revolution <br /> <span className="text-white not-italic">for your comfort."</span>
                        </h2>

                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />

                        <p className="text-lg text-gray-400 font-light tracking-wide max-w-xl mx-auto">
                            Join the thousands of women who have already chosen freedom over pain.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <button className="group relative px-12 py-5 bg-white text-black overflow-hidden rounded-none min-w-[280px]">
                                <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-white">
                                    Get Ease Band — ₹1,999
                                </span>
                                <div className="absolute inset-0 bg-[#1a1a1a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </button>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
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
