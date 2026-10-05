import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Briefcase, Star, LayoutGrid } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Education', href: '/#education' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Articles', href: '/#articles' },
    { name: 'Contact', href: '/#contact' },
];

const projectDropdownItems = [
    {
        name: 'Client Work',
        href: '/#freelance',
        icon: Briefcase,
        desc: 'Freelance & business websites',
    },
    {
        name: 'Featured Projects',
        href: '/#projects',
        icon: Star,
        desc: 'Highlighted personal builds',
    },
    {
        name: 'All Projects',
        href: '/projects',
        icon: LayoutGrid,
        desc: 'Complete project showcase',
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const scrollToSection = (href) => {
        if (href.startsWith('/#')) {
            const sectionId = href.substring(2);
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
        setIsOpen(false);
        setDropdownOpen(false);
        setMobileProjectsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav
                aria-label="Main Navigation"
                className={`w-full transition-all duration-300 ${
                    scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="shrink-0" />

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1 gap-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Projects Dropdown */}
                            <div
                                ref={dropdownRef}
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button
                                    onClick={() => setDropdownOpen((v) => !v)}
                                    aria-expanded={dropdownOpen}
                                    aria-haspopup="true"
                                    className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                                >
                                    <span>Projects</span>
                                    <motion.div
                                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={15} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                            transition={{ duration: 0.18 }}
                                            className="absolute right-0 top-full mt-2 w-64 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-50"
                                        >
                                            {/* Subtle top glow line */}
                                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                                            <div className="p-2">
                                                {projectDropdownItems.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                scrollToSection(item.href);
                                                            }}
                                                            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-150 group cursor-pointer"
                                                        >
                                                            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 transition-colors shrink-0">
                                                                <Icon size={15} className="text-blue-400" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-medium text-white/90 group-hover:text-white leading-tight">
                                                                    {item.name}
                                                                </span>
                                                                <span className="text-[11px] text-gray-500 group-hover:text-gray-400 leading-tight mt-0.5">
                                                                    {item.desc}
                                                                </span>
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle Mobile Navigation Menu"
                                aria-expanded={isOpen}
                                className="text-gray-300 hover:text-white p-2 relative z-50"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-b border-white/10"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="text-gray-300 hover:text-white active:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/5 active:bg-white/10 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Mobile Projects Accordion */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <button
                                    onClick={() => setMobileProjectsOpen((v) => !v)}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                                >
                                    <span>Projects</span>
                                    <motion.div
                                        animate={{ rotate: mobileProjectsOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={18} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {mobileProjectsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pr-2 pb-2 space-y-1 border-l border-blue-500/20 ml-4 mt-1">
                                                {projectDropdownItems.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                scrollToSection(item.href);
                                                            }}
                                                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                                                        >
                                                            <Icon size={16} className="text-blue-400 shrink-0" />
                                                            <div>
                                                                <div className="font-medium text-gray-200">{item.name}</div>
                                                                <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
