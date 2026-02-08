"use client";

import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";

const technologies = [
    {
        title: "Hidden Hinge System",
        description: "Our patented 3D-adjustable hinge allows the hatch to open effortlessly even with heavy stone or tile infill. It remains completely invisible when closed.",
        icon: "🏗️",
    },
    {
        title: "Gas Strut Assist",
        description: "Engineered gas springs are calibrated to the exact weight of your filled hatch, ensuring smooth, one-handed opening and soft-closing safety.",
        icon: "⚙️",
    },
    {
        title: "Double Seal Technology",
        description: "An EPDM rubber seal combined with a magnetic strip ensures the hatch is hermetically sealed, preventing odors, moisture, and dust from passing through.",
        icon: "🛡️",
    },
    {
        title: "Laser-Cut Precision",
        description: "All steel components are cut using high-precision fiber lasers, ensuring tolerance of less than 0.5mm for a seamless fit in your floor.",
        icon: "✨",
    },
    {
        title: "Load Bearing Structure",
        description: "Reinforced steel frames are engineered to support loads up to 30kN, making them suitable for garages, showrooms, and high-traffic public areas.",
        icon: "💪",
    },
    {
        title: "Acoustic Insulation",
        description: "Optional multilayer soundproofing materials can be integrated to reduce noise transfer between floors, perfect for wine cellars and home theaters.",
        icon: "🔇",
    },
];

export function Technologies() {
    return (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Safety & Quality</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                            Reliability Confirmed by Engineering Tests
                        </h2>
                        <p className="text-white/60 mb-10 text-lg leading-relaxed">
                            We don't just build hatches; we engineer safety systems. Each product undergoes rigorous testing to ensure it meets the highest standards of durability and load-bearing capacity.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {technologies.map((tech, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-4xl mb-4">{tech.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 font-heading">{tech.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {tech.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-800">
                            {/* Placeholder for Video/Schematic */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <span className="text-lg uppercase tracking-widest border border-white/20 px-6 py-3 rounded">
                                    Technology Video / Schematic
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
