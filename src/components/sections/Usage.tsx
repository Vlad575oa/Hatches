"use client";

import { Container } from "@/components/ui/Container";

const areas = [
    {
        title: "Private Houses",
        image: "https://images.unsplash.com/photo-1600596542815-3ad196bb7a36?q=80&w=2672&auto=format&fit=crop",
        size: "large",
    },
    {
        title: "Wine Cellars",
        image: "https://images.unsplash.com/photo-1597505436329-a35c5936838a?q=80&w=2669&auto=format&fit=crop",
        size: "small",
    },
    {
        title: "SPA Zones",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2667&auto=format&fit=crop",
        size: "small",
    },
    {
        title: "Pools",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2670&auto=format&fit=crop",
        size: "medium",
    },
    {
        title: "Technical Rooms",
        image: "https://images.unsplash.com/photo-1581094794329-cd136ce4bf58?q=80&w=2664&auto=format&fit=crop",
        size: "medium",
    },
    {
        title: "Restaurants & Hotels",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
        size: "small",
    },
    {
        title: "Architectural Projects",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
        size: "small",
    },
];

export function Usage() {
    return (
        <section className="py-24 bg-white text-black">
            <Container>
                <div className="mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Applications</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl">
                        Solutions for Residential and Commercial Spaces
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {areas.map((area, idx) => (
                        <div
                            key={area.title}
                            className={`relative group overflow-hidden rounded-lg cursor-pointer ${area.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    area.size === 'medium' ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${area.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white text-xl font-bold font-heading">{area.title}</h3>
                                <div className="h-1 w-0 bg-amber-500 mt-2 transition-all duration-300 group-hover:w-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
