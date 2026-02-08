"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Upload, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    width: z.string().min(1, "Width is required"),
    length: z.string().min(1, "Length is required"),
    floorType: z.string().min(1, "Floor type is required"),
    load: z.string().min(1, "Load type is required"),
    country: z.string().min(1, "Country is required"),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(5, "Phone is required"),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const floorTypes = ["Tile / Stone", "Parquet / Wood", "Laminate", "Microcement", "Other"];
const loadTypes = ["Pedestrian (Standard)", "Reinforced (Heavy)", "Vehicle (Garage)"];

export function Calculator() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
    };

    return (
        <section className="py-24 bg-neutral-100 text-black">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 lg:max-w-md">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Request Quote</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Get an Individual Calculation
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Fill out the form to get a precise quote for your custom hatch. Our engineers will review your requirements and provide the best solution.
                        </p>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Currently Online
                            </h4>
                            <p className="text-sm text-gray-500">
                                Our engineering team is ready to process your request immediately. Average response time: 2 hours.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                                <p className="text-gray-500 mb-8">We will contact you shortly with a detailed proposal.</p>
                                <Button onClick={() => setIsSuccess(false)} variant="outline" className="text-black border-gray-300">
                                    Send details for another project
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Width (mm)</label>
                                        <input
                                            {...register("width")}
                                            type="number"
                                            placeholder="e.g. 600"
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                        />
                                        {errors.width && <p className="text-red-500 text-xs">{errors.width.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Length (mm)</label>
                                        <input
                                            {...register("length")}
                                            type="number"
                                            placeholder="e.g. 1200"
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                        />
                                        {errors.length && <p className="text-red-500 text-xs">{errors.length.message}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Floor Type</label>
                                        <select
                                            {...register("floorType")}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
                                        >
                                            <option value="">Select type...</option>
                                            {floorTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                        {errors.floorType && <p className="text-red-500 text-xs">{errors.floorType.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Load Type</label>
                                        <select
                                            {...register("load")}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
                                        >
                                            <option value="">Select load...</option>
                                            {loadTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                        {errors.load && <p className="text-red-500 text-xs">{errors.load.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Project Photo (Optional)</label>
                                    <label className="flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                        <div className="flex flex-col items-center">
                                            <Upload className="text-gray-400 mb-2 h-5 w-5" />
                                            <span className="text-xs text-gray-500">Click to upload image</span>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" />
                                    </label>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900">Contact Details</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        <input
                                            {...register("name")}
                                            placeholder="Your Name"
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    {...register("email")}
                                                    placeholder="Email"
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                            </div>
                                            <div>
                                                <input
                                                    {...register("phone")}
                                                    placeholder="Phone / WhatsApp"
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                />
                                                {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                                            </div>
                                        </div>
                                        <input
                                            {...register("country")}
                                            placeholder="Country of Delivery"
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                        {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    variant="premium"
                                    className="w-full uppercase tracking-widest font-bold h-14 text-sm"
                                    isLoading={isSubmitting}
                                >
                                    Get Proposal
                                </Button>

                                <p className="text-xs text-center text-gray-400">
                                    By submitting this form, you agree to our processing of personal data.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
