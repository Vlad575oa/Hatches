"use client";

import { Container } from "@/components/ui/Container";

const steps = [
    {
        number: "01",
        title: "Consultation",
        description: "We discuss your project requirements, floor type, and dimensions.",
    },
    {
        number: "02",
        title: "Design",
        description: "Our engineers develop precise drawings and technical solutions.",
    },
    {
        number: "03",
        title: "Production",
        description: "Manufacturing at our own facility using premium materials.",
    },
    {
        number: "04",
        title: "Delivery",
        description: "Secure packaging and worldwide shipping to your location.",
    },
    {
        number: "05",
        title: "Installation",
        description: "We provide detailed guides or assist with professional installation.",
    },
];

export function Process() {
    return (
        <section className="py-24 bg-white text-black">
            <Container>
                <div className="mb-20">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">From Idea to Installation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            {/* Line connector */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gray-200 -z-10" />
                            )}

                            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl mb-6 relative z-10 border-4 border-white">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
