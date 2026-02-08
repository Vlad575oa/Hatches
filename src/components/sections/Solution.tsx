"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Settings, Weight, Layers, Gem } from "lucide-react";

const features = [
    {
        title: "Individual Production",
        description: "Every hatch is created for a specific project, size, and floor finish.",
        icon: Settings,
    },
    {
        title: "High Load Capacity",
        description: "The structure withstands intense loads, including vehicle traffic.",
        icon: Weight,
    },
    {
        title: "Full Integration",
        description: "Tile, wood, stone, or glass — the hatch becomes part of the floor.",
        icon: Layers,
    },
    {
        title: "Premium Materials",
        description: "Tempered glass, stainless steel, and reinforced structures.",
        icon: Gem,
    },
];

export function Solution() {
    return (
        <section className="py-24 bg-neutral-900 text-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Engineering & Design <br /> Combined
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-800/50 p-8 rounded-xl border border-white/5 hover:bg-neutral-800 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
