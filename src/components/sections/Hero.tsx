"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-neutral-900 text-white">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                    alt="Premium Floor Hatch in Luxury Interior"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            <Container className="relative z-20 h-full flex flex-col justify-center items-start pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <span className="inline-block py-1 px-3 mb-6 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
                        Premium Architectural Solutions
                    </span>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
                        Premium Floor Hatches <br />
                        <span className="text-white/80 font-serif italic font-normal">Custom Designed</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light">
                        Invisible access to engineering systems, wine cellars, and technical spaces
                        without compromising your interior design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="premium" className="uppercase tracking-widest font-bold text-sm h-14 px-8 w-full sm:w-auto">
                            Get a Calculation
                        </Button>
                        <Button size="lg" variant="outline" className="uppercase tracking-widest font-bold text-sm h-14 px-8 w-full sm:w-auto hover:bg-white hover:text-black transition-all">
                            View Projects
                        </Button>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-8 text-white/60 text-sm font-medium tracking-wide">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Custom Production
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Any Dimensions
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> International Delivery
                        </div>
                    </div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
