"use client";

import { useState, useMemo } from "react";
import { Product } from "@/types/product";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Check, ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
    product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
    const [mainImage, setMainImage] = useState(product.images[0]?.src || "");

    // Initialize default options
    useMemo(() => {
        const defaults: Record<string, string> = {};
        product.options.forEach(opt => {
            if (opt.values.length > 0) {
                defaults[opt.name] = opt.values[0];
            }
        });
        setSelectedOptions(prev => (Object.keys(prev).length === 0 ? defaults : prev));
    }, [product.options]);

    // Find active variant logic
    const activeVariant = useMemo(() => {
        return product.variants.find(v => {
            // Check if all selected options match this variant's options
            // Note: This relies on the order of options in product.options matching variant.options
            // A more robust way would be to map option names to indices, but for now assuming order:
            return product.options.every((opt, index) => {
                const selectedValue = selectedOptions[opt.name];
                return v.options[index] === selectedValue;
            });
        }) || product.variants[0]; // Fallback
    }, [product.variants, product.options, selectedOptions]);

    const currentPrice = activeVariant ? activeVariant.price : product.price;

    const handleOptionChange = (optionName: string, value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: value
        }));
    };

    return (
        <section className="py-24 bg-white text-black">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Gallery Side */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                            {mainImage ? (
                                <Image
                                    src={mainImage}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300">No Image</div>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img.src)}
                                    className={cn(
                                        "relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-all",
                                        mainImage === img.src ? "border-amber-500" : "border-transparent hover:border-gray-200"
                                    )}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="lg:w-1/2">
                        <div className="mb-8">
                            <h5 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">
                                {product.category}
                            </h5>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
                                {product.title}
                            </h1>
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-3xl font-bold text-neutral-900">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currentPrice)}
                                </span>
                                {product.compareAtPrice && (
                                    <span className="text-lg text-gray-400 line-through">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.compareAtPrice)}
                                    </span>
                                )}
                            </div>
                            <div
                                className="prose prose-neutral text-gray-600 mb-8"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        </div>

                        {/* Options */}
                        <div className="space-y-6 mb-10">
                            {product.options.map((option) => (
                                <div key={option.name}>
                                    <h6 className="font-bold text-sm uppercase tracking-wider mb-3 text-neutral-900">
                                        {option.name}
                                    </h6>
                                    <div className="flex flex-wrap gap-3">
                                        {option.values.map((value) => {
                                            const isSelected = selectedOptions[option.name] === value;
                                            return (
                                                <button
                                                    key={value}
                                                    onClick={() => handleOptionChange(option.name, value)}
                                                    className={cn(
                                                        "px-4 py-2 border rounded-md text-sm font-medium transition-all",
                                                        isSelected
                                                            ? "nav-item-active" // Using existing style or custom
                                                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                                                    )}
                                                    style={isSelected ? { borderColor: 'var(--primary)', color: 'white', backgroundColor: 'black' } : {}}
                                                >
                                                    {value}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4">
                            <Button size="lg" variant="premium" className="w-full h-14 uppercase tracking-widest font-bold text-sm">
                                Request Quote for this configuration
                            </Button>
                            <p className="text-xs text-center text-gray-400">
                                * Final price may vary based on shipping and customization details.
                            </p>
                        </div>

                        {/* Specs / Details Accordion could go here */}
                    </div>
                </div>
            </Container>
        </section>
    );
}
