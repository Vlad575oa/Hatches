"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Download, Box, FileText, Phone } from "lucide-react";

export function B2B() {
    return (
        <section className="py-24 bg-neutral-900 text-white border-t border-white/10">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">For Professionals</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Tools for Architects and Designers
                        </h2>
                        <p className="text-white/60 mb-10 text-lg leading-relaxed">
                            We understand the importance of precision and detail. That's why we provide full technical support for your projects, from 3D models to installation nodes.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <FileText className="text-amber-500 mb-4 h-8 w-8" />
                                <h4 className="font-bold mb-2">CAD & BIM Library</h4>
                                <p className="text-sm text-white/50">Access our comprehensive library of .DWG, .RFA, and .SKP files for seamless integration into your architectural plans.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <Box className="text-amber-500 mb-4 h-8 w-8" />
                                <h4 className="font-bold mb-2">Custom Engeneering</h4>
                                <p className="text-sm text-white/50">We design bespoke solutions for non-standard openings, heavy loads, and unique finish materials.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <FileText className="text-amber-500 mb-4 h-8 w-8" />
                                <h4 className="font-bold mb-2">Specification Guide</h4>
                                <p className="text-sm text-white/50">Detailed PDF datasheets including installation nodes, load charts, and material certifications.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <Phone className="text-amber-500 mb-4 h-8 w-8" />
                                <h4 className="font-bold mb-2">Priority Support</h4>
                                <p className="text-sm text-white/50">Direct line to our lead engineers for consultation during design and installation phases.</p>
                            </div>
                        </div>

                        <Button variant="premium" className="uppercase tracking-widest font-bold h-14 px-8">
                            <Download className="mr-2 h-4 w-4" /> Download Designer's Pack (2025)
                        </Button>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        {/* Abstract decorative element or image for architects */}
                        <div className="relative w-full max-w-md aspect-square border border-white/10 rounded-full flex items-center justify-center p-10">
                            <div className="w-full h-full rounded-full border border-dashed border-white/20 animate-spin-slow flex items-center justify-center p-8">
                                <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl opacity-50" />
                            </div>
                            <div className="absolute text-center">
                                <span className="text-7xl font-heading font-bold text-white/10">B2B</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
