"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const products = [
    {
        title: "Hidden Tile Hatches",
        description: "Perfectly integrated into ceramic floors. Invisible access panels for seamless interiors.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Hidden Wood Hatches",
        description: "Invisible integration into parquet and solid wood flooring. Preserves the natural wood pattern.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop",
    },
    {
        title: "Glass Floor Hatches",
        description: "Decorative and functional solutions. Toughened glass for wine cellars and display areas.",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2574&auto=format&fit=crop",
    },
    {
        title: "Reinforced Hatches",
        description: "Heavy-duty solutions for garages and high-traffic zones. Vehicle load capable.",
        image: "https://images.unsplash.com/photo-1581094794329-cd136ce4bf58?q=80&w=2664&auto=format&fit=crop",
    },
];

export function ProductTypes() {
    return (
        <section className="py-24 bg-white text-black">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Product Line</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Choose a Solution for Your Project</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.title} className="group relative h-[400px] overflow-hidden rounded-xl bg-gray-100">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-heading font-bold mb-3">{product.title}</h3>
                                <p className="text-white/80 mb-6 max-w-md">{product.description}</p>
                                <Button variant="outline" className="border-white/30 hover:bg-white hover:text-black group-hover:translate-x-2 transition-all duration-300">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
