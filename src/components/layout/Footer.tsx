import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navigation = {
    solutions: [
        { name: "Tile Hatches", href: "#" },
        { name: "Wood Hatches", href: "#" },
        { name: "Glass Hatches", href: "#" },
        { name: "Reinforced Hatches", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Projects", href: "#" },
        { name: "For Architects", href: "#" },
        { name: "Contacts", href: "#" },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 text-white/60">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl font-heading font-bold tracking-wider text-white block mb-4">
                            FERRUM <span className="font-light text-gray-400">DECOR</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Premium architectural floor hatches designed for modern interiors.
                            Seamless integration, uncompromising quality.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Solutions</h3>
                        <ul className="space-y-3">
                            {navigation.solutions.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-3">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Contact</h3>
                        <address className="not-italic text-sm space-y-3">
                            <p>Production Address: [Address here]</p>
                            <p><a href="mailto:info@ferrumdecor.com" className="hover:text-white">info@ferrumdecor.com</a></p>
                            <p><a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
                        </address>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">&copy; {new Date().getFullYear()} Ferrum Decor Studio. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="/privacy" className="text-xs text-white/30 hover:text-white transition-colors">Privacy</a>
                        <a href="/terms" className="text-xs text-white/30 hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
