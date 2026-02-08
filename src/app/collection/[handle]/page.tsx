import { getProducts } from "@/lib/products";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { notFound } from "next/navigation";

// Generate static params for consistent build if we wanted SSG, but basic dynamic is fine for now
export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product) => ({
        handle: product.handle,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
    const handle = (await params).handle;
    const products = await getProducts();
    const product = products.find((p) => p.handle === handle);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.title} | Ferrum Decor Studio`,
        description: product.description.substring(0, 160).replace(/<[^>]*>?/gm, ""),
    };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
    const handle = (await params).handle;
    const products = await getProducts();
    const product = products.find((p) => p.handle === handle);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 bg-white">
            <ProductDetail product={product} />
        </main>
    );
}
