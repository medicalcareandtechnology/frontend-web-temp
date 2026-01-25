import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            console.log('Register attempt', { name, email, password });
        }, 2000);
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black">
            <Navbar />

            <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
                {/* Background Elements - Subtle and Premium */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="text-center mb-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl font-light tracking-[0.3em] font-serif mb-4"
                        >
                            MCT
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-xs font-light tracking-[0.4em] uppercase text-gray-400"
                        >
                            Create Account
                        </motion.p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="group">
                                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-500 font-light"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-500 font-light"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-500 font-light"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full group relative px-8 py-4 border border-white overflow-hidden bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 text-xs font-medium tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-black text-white flex justify-center items-center gap-2">
                                    {isLoading ? 'Creating Account...' : 'Create Account'}
                                </span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </button>
                        </div>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10"></span>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-[#0a0a0a] px-2 text-gray-500 tracking-widest uppercase text-[10px]">Or continue with</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full group relative px-8 py-4 border border-white/30 overflow-hidden bg-transparent hover:border-white transition-colors duration-300 cursor-pointer"
                            onClick={() => console.log('Google signup clicked')}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-300 group-hover:text-white transition-colors duration-300">
                                    Google
                                </span>
                            </div>
                        </button>

                        <div className="text-center mt-8">
                            <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                                Already have an account? {' '}
                                <Link to="/login" className="text-white border-b border-white/30 hover:border-white pb-0.5 transition-all">
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
