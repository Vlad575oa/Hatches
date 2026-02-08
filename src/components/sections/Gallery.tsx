"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Parquet", "Tile", "Glass", "Backlit", "Commercial"];

const projects = [
    {
        id: 1,
        category: "Parquet",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        category: "Tile",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        category: "Glass",
        image: "https://images.unsplash.com/photo-1597505436329-a35c5936838a?q=80&w=2669&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-2",
    },
    {
        id: 4,
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 5,
        category: "Parquet",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 6,
        category: "Backlit",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-1",
    },
];

export function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section className="py-24 bg-neutral-900 text-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold">Realized Projects</h2>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === cat
                                        ? "bg-white text-black font-bold"
                                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`relative group rounded-xl overflow-hidden cursor-pointer bg-neutral-800 ${project.className}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-bold text-lg">{project.category} Hatch</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </section>
    );
}
