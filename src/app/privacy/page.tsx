import { Container } from "@/components/ui/Container";

export const metadata = {
    title: "Privacy Policy | Ferrum Decor Studio",
    description: "Privacy Policy for Ferrum Decor Studio website.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-24 bg-white text-black">
            <section className="py-12 md:py-20 border-b border-gray-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
                    <p className="text-gray-500">Last updated: February 08, 2026</p>
                </Container>
            </section>

            <section className="py-12 md:py-20">
                <Container>
                    <div className="prose prose-neutral max-w-4xl mx-auto">
                        <h3>1. Introduction</h3>
                        <p>
                            Ferrum Decor Studio ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from)
                            and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3>2. Data We Collect</h3>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        </ul>

                        <h3>3. How We Use Your Data</h3>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                            In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h3>5. Contact Us</h3>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@ferrumdecor.com">info@ferrumdecor.com</a>.
                        </p>
                    </div>
                </Container>
            </section>
        </main>
    );
}
