import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TeamSection = ({ title, members, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="mb-24 last:mb-0"
    >
        <div className="flex items-center gap-4 mb-12">
            <h3 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white/90 font-serif">
                {title}
            </h3>
            <div className="h-px flex-grow bg-gradient-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
                <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: delay + index * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-square mb-6 overflow-hidden bg-white/5 border border-white/10 rounded-sm">
                        {/* Placeholder for Image - Using Initials */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-amber-400/50 transition-colors duration-500">
                            <span className="text-4xl font-serif tracking-widest opacity-30">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <h4 className="text-lg font-light tracking-[0.1em] text-white group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                    </h4>
                    {member.role && (
                        <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mt-1">
                            {member.role}
                        </p>
                    )}
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const AboutTeam = () => {
    const technicalTeam = [
        { name: "Rohit Kumar", role: "Technical Lead" },
        { name: "Sudhanshu", role: "Developer" }
    ];

    const rdTeam = [
        { name: "Ritika", role: "Researcher" },
        { name: "Prapti", role: "Researcher" },
        { name: "Deva", role: "Developer" },
        { name: "Sneha", role: "Analyst" }
    ];

    const itTeam = [
        { name: "Subham", role: "Systems Admin" },
        { name: "Manvendra", role: "Network Engineer" },
        { name: "Priya", role: "Support Specialist" }
    ];

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-0 w-full h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] font-serif mb-6">
                            The Team
                        </h1>
                        <p className="text-sm md:text-base text-gray-400 font-light tracking-[0.2em] uppercase max-w-2xl mx-auto leading-relaxed">
                            The minds behind ease band. Dedicated to innovation, designed for relief.
                        </p>
                    </motion.div>

                    <TeamSection title="Technical Unit" members={technicalTeam} delay={0.2} />
                    <TeamSection title="Research & Development Unit" members={rdTeam} delay={0.4} />
                    <TeamSection title="IT Unit" members={itTeam} delay={0.6} />

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutTeam;
