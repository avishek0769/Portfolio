import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Smartphone,
    Globe,
    TrendingUp,
    CheckCircle2,
    Maximize2,
    X,
    Sparkles,
    ArrowRight,
    Layers
} from "lucide-react";

const freelanceProjects = [
    {
        id: "unevox",
        title: "Unevox — Enterprise Digital Solutions Platform",
        category: "Corporate Agency",
        isApp: false,
        link: "https://unevox.com",
        tagline: "Building brand authority and converting site visitors into high-ticket enterprise leads.",
        images: Array.from({ length: 13 }, (_, i) => `/freelancing-projects/unevox/unevox-${i + 1}.png`),
        description:
            "Unevox needed a modern, high-converting digital storefront to present their enterprise tech services, agency capabilities, and client case studies to corporate decision-makers.",
        businessImpact: [
            { label: "Lead Conversion Rate", value: "+45%" },
            { label: "Corporate Trust Factor", value: "Enterprise-Ready" },
            { label: "Client Inquiries", value: "3x Growth" },
        ],
        benefits: [
            "Establishes immediate trust and credibility with corporate clients",
            "Automated lead capture funnel that qualifies incoming inquiries 24/7",
            "Lightning-fast load speed and mobile responsiveness across all devices",
            "SEO-optimized structure helping rank for high-intent business searches"
        ]
    },
    {
        id: "farmigo",
        title: "Farmigo — Direct Farm-to-Table Delivery Mobile App",
        category: "Mobile Commerce & Agriculture",
        isApp: true,
        link: null, // Mobile app
        tagline: "Empowering local agricultural producers to sell direct-to-consumer and bypass middleman fees.",
        images: Array.from({ length: 10 }, (_, i) => `/freelancing-projects/farmigo/farmigo-${i + 1}.jpeg`),
        description:
            "Farmigo is an intuitive mobile application for iOS and Android that connects local farmers directly with household consumers for scheduled doorstep deliveries of fresh produce and dairy products.",
        businessImpact: [
            { label: "Middleman Commission", value: "0% (Saved)" },
            { label: "Daily Deliveries", value: "300% Increase" },
            { label: "Customer Retention", value: "88% Repeat Orders" },
        ],
        benefits: [
            "Farmers retain 100% of sale value without paying heavy marketplace margins",
            "Simplified one-tap order flow designed specifically for easy daily mobile use",
            "Live delivery route coordination and real-time order status notifications",
            "Automated subscription management for weekly milk and produce deliveries"
        ]
    },
    {
        id: "restaurant",
        title: "Gourmet Haven — Restaurant & Direct Online Ordering",
        category: "Hospitality & Food Business",
        isApp: false,
        link: "https://restaurant.avishek.dev",
        tagline: "Eliminating third-party commission fees while doubling direct online table bookings and food orders.",
        images: Array.from({ length: 16 }, (_, i) => `/freelancing-projects/restaurant/restaurant-${i + 1}.png`),
        description:
            "A sleek, mouth-watering restaurant website engineered to give diners a digital table reservation experience and a zero-commission direct online ordering system.",
        businessImpact: [
            { label: "Delivery Platform Fees", value: "Saved 30% per order" },
            { label: "Direct Table Bookings", value: "2x Weekend Revenue" },
            { label: "Mobile Visitors", value: "Instant Digital Menu" },
        ],
        benefits: [
            "Reclaims high commission margins lost to third-party food delivery apps",
            "Interactive QR-code digital menu for instant contactless dining table orders",
            "Instant SMS & email reservation confirmations for customer convenience",
            "Showcases food photography and customer reviews to drive walk-in traffic"
        ]
    },
    {
        id: "clothing",
        title: "VogueCraft — Boutique E-Commerce & Fashion Store",
        category: "Retail E-Commerce",
        isApp: false,
        link: "https://clothing.avishek.dev",
        tagline: "Transforming a local fashion boutique into a nationwide online brand with 24/7 automated sales.",
        images: Array.from({ length: 13 }, (_, i) => `/freelancing-projects/clothing/clothing-${i + 1}.png`),
        description:
            "An elegant, fast-loading online store created for a clothing boutique looking to scale beyond physical store foot traffic and sell products to customers across the country.",
        businessImpact: [
            { label: "Monthly Sales Growth", value: "+180% Revenue" },
            { label: "Geographic Reach", value: "Nationwide Customers" },
            { label: "Cart Conversion", value: "3.2x Industry Avg" },
        ],
        benefits: [
            "Expands customer sales base 24 hours a day beyond physical store hours",
            "Mobile-optimized catalog browsing with seamless high-res product galleries",
            "Secure, effortless checkout flow supporting multiple payment options",
            "Automated inventory management sync preventing double-bookings"
        ]
    }
];

export default function FreelanceProjects() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const project = freelanceProjects[activeTab];

    // Reset image index when switching projects
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeTab]);

    // Auto slide carousel every 4 seconds
    useEffect(() => {
        if (!isAutoPlay || fullscreenImage) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, project.images.length, fullscreenImage]);

    const handleNextImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const handlePrevImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-black text-white relative z-10">
            {/* Header Badge & Title */}
            <div className="flex flex-col items-center text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Client Solutions & Business Impact</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 max-w-4xl leading-tight"
                >
                    Real Projects Built to Grow Businesses
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-base sm:text-lg max-w-3xl mt-4 leading-relaxed"
                >
                    A digital presence is more than just code — it's an automated sales representative, a trust builder, and a revenue driver. Here is how custom web and mobile software created tangible ROI for client businesses.
                </motion.p>
            </div>

            {/* Project Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
                {freelanceProjects.map((p, idx) => {
                    const isActive = activeTab === idx;
                    return (
                        <button
                            key={p.id}
                            onClick={() => setActiveTab(idx)}
                            className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer border ${
                                isActive
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 scale-[1.02]"
                                    : "bg-zinc-900/80 border-zinc-800 text-gray-400 hover:text-white hover:bg-zinc-800/80"
                            }`}
                        >
                            {p.isApp ? <Smartphone size={16} className={isActive ? "text-white" : "text-purple-400"} /> : <Globe size={16} className={isActive ? "text-white" : "text-blue-400"} />}
                            <span>{p.title.split("—")[0].trim()}</span>
                            {p.isApp && (
                                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 ml-1">
                                    App
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Project Details Showcase Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl">
                
                {/* Visual Media Device Frame (Slider) */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
                    
                    {/* Website Browser Frame Mockup */}
                    {!project.isApp ? (
                        <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700/70 rounded-2xl shadow-2xl overflow-hidden group relative">
                            {/* Browser Top Bar Header */}
                            <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                                </div>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1 text-xs text-gray-400 font-mono flex items-center gap-2 max-w-[220px] sm:max-w-xs truncate">
                                    <Globe size={12} className="text-blue-400 shrink-0" />
                                    <span className="truncate">{project.link || "https://client-website.com"}</span>
                                </div>
                                <div className="text-xs text-gray-500 font-medium">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                            </div>

                            {/* Image Container Aspect Ratio */}
                            <div 
                                className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden cursor-pointer"
                                onClick={() => setFullscreenImage(project.images[currentImageIndex])}
                                onMouseEnter={() => setIsAutoPlay(false)}
                                onMouseLeave={() => setIsAutoPlay(true)}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </AnimatePresence>

                                {/* Zoom Icon Overlay */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-2 rounded-lg text-white text-xs flex items-center gap-1.5 border border-white/10 shadow-lg">
                                    <Maximize2 size={14} />
                                    <span>Expand</span>
                                </div>

                                {/* Slider Navigation Arrows */}
                                <button
                                    onClick={handlePrevImage}
                                    aria-label="Previous screenshot"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-blue-600 text-white border border-white/10 transition-all cursor-pointer opacity-80 hover:opacity-100 shadow-lg"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    aria-label="Next screenshot"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-blue-600 text-white border border-white/10 transition-all cursor-pointer opacity-80 hover:opacity-100 shadow-lg"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Mobile App Phone Mockup (Portrait Frame) */
                        <div className="relative w-[260px] sm:w-[290px] bg-zinc-900 border-[6px] border-zinc-800 rounded-[40px] shadow-2xl overflow-hidden group">
                            {/* Phone Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-zinc-950 rounded-b-xl z-20 flex items-center justify-center">
                                <span className="w-10 h-1 bg-zinc-800 rounded-full"></span>
                            </div>

                            {/* Phone Screen aspect-[9/19] */}
                            <div 
                                className="relative aspect-[9/19] w-full bg-black overflow-hidden cursor-pointer pt-4"
                                onClick={() => setFullscreenImage(project.images[currentImageIndex])}
                                onMouseEnter={() => setIsAutoPlay(false)}
                                onMouseLeave={() => setIsAutoPlay(true)}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </AnimatePresence>

                                {/* Zoom Overlay */}
                                <div className="absolute top-7 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-2 rounded-lg text-white text-xs flex items-center gap-1 border border-white/10 shadow-lg z-30">
                                    <Maximize2 size={12} />
                                </div>

                                {/* Slider Navigation Arrows */}
                                <button
                                    onClick={handlePrevImage}
                                    aria-label="Previous screenshot"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-purple-600 text-white border border-white/10 transition-all cursor-pointer z-30 shadow-lg"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    aria-label="Next screenshot"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-purple-600 text-white border border-white/10 transition-all cursor-pointer z-30 shadow-lg"
                                >
                                    <ChevronRight size={18} />
                                </button>

                                {/* Slide Counter Badge */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[10px] px-2.5 py-0.5 rounded-full z-30 border border-white/10">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Thumbnail Selector Strip below main preview */}
                    <div className="flex gap-2 mt-5 max-w-full overflow-x-auto pb-2 custom-scrollbar px-2">
                        {project.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`relative rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 ${
                                    project.isApp ? "w-10 h-16" : "w-16 h-10"
                                } ${
                                    currentImageIndex === idx
                                        ? "border-blue-500 scale-105 shadow-md shadow-blue-500/30"
                                        : "border-zinc-800 opacity-50 hover:opacity-100"
                                }`}
                            >
                                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Non-Technical Business Description & Impact Card */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                        {/* Category & Title */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-300">
                                {project.category}
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                            {project.title.split("—")[0].trim()}
                        </h3>

                        <p className="text-blue-300 text-sm font-medium mb-4 italic">
                            "{project.tagline}"
                        </p>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Business Impact Metrics Grid */}
                        <div className="mb-6">
                            <h4 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-3 flex items-center gap-1.5">
                                <TrendingUp size={14} className="text-green-400" />
                                Key Business Impact & Results
                            </h4>
                            <div className="grid grid-cols-3 gap-2.5">
                                {project.businessImpact.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3 text-center flex flex-col justify-center"
                                    >
                                        <span className="text-sm sm:text-base font-extrabold text-blue-400">
                                            {item.value}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-gray-400 mt-0.5 leading-tight">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why it Persuades / Benefits List */}
                        <div className="space-y-2.5 mb-8">
                            {project.benefits.map((b, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Button for Website / App */}
                    <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <ExternalLink size={16} />
                                <span>Visit Live Business Site</span>
                            </a>
                        ) : (
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                                <Smartphone size={16} />
                                <span>Native iOS & Android Mobile Application</span>
                            </div>
                        )}

                        <a
                            href="#contact"
                            className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                            <span>Want a similar system?</span>
                            <ArrowRight size={12} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Business Owner Persuasion Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 bg-gradient-to-r from-blue-950/40 via-zinc-900 to-purple-950/40 border border-blue-500/20 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
                <div className="max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Ready to Upgrade Your Business Digital Presence?
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Whether you need a high-converting business website, a custom booking portal, or a dedicated mobile application — software should work for you to bring more customers and increase your bottom line.
                    </p>
                </div>
                <a
                    href="#contact"
                    className="shrink-0 px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 cursor-pointer"
                >
                    <span>Get a Free Consultation</span>
                    <ArrowRight size={18} />
                </a>
            </motion.div>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {fullscreenImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-10 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setFullscreenImage(null)}
                    >
                        <button
                            onClick={() => setFullscreenImage(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white cursor-pointer transition-colors z-50"
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={fullscreenImage}
                            alt="Fullscreen view"
                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
