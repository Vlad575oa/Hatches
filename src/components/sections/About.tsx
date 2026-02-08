"use client";

import { Container } from "@/components/ui/Container";
import { Mail, Phone, MapPin, Instagram, Facebook, Globe } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-white text-black border-b border-gray-100">
            <Container>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                            Ferrum Decor Studio
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Ferrum Decor Studio is a leader in the design and manufacturing of invisible architectural access solutions.
                            Founded in 2012, we have revolutionized the way floor hatches are integrated into modern interiors.
                            <br /><br />
                            Our philosophy is simple: <strong>Function should never compromise design.</strong>
                            We work with the worlds top architects to create custom steel and glass hatches that disappear into your floor,
                            providing secure access to wine cellars, basements, and mechanical rooms without interrupting the visual flow of your space.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-4xl font-bold text-black mb-2">12+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Years of Innovation</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-black mb-2">3,500+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Bespoke Projects</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-black mb-2">50+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Countries Shipped</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-black mb-2">10yr</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Structural Warranty</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1" id="contacts">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Contact Us</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                            Get in Touch
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black flex-shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Email</h5>
                                    <a href="mailto:info@ferrumdecor.com" className="text-lg hover:text-amber-600 transition-colors">info@ferrumdecor.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black flex-shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">WhatsApp / Phone</h5>
                                    <a href="tel:+1234567890" className="text-lg hover:text-amber-600 transition-colors">+1 (234) 567-890</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black flex-shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Production</h5>
                                    <p className="text-lg text-gray-600">
                                        123 Industrial Ave, Design District<br />
                                        London, UK
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400">
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
