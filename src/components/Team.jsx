import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const leaders = [
    {
        name: "Rohit Kumar Shakya",
        role: "Founder & CEO",
        image: "https://res.cloudinary.com/dkganhypn/image/upload/v1767106111/Rohit_pnspxe.jpg",
        linkedin: "#"
    },
    {
        name: "Ritika Goswami",
        role: "Co-Founder & COO",
        image: "https://res.cloudinary.com/dkganhypn/image/upload/v1767106119/Ritika_zwca3r.jpg",
        linkedin: "#",
        imageClass: "scale-[1.6] origin-[center_35%] group-hover:scale-[1.7]"
    }
];

const teamMembers = [
    {
        name: "Dr. Ananya Rao",
        role: "Chief Medical Officer",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2798&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "James Chen",
        role: "CTO & VP Engineering",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "Rahul Mehta",
        role: "Lead Hardware Engineer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "Subham Ghosh",
        role: "Frontend & Product Experience",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "Elena Rodriguez",
        role: "Head of Manufacturing",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
        linkedin: "#"
    },
    {
        name: "David Kim",
        role: "Industrial Design Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
        linkedin: "#"
    }
];

const MemberCard = ({ member, isLeader = false }) => (
    <div className="group relative">
        {/* Image Container */}
        <div className={`overflow-hidden mb-6 ${isLeader ? 'aspect-[3/4]' : 'aspect-[4/5] '}`}>
            <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105 ${member.imageClass || 'object-center'}`}
            />
        </div>

        {/* Info Container - Removed boxy look for cleaner text */}
        <div className="text-left">
            <h3 className={`${isLeader ? 'text-3xl' : 'text-xl'} text-white font-light tracking-wide mb-2 transition-colors duration-300`}>
                {member.name}
            </h3>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors duration-500">
                <p className={`${isLeader ? 'text-sm' : 'text-xs'} text-gray-400 tracking-[0.2em] uppercase`}>
                    {member.role}
                </p>

                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-white transition-colors duration-300"
                >
                    <Linkedin size={isLeader ? 20 : 16} strokeWidth={1.5} />
                </a>
            </div>
        </div>
    </div>
);

const Team = () => {
    return (
        <section className="py-24 bg-[#0a0a0a]">
            {/* Leadership Section */}
            <div className="container mx-auto px-6 md:px-12 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 text-sm tracking-[0.2em] uppercase block mb-4">Leadership</span>
                    <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide font-serif">
                        Vision & Strategy
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-5xl mx-auto">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <MemberCard member={leader} isLeader={true} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Core Team Section */}
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-light text-gray-400 tracking-wide">
                        The Core Team
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <MemberCard member={member} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
