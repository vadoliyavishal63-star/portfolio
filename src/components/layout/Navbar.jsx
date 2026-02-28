import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold tracking-tight text-corp-primary z-50">
                    Vishal<span className="text-corp-accent">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-all ${activeSection === link.href.substring(1)
                                            ? 'text-corp-accent font-semibold'
                                            : 'text-corp-text hover:text-corp-primary'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="px-5 py-2.5 bg-corp-accent text-white font-medium rounded-lg hover:bg-corp-accent-hover transition-colors shadow-sm text-sm">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-corp-primary focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 bg-white flex flex-col items-center pt-20 z-40 border-t border-corp-border"
                    >
                        <ul className="flex flex-col items-center space-y-8 w-full px-6">
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full text-center">
                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`block text-xl font-medium transition-colors ${activeSection === link.href.substring(1)
                                                ? 'text-corp-accent'
                                                : 'text-corp-primary'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="w-full pt-4">
                                <a
                                    href="#contact"
                                    onClick={closeMenu}
                                    className="block w-full text-center py-4 bg-corp-accent text-white font-medium rounded-xl shadow-sm"
                                >
                                    Let's Talk
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
