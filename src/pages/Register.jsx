import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, loading } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const result = await register(name, email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.error || 'Failed to register');
        }
    };

    return (
        <div className="bg-[#F8F4F0] min-h-screen text-[#2D2424] selection:bg-[#C4956A] selection:text-white">
            <SEO
                title="Create Account"
                description="Join MCT to access premium menstrual relief products. Create your account today."
                url="/register"
            />
            <Navbar useDarkText={true} />

            <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
                {/* Warm Ambient Glows — very subtle */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#E8CFBA]/30 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-[#D4B8A0]/20 rounded-full blur-[140px]" />
                </div>

                <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="text-center mb-10">
                        <motion.h2
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl font-light tracking-[0.3em] font-serif mb-4 text-[#2D2424]"
                        >
                            MCT
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xs font-light tracking-[0.4em] uppercase text-[#6B5C50]"
                        >
                            Create Account
                        </motion.p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-[#F5E1E1] border border-[#D4A0A0]/40 text-[#7A2E2E] text-xs text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="group">
                                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6B5C50] mb-2 group-focus-within:text-[#C4956A] transition-colors">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent border-b border-[#8C7A6B]/60 py-3 text-[#2D2424] placeholder-[#A89888] focus:outline-none focus:border-[#C4956A] transition-all duration-500 font-light"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6B5C50] mb-2 group-focus-within:text-[#C4956A] transition-colors">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent border-b border-[#8C7A6B]/60 py-3 text-[#2D2424] placeholder-[#A89888] focus:outline-none focus:border-[#C4956A] transition-all duration-500 font-light"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6B5C50] mb-2 group-focus-within:text-[#C4956A] transition-colors">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent border-b border-[#8C7A6B]/60 py-3 text-[#2D2424] placeholder-[#A89888] focus:outline-none focus:border-[#C4956A] transition-all duration-500 font-light"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full group relative px-8 py-4 border border-[#2D2424] overflow-hidden cursor-pointer transition-all duration-300 ${loading ? 'bg-[#2D2424] cursor-wait' : 'bg-transparent'}`}
                            >
                                <span className={`relative z-10 text-xs font-medium tracking-[0.3em] uppercase transition-colors duration-500 flex justify-center items-center gap-3 ${loading ? 'text-white' : 'text-[#2D2424] group-hover:text-white'}`}>
                                    {loading && (
                                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </span>
                                {!loading && <div className="absolute inset-0 bg-[#2D2424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />}
                            </button>
                        </div>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-[#8C7A6B]/25"></span>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-[#F8F4F0] px-2 text-[#6B5C50] tracking-widest uppercase text-[10px]">Or continue with</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full group relative px-8 py-4 border border-[#8C7A6B]/40 overflow-hidden bg-transparent hover:border-[#2D2424]/60 transition-colors duration-300 cursor-pointer"
                            onClick={() => console.log('Google signup clicked')}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#6B5C50] group-hover:text-[#2D2424] transition-colors duration-300">
                                    Google
                                </span>
                            </div>
                        </button>

                        <div className="text-center mt-8">
                            <p className="text-[10px] tracking-[0.2em] text-[#6B5C50] uppercase">
                                Already have an account? {' '}
                                <Link to="/login" className="text-[#C4956A] border-b border-[#C4956A]/30 hover:border-[#C4956A] pb-0.5 transition-all">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
