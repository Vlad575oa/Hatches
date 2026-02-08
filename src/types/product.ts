export interface Product {
    handle: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    compareAtPrice?: number;
    images: {
        src: string;
        alt: string;
        position: number;
    }[];
    category: string;
    options: {
        name: string;
        values: string[];
    }[];
    variants: {
        id: string;
        title: string;
        price: number;
        options: string[]; // [value1, value2, value3]
    }[];
}

export interface CSVProduct {
    Handle: string;
    Title: string;
    "Body (HTML)": string;
    Vendor: string;
    "Product Category": string;
    Type: string;
    Tags: string;
    "Variant Price": string;
    "Variant Compare At Price": string;
    "Image Src": string;
    "Image Position": string;
    "Image Alt Text": string;
    "Option1 Name"?: string;
    "Option1 Value"?: string;
    "Option2 Name"?: string;
    "Option2 Value"?: string;
    "Option3 Name"?: string;
    "Option3 Value"?: string;
    "Variant SKU"?: string;
}
