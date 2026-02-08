"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Problem() {
    return (
        <section className="py-24 bg-white text-black overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Ordinary hatches ruin the interior
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Standard technical hatches look rough, disrupt floor aesthetics, and limit design decisions.
                            We create hatches that become part of the interior and remain practically invisible.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
                                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                                    Others
                                </div>
                                {/* Placeholder for "Bad" Hatch */}
                                <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-500">
                                    Standard Hatch Image
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] bg-gray-900 rounded-lg overflow-hidden">
                                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">
                                    Ferrum Decor
                                </div>
                                {/* Placeholder for "Good" Hatch */}
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/50">
                                    Premium Hatch Image
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
