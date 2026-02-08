import { Product } from "@/types/product";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    if (!products || products.length === 0) {
        return (
            <div className="py-20 text-center text-gray-500">
                <p>No products found.</p>
            </div>
        );
    }

    return (
        <section className="py-24 bg-neutral-50">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            href={`/collection/${product.handle}`}
                            key={product.handle}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                {product.images[0] ? (
                                    <Image
                                        src={product.images[0].src}
                                        alt={product.images[0].alt || product.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        No Image
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                    {product.category || "Premium"}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-heading font-bold mb-2 text-neutral-900 group-hover:text-amber-600 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                                    {product.description.replace(/<[^>]*>?/gm, "")}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 uppercase tracking-wider">Price</span>
                                        <span className="text-lg font-bold text-neutral-900">
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
                                        </span>
                                    </div>
                                    <Button size="sm" variant="premium" className="uppercase font-bold text-xs tracking-wider">
                                        Get Quote
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
