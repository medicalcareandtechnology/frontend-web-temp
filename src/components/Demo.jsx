
import { motion } from 'framer-motion';

const Demo = () => {
    // Convert Google Drive link to embeddable format
    const embedUrl = "https://drive.google.com/file/d/1NMb1-4J8cMx5WR1xMqITjSC_tq_z6jVA/preview";

    return (
        <section id="demo" className="py-24 bg-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-black mb-4 font-orbitron"
                    >
                        NeoARM in Action
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 shadow-2xl shadow-blue-600/10">
                        {/* Video Container */}
                        <div className="relative aspect-video">
                            <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                allow="autoplay"
                                allowFullScreen
                                title="MCT Demo Video"
                            />
                        </div>

                        {/* Decorative Border Glow */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/10 pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wave Transition (White to Dark) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#0a0a0a]"></path>
                </svg>
            </div>
        </section>
    );
};

export default Demo;
