import React from 'react';
import { motion } from 'framer-motion';

export const PageSkeleton = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white flex flex-col pt-32 pb-20 px-6 md:px-12 relative overflow-hidden animate-pulse">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10 space-y-12">
                {/* Header Skeleton */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="h-12 w-48 bg-white/10 rounded-md" />
                    <div className="h-4 w-64 bg-white/5 rounded-md" />
                    <div className="h-3 w-36 bg-white/5 rounded-md" />
                </div>

                {/* Divider Line */}
                <div className="h-px bg-white/10 w-full" />

                {/* Content Block Skeletons */}
                <div className="space-y-10">
                    {[1, 2, 3].map((idx) => (
                        <div key={idx} className="space-y-4">
                            <div className="h-6 w-1/3 bg-white/10 rounded-md" />
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-white/5 rounded-md" />
                                <div className="h-4 w-5/6 bg-white/5 rounded-md" />
                                <div className="h-4 w-4/5 bg-white/5 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const CardGridSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto animate-pulse">
            {[1, 2, 3].map((idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-sm p-4 space-y-4">
                    <div className="aspect-square w-full bg-white/10 rounded-sm" />
                    <div className="h-5 w-2/3 bg-white/10 rounded-md" />
                    <div className="h-3 w-1/2 bg-white/5 rounded-md" />
                </div>
            ))}
        </div>
    );
};
