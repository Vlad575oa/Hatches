import { Container } from "@/components/ui/Container";

export const metadata = {
    title: "Terms & Conditions | Ferrum Decor Studio",
    description: "Terms and Conditions for Ferrum Decor Studio.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-24 bg-white text-black">
            <section className="py-12 md:py-20 border-b border-gray-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Terms & Conditions</h1>
                    <p className="text-gray-500">Last updated: February 08, 2026</p>
                </Container>
            </section>

            <section className="py-12 md:py-20">
                <Container>
                    <div className="prose prose-neutral max-w-4xl mx-auto">
                        <h3>1. Agreement to Terms</h3>
                        <p>
                            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Ferrum Decor Studio ("we," "us" or "our"),
                            concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </p>

                        <h3>2. Intellectual Property Rights</h3>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”)
                            and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>

                        <h3>3. User Representations</h3>
                        <p>
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                        </p>

                        <h3>4. Products</h3>
                        <p>
                            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors,
                            and your electronic display may not accurately reflect the actual colors and details of the products.
                        </p>

                        <h3>5. Contact Us</h3>
                        <p>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:info@ferrumdecor.com">info@ferrumdecor.com</a>.
                        </p>
                    </div>
                </Container>
            </section>
        </main>
    );
}
