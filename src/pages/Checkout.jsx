import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, CreditCard, Package, Check, ShieldCheck, Truck, ChevronRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useRazorpay from '../hooks/useRazorpay';
import { createOrder, verifyPayment, validatePincode } from '../services/api';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// ─── Product Config (single product site) ────────────────────────
const PRODUCT = {
    name: 'Ease Band',
    tagline: 'Intelligent Wearable Heating Pad',
    price: 1999,
    originalPrice: 4999,
    image: 'https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic2_vjwyyy.jpg',
    shipping: 0, // Free shipping
};

// ─── Step Indicator ──────────────────────────────────────────────
const StepIndicator = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Address', icon: MapPin },
        { id: 2, label: 'Review', icon: Package },
        { id: 3, label: 'Payment', icon: CreditCard },
    ];

    return (
        <div className="flex items-center justify-center gap-0 mb-12">
            {steps.map((step, idx) => (
                <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                                currentStep > step.id
                                    ? 'bg-[#2D2424] text-white'
                                    : currentStep === step.id
                                    ? 'bg-[#C4956A] text-white shadow-lg shadow-[#C4956A]/30'
                                    : 'bg-[#F2EAE4] text-[#8C7A6B]'
                            }`}
                        >
                            {currentStep > step.id ? (
                                <Check size={16} strokeWidth={2.5} />
                            ) : (
                                <step.icon size={16} />
                            )}
                        </div>
                        <span
                            className={`text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-500 ${
                                currentStep >= step.id ? 'text-[#2D2424]' : 'text-[#8C7A6B]'
                            }`}
                        >
                            {step.label}
                        </span>
                    </div>
                    {idx < steps.length - 1 && (
                        <div className="flex-1 max-w-[80px] h-px mx-3 mb-6">
                            <div
                                className={`h-full transition-all duration-700 ${
                                    currentStep > step.id ? 'bg-[#2D2424]' : 'bg-[#E8CFBA]'
                                }`}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

// ─── Order Summary Sidebar ───────────────────────────────────────
const OrderSummary = ({ product }) => {
    const discount = product.originalPrice - product.price;
    return (
        <div className="bg-[#F2EAE4] rounded-2xl p-6 lg:p-8 h-fit lg:sticky lg:top-28">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C7A6B] mb-6">
                Order Summary
            </h3>

            {/* Product Card */}
            <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F8F4F0] flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-[#2D2424] mb-1">{product.name}</h4>
                    <p className="text-[11px] text-[#8C7A6B] font-light leading-snug">
                        {product.tagline}
                    </p>
                    <p className="text-xs text-[#6B5C50] mt-1.5 font-medium">Qty: 1</p>
                </div>
            </div>

            <div className="border-t border-[#D4B8A0]/30 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-[#6B5C50] font-light">Subtotal</span>
                    <span className="text-[#2D2424]">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#6B5C50] font-light">Discount</span>
                    <span className="text-green-700 font-medium">−₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#6B5C50] font-light">Shipping</span>
                    <span className="text-green-700 font-medium">FREE</span>
                </div>
            </div>

            <div className="border-t border-[#D4B8A0]/30 pt-4 mt-4">
                <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium text-[#2D2424]">Total</span>
                    <div className="text-right">
                        <span className="text-2xl font-bold text-[#2D2424]">
                            ₹{product.price.toLocaleString()}
                        </span>
                        <p className="text-[10px] text-[#8C7A6B] mt-0.5">Incl. of all taxes</p>
                    </div>
                </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 pt-4 border-t border-[#D4B8A0]/30 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-[#6B5C50]">
                    <ShieldCheck size={14} className="text-[#C4956A]" />
                    <span>Secure Razorpay Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#6B5C50]">
                    <Truck size={14} className="text-[#C4956A]" />
                    <span>Free Delivery Across India</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#6B5C50]">
                    <Package size={14} className="text-[#C4956A]" />
                    <span>7-Day Replacement Guarantee</span>
                </div>
            </div>
        </div>
    );
};

// ─── Main Checkout Component ─────────────────────────────────────
const Checkout = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    const { displayRazorpay } = useRazorpay();

    const [currentStep, setCurrentStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isPincodeLooking, setIsPincodeLooking] = useState(false);
    const [pincodeError, setPincodeError] = useState('');
    const [pincodeValid, setPincodeValid] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: { pathname: '/checkout' } } });
        }
    }, [isAuthenticated, navigate]);

    // ─── Address Form State ──────────────────────────────────────
    const [address, setAddress] = useState({
        fullName: user?.name || '',
        phone: '',
        alternatePhone: '',
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        state: '',
        pincode: '',
    });

    // Pre-fill name from user data when it loads
    useEffect(() => {
        if (user?.name && !address.fullName) {
            setAddress((prev) => ({ ...prev, fullName: user.name }));
        }
    }, [user]);

    const handleAddressChange = (e) => {
        const { name, value } = e.target;

        // Clear error for this field
        setFormErrors((prev) => ({ ...prev, [name]: '' }));

        // Phone number: only digits, max 10
        if (name === 'phone' || name === 'alternatePhone') {
            const cleaned = value.replace(/\D/g, '').slice(0, 10);
            setAddress((prev) => ({ ...prev, [name]: cleaned }));
            return;
        }

        // Pincode: only digits, max 6
        if (name === 'pincode') {
            const cleaned = value.replace(/\D/g, '').slice(0, 6);
            setAddress((prev) => ({ ...prev, [name]: cleaned }));
            setPincodeError('');
            setPincodeValid(false);

            // Auto-lookup when 6 digits entered
            if (cleaned.length === 6) {
                lookupPincode(cleaned);
            }
            return;
        }

        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    // ─── Pincode Auto-Lookup ─────────────────────────────────────
    const lookupPincode = async (pincode) => {
        setIsPincodeLooking(true);
        setPincodeError('');
        try {
            // Try our backend first, fallback to public API
            const data = await validatePincode(pincode);
            if (data?.city && data?.state) {
                setAddress((prev) => ({
                    ...prev,
                    city: data.city,
                    state: data.state,
                }));
                setPincodeValid(true);
            } else {
                // Fallback: India Post public API
                await lookupPincodeFallback(pincode);
            }
        } catch {
            // Backend not available, use fallback
            await lookupPincodeFallback(pincode);
        } finally {
            setIsPincodeLooking(false);
        }
    };

    const lookupPincodeFallback = async (pincode) => {
        try {
            const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await res.json();
            if (data?.[0]?.Status === 'Success' && data[0].PostOffice?.length > 0) {
                const po = data[0].PostOffice[0];
                setAddress((prev) => ({
                    ...prev,
                    city: po.District || '',
                    state: po.State || '',
                }));
                setPincodeValid(true);
            } else {
                setPincodeError('Invalid pincode. Please check and try again.');
            }
        } catch {
            setPincodeError('Could not verify pincode. Please enter city & state manually.');
        }
    };

    // ─── Validation ──────────────────────────────────────────────
    const validateAddress = () => {
        const errors = {};
        if (!address.fullName.trim()) errors.fullName = 'Full name is required';
        if (!address.phone || address.phone.length !== 10)
            errors.phone = 'Valid 10-digit phone number required';
        if (!address.addressLine1.trim()) errors.addressLine1 = 'Address is required';
        if (!address.pincode || address.pincode.length !== 6)
            errors.pincode = 'Valid 6-digit pincode required';
        if (!address.city.trim()) errors.city = 'City is required';
        if (!address.state.trim()) errors.state = 'State is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // ─── Step Navigation ─────────────────────────────────────────
    const handleNextStep = () => {
        if (currentStep === 1) {
            if (!validateAddress()) return;
        }
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const handlePrevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    // ─── Payment ─────────────────────────────────────────────────
    const handlePayment = async () => {
        setIsProcessing(true);
        try {
            const orderData = await createOrder(PRODUCT.price);

            await displayRazorpay(
                orderData,
                async (paymentData) => {
                    try {
                        // Include shipping address in verification
                        const verificationResult = await verifyPayment({
                            ...paymentData,
                            shippingAddress: address,
                        });
                        if (verificationResult.success) {
                            // Navigate to a success state
                            navigate('/order-success', {
                                state: {
                                    orderId: verificationResult.orderId || paymentData.razorpay_order_id,
                                    address,
                                },
                            });
                        } else {
                            alert('Payment verification failed. Please contact support.');
                        }
                    } catch (verifyError) {
                        console.error('Verification Error', verifyError);
                        alert('Payment successful but verification failed. Please contact support.');
                    }
                },
                (error) => {
                    console.error('Payment Failed', error);
                    alert(`Payment Failed: ${error.description}`);
                }
            );
        } catch (error) {
            console.error('Transaction Error', error);
            alert('Could not initiate transaction. Please try again later.');
        } finally {
            setIsProcessing(false);
        }
    };

    // ─── Shared Input Component ──────────────────────────────────
    const FormInput = ({ label, name, type = 'text', placeholder, required = false, halfWidth = false, disabled = false, suffix }) => (
        <div className={`group ${halfWidth ? 'flex-1' : 'w-full'}`}>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6B5C50] mb-2 group-focus-within:text-[#C4956A] transition-colors">
                {label} {required && <span className="text-[#C4956A]">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    value={address[name]}
                    onChange={handleAddressChange}
                    disabled={disabled}
                    className={`w-full bg-transparent border-b py-3 text-[#2D2424] placeholder-[#A89888] focus:outline-none transition-all duration-500 font-light ${
                        formErrors[name]
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#8C7A6B]/60 focus:border-[#C4956A]'
                    } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
                    placeholder={placeholder}
                />
                {suffix && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        {suffix}
                    </div>
                )}
            </div>
            {formErrors[name] && (
                <p className="text-[10px] text-red-500 mt-1.5 font-medium">{formErrors[name]}</p>
            )}
        </div>
    );

    // ─── Render Steps ────────────────────────────────────────────
    const renderStep = () => {
        const slideVariants = {
            enter: { x: 30, opacity: 0 },
            center: { x: 0, opacity: 1 },
            exit: { x: -30, opacity: 0 },
        };

        return (
            <AnimatePresence mode="wait">
                {/* ─── STEP 1: Address ─────────────────────── */}
                {currentStep === 1 && (
                    <motion.div
                        key="step-1"
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif text-[#2D2424] mb-2">
                            Shipping Address
                        </h2>
                        <p className="text-sm text-[#8C7A6B] font-light mb-8">
                            Where should we deliver your Ease Band?
                        </p>

                        <div className="space-y-6">
                            <FormInput
                                label="Full Name"
                                name="fullName"
                                placeholder="Full Name"
                                required
                            />
                            <div className="flex gap-6">
                                <FormInput
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    required
                                    halfWidth
                                />
                                <FormInput
                                    label="Alternate Phone"
                                    name="alternatePhone"
                                    type="tel"
                                    placeholder="Optional"
                                    halfWidth
                                />
                            </div>

                            <FormInput
                                label="Address Line 1"
                                name="addressLine1"
                                placeholder="House No, Building, Street"
                                required
                            />
                            <FormInput
                                label="Address Line 2"
                                name="addressLine2"
                                placeholder="Area, Colony (Optional)"
                            />
                            <FormInput
                                label="Landmark"
                                name="landmark"
                                placeholder="Near... (Optional)"
                            />

                            <div className="flex gap-6">
                                <FormInput
                                    label="Pincode"
                                    name="pincode"
                                    placeholder="6-digit pincode"
                                    required
                                    halfWidth
                                    suffix={
                                        isPincodeLooking ? (
                                            <Loader2 size={14} className="animate-spin text-[#C4956A]" />
                                        ) : pincodeValid ? (
                                            <Check size={14} className="text-green-600" />
                                        ) : null
                                    }
                                />
                                <FormInput
                                    label="City"
                                    name="city"
                                    placeholder="City"
                                    required
                                    halfWidth
                                    disabled={isPincodeLooking}
                                />
                            </div>
                            {pincodeError && (
                                <p className="text-[10px] text-amber-600 -mt-3 font-medium">
                                    {pincodeError}
                                </p>
                            )}

                            <FormInput
                                label="State"
                                name="state"
                                placeholder="State"
                                required
                                disabled={isPincodeLooking}
                            />
                        </div>

                        {/* Continue Button */}
                        <div className="mt-10">
                            <button
                                onClick={handleNextStep}
                                className="w-full group relative h-14 border border-[#2D2424] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-transparent"
                            >
                                <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 text-[#2D2424] group-hover:text-white">
                                    Continue to Review
                                    <ChevronRight size={16} />
                                </span>
                                <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* ─── STEP 2: Review ──────────────────────── */}
                {currentStep === 2 && (
                    <motion.div
                        key="step-2"
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif text-[#2D2424] mb-2">
                            Review Your Order
                        </h2>
                        <p className="text-sm text-[#8C7A6B] font-light mb-8">
                            Please confirm the details before proceeding to payment.
                        </p>

                        {/* Shipping Details Card */}
                        <div className="bg-[#F2EAE4] rounded-xl p-6 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C7A6B]">
                                    Delivering To
                                </h3>
                                <button
                                    onClick={() => setCurrentStep(1)}
                                    className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#C4956A] hover:text-[#2D2424] transition-colors cursor-pointer"
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-[#2D2424]">
                                    {address.fullName}
                                </p>
                                <p className="text-sm text-[#6B5C50] font-light">
                                    {address.addressLine1}
                                    {address.addressLine2 && `, ${address.addressLine2}`}
                                </p>
                                {address.landmark && (
                                    <p className="text-sm text-[#6B5C50] font-light">
                                        Near {address.landmark}
                                    </p>
                                )}
                                <p className="text-sm text-[#6B5C50] font-light">
                                    {address.city}, {address.state} — {address.pincode}
                                </p>
                                <p className="text-sm text-[#6B5C50] font-light">
                                    Phone: {address.phone}
                                    {address.alternatePhone && ` / ${address.alternatePhone}`}
                                </p>
                            </div>
                        </div>

                        {/* Product Details Card */}
                        <div className="bg-[#F2EAE4] rounded-xl p-6 mb-6">
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C7A6B] mb-4">
                                Product
                            </h3>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={PRODUCT.image}
                                        alt={PRODUCT.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-[#2D2424]">{PRODUCT.name}</p>
                                    <p className="text-[11px] text-[#8C7A6B] font-light">
                                        {PRODUCT.tagline}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-[#2D2424]">
                                        ₹{PRODUCT.price.toLocaleString()}
                                    </p>
                                    <p className="text-[10px] text-[#8C7A6B] line-through">
                                        ₹{PRODUCT.originalPrice.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Estimated Delivery */}
                        <div className="bg-[#E8CFBA]/20 rounded-xl p-4 mb-8 flex items-center gap-3">
                            <Truck size={18} className="text-[#C4956A] flex-shrink-0" />
                            <div>
                                <p className="text-xs font-medium text-[#2D2424]">
                                    Estimated Delivery: 5–7 Business Days
                                </p>
                                <p className="text-[10px] text-[#8C7A6B] font-light">
                                    Free standard shipping across India
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrevStep}
                                className="flex items-center gap-2 px-6 py-4 border border-[#8C7A6B]/40 text-[#6B5C50] rounded-lg hover:border-[#2D2424] hover:text-[#2D2424] transition-all text-xs font-medium tracking-[0.15em] uppercase cursor-pointer"
                            >
                                <ArrowLeft size={14} />
                                Back
                            </button>
                            <button
                                onClick={handleNextStep}
                                className="flex-1 group relative h-14 border border-[#2D2424] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-transparent"
                            >
                                <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 text-[#2D2424] group-hover:text-white">
                                    Proceed to Pay
                                    <ChevronRight size={16} />
                                </span>
                                <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* ─── STEP 3: Payment ─────────────────────── */}
                {currentStep === 3 && (
                    <motion.div
                        key="step-3"
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif text-[#2D2424] mb-2">
                            Complete Payment
                        </h2>
                        <p className="text-sm text-[#8C7A6B] font-light mb-8">
                            You'll be redirected to Razorpay's secure checkout.
                        </p>

                        {/* Final Summary */}
                        <div className="bg-[#F2EAE4] rounded-xl p-6 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C7A6B]">
                                    Amount to Pay
                                </span>
                                <span className="text-3xl font-bold text-[#2D2424]">
                                    ₹{PRODUCT.price.toLocaleString()}
                                </span>
                            </div>
                            <div className="space-y-2 text-[11px] text-[#6B5C50]">
                                <div className="flex items-center gap-2">
                                    <Check size={12} className="text-[#C4956A]" />
                                    UPI, Cards, Wallets, Net Banking accepted
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={12} className="text-[#C4956A]" />
                                    256-bit SSL encrypted transaction
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={12} className="text-[#C4956A]" />
                                    Instant confirmation via email
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrevStep}
                                disabled={isProcessing}
                                className="flex items-center gap-2 px-6 py-4 border border-[#8C7A6B]/40 text-[#6B5C50] rounded-lg hover:border-[#2D2424] hover:text-[#2D2424] transition-all text-xs font-medium tracking-[0.15em] uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ArrowLeft size={14} />
                                Back
                            </button>
                            <button
                                onClick={handlePayment}
                                disabled={isProcessing}
                                className={`flex-1 group relative h-14 border border-[#2D2424] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                                    isProcessing ? 'bg-[#2D2424] cursor-wait' : 'bg-transparent'
                                }`}
                            >
                                <span
                                    className={`relative z-10 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 ${
                                        isProcessing
                                            ? 'text-white'
                                            : 'text-[#2D2424] group-hover:text-white'
                                    }`}
                                >
                                    {isProcessing && (
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                    )}
                                    {isProcessing ? 'PROCESSING...' : `PAY ₹${PRODUCT.price.toLocaleString()}`}
                                </span>
                                {!isProcessing && (
                                    <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                )}
                            </button>
                        </div>

                        <p className="text-center text-[10px] text-[#8C7A6B] mt-4 font-medium uppercase tracking-wider">
                            Safe & Secure Checkout via Razorpay
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    if (!isAuthenticated) return null;

    return (
        <div className="bg-[#F8F4F0] min-h-screen text-[#2D2424] font-sans selection:bg-[#C4956A] selection:text-white">
            <SEO
                title="Checkout | Ease Band"
                description="Complete your order for the Ease Band. Secure checkout with free shipping across India."
                url="/checkout"
            />

            <section className="pt-12 pb-24 md:pt-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Back to Shop */}
                    <button
                        onClick={() => navigate('/shop')}
                        className="flex items-center gap-2 text-[#8C7A6B] hover:text-[#2D2424] transition-colors text-xs font-medium tracking-[0.15em] uppercase mb-8 cursor-pointer"
                    >
                        <ArrowLeft size={14} />
                        Back to Shop
                    </button>

                    {/* Step Indicator */}
                    <StepIndicator currentStep={currentStep} />

                    {/* Main Layout */}
                    <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
                        {/* Left: Form Steps */}
                        <div className="flex-1 max-w-2xl">{renderStep()}</div>

                        {/* Right: Order Summary */}
                        <div className="lg:w-[340px]">
                            <OrderSummary product={PRODUCT} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Checkout;
