import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { Product, CSVProduct } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(process.cwd(), "public", "products_export 2.csv");
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = Papa.parse<CSVProduct>(fileContent, {
        header: true,
        skipEmptyLines: true,
    });

    const productsMap = new Map<string, Product>();

    data.forEach((row) => {
        if (!row.Handle) return;

        let product = productsMap.get(row.Handle);

        if (!product) {
            product = {
                handle: row.Handle,
                title: row.Title,
                description: row["Body (HTML)"],
                tags: row.Tags ? row.Tags.split(",").map((t) => t.trim()) : [],
                price: parseFloat(row["Variant Price"]) || 0,
                compareAtPrice: row["Variant Compare At Price"]
                    ? parseFloat(row["Variant Compare At Price"])
                    : undefined,
                images: [],
                category: row.Type || "Uncategorized",
                options: [],
                variants: [],
            };
            productsMap.set(row.Handle, product);
        }

        // Add Variant
        const variantOptions: string[] = [];
        if (row["Option1 Value"]) variantOptions.push(row["Option1 Value"]);
        if (row["Option2 Value"]) variantOptions.push(row["Option2 Value"]);
        if (row["Option3 Value"]) variantOptions.push(row["Option3 Value"]);

        if (variantOptions.length > 0) {
            product.variants.push({
                id: row["Variant SKU"] || `${row.Handle}-${product.variants.length}`,
                title: variantOptions.join(" / "),
                price: parseFloat(row["Variant Price"]) || product.price,
                options: variantOptions,
            });
        }

        // Extract Options Metadata (Only from the first row of the product usually, but we check all)
        [1, 2, 3].forEach(i => {
            const optName = row[`Option${i} Name` as keyof CSVProduct];
            const optValue = row[`Option${i} Value` as keyof CSVProduct];

            if (optName && optValue) {
                let option = product!.options.find(o => o.name === optName);
                if (!option) {
                    option = { name: optName, values: [] };
                    product!.options.push(option);
                }
                if (!option.values.includes(optValue)) {
                    option.values.push(optValue);
                }
            }
        });

        if (row["Image Src"]) {
            // Avoid duplicate images
            const exists = product.images.some(img => img.src === row["Image Src"]);
            if (!exists) {
                product.images.push({
                    src: row["Image Src"],
                    alt: row["Image Alt Text"] || row.Title,
                    position: parseInt(row["Image Position"]) || 0,
                });
            }
        }
    });

    // Post-process to ensure options are sorted or unique if needed? 
    // They are unique by Set logic above.

    return Array.from(productsMap.values());

    return Array.from(productsMap.values());
}
