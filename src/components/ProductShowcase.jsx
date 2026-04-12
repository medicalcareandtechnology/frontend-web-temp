import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ProductShowcase = () => {
    // 3D Tilt Effect State
    const x = useSpring(0, { stiffness: 300, damping: 30 });
    const y = useSpring(0, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate rotation ranging from -15 to 15 degrees
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

    return (
        <section id="product-showcase" className="py-32 bg-white relative overflow-visible">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16 relative">

                    {/* Left Side: Sticky 3D Tilt Image */}
                    <div className="w-full md:w-1/2 md:sticky md:top-32 relative perspective-1000 z-20">
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-full aspect-square md:aspect-[4/5] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8 cursor-crosshair shadow-2xl shadow-blue-900/5 rounded-2xl"
                        >
                            <motion.img
                                style={{ transform: "translateZ(50px)" }} // Pop out effect
                                src="https://res.cloudinary.com/dkganhypn/image/upload/v1766934940/pic1_mrjyiv.jpg"
                                alt="Ease Band Device"
                                className="w-full h-full object-cover rounded-xl pointer-events-none"
                            />

                            {/* Decorative Elements popping out */}
                            <motion.div style={{ transform: "translateZ(30px)" }} className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-500/20" />
                            <motion.div style={{ transform: "translateZ(30px)" }} className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-blue-500/20" />

                            {/* Hover instruction */}
                            <motion.div style={{ transform: "translateZ(40px)" }} className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-500 opacity-50 mix-blend-multiply pointer-events-none">
                                Hover to explore
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Scrolling Content Blocks */}
                    <div className="w-full md:w-1/2 space-y-32 py-12 md:py-48 flex flex-col justify-start z-10 lg:pl-12">

                        {/* Content Block 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <div className="h-px w-24 bg-blue-500 mb-6 origin-left" />
                                <h2 className="text-5xl md:text-6xl font-light text-black mb-4 leading-tight tracking-tight">
                                    Clinical Relief,
                                    <span className="block font-serif italic text-blue-600">Elegant Design</span>
                                </h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                                Advanced heat therapy and targeted massage work together to ease menstrual cramps naturally. Medical-grade effectiveness meets thoughtful design—because managing pain shouldn't compromise your day.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    "Ultra-thin, discreet profile",
                                    "Soft, breathable materials",
                                    "Precision-fit design",
                                    "Intuitive one-touch control"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 text-black">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <span className="text-sm tracking-wide uppercase font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
