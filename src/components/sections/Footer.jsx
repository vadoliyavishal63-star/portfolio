const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">

                    {/* Brand & Brief */}
                    <div className="max-w-sm">
                        <a href="#home" className="text-2xl font-bold tracking-tight text-white inline-block mb-4">
                            Vishal<span className="text-indigo-400">.</span>
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Motivated Web Developer based in India, dedicated to building responsive, accessible, and highly-performant web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {navLinks.slice(1, 5).map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="mailto:vadoliyavishal63@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Vishal Vadoliya. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Designed & Built in India.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
