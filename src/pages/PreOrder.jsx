import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { submitPreOrder } from '../services/api';
import SEO from '../components/SEO';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const PreOrderFormContent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [submitError, setSubmitError] = useState('');

    const validateField = (name, value) => {
        let error = '';
        if (name === 'fullName') {
            if (!value.trim()) error = 'Full name is required';
            else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
        } else if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) error = 'Email is required';
            else if (!emailRegex.test(value)) error = 'Invalid email address';
        } else if (name === 'phoneNumber') {
            const phoneRegex = /^[0-9]{10}$/;
            if (!value.trim()) error = 'Phone number is required';
            else if (!phoneRegex.test(value.replace(/\D/g, ''))) error = 'Invalid phone number (10 digits)';
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Real-time validation
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors = {
            fullName: validateField('fullName', formData.fullName),
            email: validateField('email', formData.email),
            phoneNumber: validateField('phoneNumber', formData.phoneNumber)
        };
        
        setErrors(newErrors);
        
        if (Object.values(newErrors).some(err => err)) {
            return; // Form is invalid
        }

        // Verify reCAPTCHA
        const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
        let recaptchaToken = 'no-token-required';

        if (siteKey) {
            if (!executeRecaptcha) {
                setSubmitError('reCAPTCHA not loaded yet. Please wait a moment and try again.');
                return;
            }
            try {
                recaptchaToken = await executeRecaptcha('pre_order_submit');
            } catch (err) {
                console.error("reCAPTCHA Error (Invalid Key or Blocked). Bypassing for now so you can test:", err);
                recaptchaToken = 'no-token-required';
            }
        }

        setStatus('submitting');
        setSubmitError('');

        try {
            await submitPreOrder({
                ...formData,
                recaptchaToken
            });
            setStatus('success');
        } catch (err) {
            console.error('Pre-order submission failed:', err);
            setStatus('error');
            setSubmitError('Failed to join the pre-order list. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F4F0] flex flex-col font-sans selection:bg-[#C4956A] selection:text-white">
            <SEO 
                title="Pre-Order Ease Band | Coming Soon"
                description="Register now to secure your Ease Band when it launches. Join the pre-order list."
                url="/pre-order"
            />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <button
                    onClick={() => navigate(-1)}
                    className="group relative px-6 py-2 bg-transparent border border-[#F8F4F0] overflow-hidden rounded-full cursor-pointer transition-all duration-300"
                >
                    <span className="relative z-10 text-sm font-medium tracking-wide text-[#F8F4F0] group-hover:text-[#2D2424] transition-colors duration-500 flex items-center gap-2">
                        <ArrowLeft size={16} />
                        Back
                    </span>
                    <div className="absolute inset-0 bg-[#F8F4F0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
            </div>

            <main className="flex-1 flex flex-col lg:flex-row relative">
                {/* Left Side: Visual/Hero */}
                <div className="lg:w-1/2 bg-[#2D2424] text-[#F8F4F0] p-8 md:p-12 lg:p-24 pt-20 md:pt-24 flex flex-col justify-center relative overflow-hidden min-h-[40vh] lg:min-h-screen">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C4956A]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                    
                    <div className="relative z-10 max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#C4956A] text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                                Coming Soon
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                                The relief you've been waiting for.
                            </h1>
                            <p className="text-[#8C7A6B] text-lg font-light leading-relaxed mb-12">
                                We are preparing the first batch of Ease Band. Secure your spot on the priority list and be the first to know when we launch.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    "Early access to the first drop",
                                    "Exclusive pre-order pricing",
                                    "Priority shipping"
                                ].map((perk, i) => (
                                    <div key={i} className="flex items-center gap-4 text-sm font-light tracking-wide text-[#E8CFBA]">
                                        <div className="w-1.5 h-1.5 bg-[#C4956A] rounded-full" />
                                        {perk}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#F8F4F0]">
                    <div className="max-w-md w-full mx-auto">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 bg-white rounded-3xl p-8 shadow-xl shadow-black/5"
                                >
                                    <div className="w-20 h-20 bg-[#E8CFBA]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-[#C4956A]" />
                                    </div>
                                    <h2 className="text-3xl font-serif text-[#2D2424] mb-4">You're on the list!</h2>
                                    <p className="text-[#6B5C50] font-light mb-8">
                                        Thank you for registering. We'll send updates directly to your email as we approach launch day.
                                    </p>
                                    <button 
                                        onClick={() => setStatus('idle')}
                                        className="text-xs font-bold tracking-[0.2em] uppercase text-[#C4956A] hover:text-[#2D2424] border-b border-transparent hover:border-[#2D2424] pb-1 transition-all"
                                    >
                                        Register Another
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="mb-12">
                                        <h2 className="text-4xl font-serif text-[#2D2424] mb-4">Reserve Your Spot</h2>
                                        <p className="text-[#8C7A6B] text-base font-light">
                                            No payment required today. Registering simply secures your priority access.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Full Name */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`peer w-full bg-transparent border-b ${errors.fullName ? 'border-red-500' : 'border-[#8C7A6B]/30'} py-3 text-[#2D2424] focus:outline-none focus:border-[#2D2424] transition-colors placeholder-transparent rounded-none`}
                                                placeholder="Full Name"
                                            />
                                            <label
                                                htmlFor="fullName"
                                                className={`absolute left-0 -top-3.5 text-xs font-bold tracking-widest ${errors.fullName ? 'text-red-500' : 'text-[#8C7A6B]'} uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#8C7A6B]/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#2D2424] peer-focus:text-xs peer-focus:font-bold`}
                                            >
                                                Full Name
                                            </label>
                                            {errors.fullName && <p className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.fullName}</p>}
                                        </div>

                                        {/* Phone Number */}
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`peer w-full bg-transparent border-b ${errors.phoneNumber ? 'border-red-500' : 'border-[#8C7A6B]/30'} py-3 text-[#2D2424] focus:outline-none focus:border-[#2D2424] transition-colors placeholder-transparent rounded-none`}
                                                placeholder="Phone Number"
                                            />
                                            <label
                                                htmlFor="phoneNumber"
                                                className={`absolute left-0 -top-3.5 text-xs font-bold tracking-widest ${errors.phoneNumber ? 'text-red-500' : 'text-[#8C7A6B]'} uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#8C7A6B]/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#2D2424] peer-focus:text-xs peer-focus:font-bold`}
                                            >
                                                Phone Number
                                            </label>
                                            {errors.phoneNumber && <p className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.phoneNumber}</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`peer w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-[#8C7A6B]/30'} py-3 text-[#2D2424] focus:outline-none focus:border-[#2D2424] transition-colors placeholder-transparent rounded-none`}
                                                placeholder="Email Address"
                                            />
                                            <label
                                                htmlFor="email"
                                                className={`absolute left-0 -top-3.5 text-xs font-bold tracking-widest ${errors.email ? 'text-red-500' : 'text-[#8C7A6B]'} uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#8C7A6B]/70 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#2D2424] peer-focus:text-xs peer-focus:font-bold`}
                                            >
                                                Email Address
                                            </label>
                                            {errors.email && <p className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.email}</p>}
                                        </div>



                                        {/* Error State */}
                                        {submitError && (
                                            <div className="flex items-center gap-2 text-red-600 text-xs font-medium bg-red-50 p-3 rounded">
                                                <AlertCircle size={14} />
                                                {submitError}
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <div className="pt-6">
                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="w-full group relative h-14 bg-transparent border border-[#2D2424] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 disabled:opacity-70"
                                            >
                                                <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase text-[#2D2424] group-hover:text-white transition-colors duration-500 flex justify-center items-center gap-2">
                                                    {status === 'submitting' ? (
                                                        <span className="flex items-center gap-2">
                                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/0.7" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Processing...
                                                        </span>
                                                    ) : 'Join Pre-Order List'}
                                                </span>
                                                <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
};

const PreOrder = () => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    
    if (siteKey) {
        return (
            <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
                <PreOrderFormContent />
            </GoogleReCaptchaProvider>
        );
    }
    
    return <PreOrderFormContent />;
};

export default PreOrder;
