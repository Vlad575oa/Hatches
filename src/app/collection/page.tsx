import { getProducts } from "@/lib/products";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Container } from "@/components/ui/Container";

export const metadata = {
    title: "Collection | Ferrum Decor Studio",
    description: "Explore our premium collection of architectural floor hatches and access solutions.",
};

export default async function CollectionPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen pt-24 pb-12 bg-white">
            <section className="py-12 md:py-20 bg-neutral-900 text-white mb-10">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Catalog</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Our Collection
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Discover our range of premium floor hatches, designed for seamless integration and uncompromising durability.
                        </p>
                    </div>
                </Container>
            </section>

            <ProductGrid products={products} />
        </main>
    );
}
