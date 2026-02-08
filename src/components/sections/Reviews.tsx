"use client";

import { Container } from "@/components/ui/Container";

const reviews = [
    {
        author: "Elena M.",
        role: "Interior Designer",
        text: "The hatch is completely invisible in the parquet floor. My client was thrilled that we didn't have to compromise the design for access to the wine cellar.",
    },
    {
        author: "James D.",
        role: "Homeowner",
        text: "Heavy, solid, yet opens effortlessly thanks to the gas struts. It feels like a premium piece of engineering.",
    },
    {
        author: "Studio Arch",
        role: "Architecture Firm",
        text: "We specify Ferrum Decor for all our high-end residential projects. The build quality and support are unmatched.",
    },
];

export function Reviews() {
    return (
        <section className="py-24 bg-white text-black">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Trusted by Professionals</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col h-full">
                            <div className="flex-1">
                                <p className="text-gray-600 italic leading-relaxed mb-6">"{review.text}"</p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-200">
                                <p className="font-bold font-heading text-lg">{review.author}</p>
                                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
