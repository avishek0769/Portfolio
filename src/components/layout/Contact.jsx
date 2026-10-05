import React, { useState } from "react";
import {
    Mail,
    MapPin,
    Twitter,
    Github,
    Linkedin,
    Sparkles,
    ArrowUpRight,
    Copy,
    Check,
} from "lucide-react";
import { motion } from "motion/react";

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("avishekadhikary42@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/avishek0769",
            icon: <Github size={16} />,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/avishekadhikary",
            icon: <Linkedin size={16} />,
        },
        {
            name: "X (Twitter)",
            url: "https://x.com/avishek0769",
            icon: <Twitter size={16} />,
        },
        {
            name: "Medium",
            url: "https://medium.com/@avishekadhikary",
            icon: <img src="/medium.webp" alt="Medium" className="w-4 h-4 invert shrink-0" />,
        },
    ];

    return (
        <section id="contact" aria-label="Contact Information" className="py-24 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-white relative z-10">
            {/* Header Badge & Title */}
            <div className="flex flex-col items-center text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 leading-tight"
                >
                    Get in Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed"
                >
                    I'm open to full-time engineering roles, freelance opportunities, and collaborative projects. Reach out anytime.
                </motion.p>
            </div>

            {/* Clean Row-Based Contact List */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
            >
                {/* Row 1: Email */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-zinc-800/80">
                    <div className="flex items-center gap-3.5 shrink-0">
                        <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">Email Address</p>
                            <p className="text-base sm:text-lg font-medium text-white">avishekadhikary42@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:self-center">
                        <button
                            onClick={handleCopyEmail}
                            className={`px-4 py-2 rounded-xl border text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                                copied
                                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                                    : "bg-zinc-900 border-zinc-800 text-gray-300 hover:bg-zinc-800 hover:text-white"
                            }`}
                        >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            <span>{copied ? "Copied" : "Copy Email"}</span>
                        </button>

                        <a
                            href="mailto:avishekadhikary42@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-blue-600/80 hover:bg-blue-600 border border-blue-500/40 text-white text-xs font-medium transition-all flex items-center gap-1.5"
                        >
                            <span>Send Email</span>
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Row 2: Location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-zinc-800/80">
                    <div className="flex items-center gap-3.5 shrink-0">
                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">Location</p>
                            <p className="text-base sm:text-lg font-medium text-white">Kolkata, West Bengal, India</p>
                        </div>
                    </div>

                    <span className="text-xs text-gray-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full w-fit">
                        Open to Remote &amp; On-site Opportunities
                    </span>
                </div>

                {/* Row 3: Online Profiles */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-zinc-800/80">
                    <div className="flex items-center gap-3.5 shrink-0">
                        <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">Socials &amp; Profiles</p>
                            <p className="text-base font-medium text-white">Find me around the web</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-gray-300 hover:text-white text-xs font-medium transition-all hover:scale-[1.02]"
                            >
                                {s.icon}
                                <span>{s.name}</span>
                                <ArrowUpRight size={12} className="text-gray-500" />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bottom Call to Action Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-blue-950/30 via-zinc-900/60 to-purple-950/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        Ready to start a conversation?
                    </h3>
                    <p className="text-sm text-gray-400">
                        Connect with me directly on LinkedIn or drop an email anytime.
                    </p>
                </div>
                <a
                    href="https://linkedin.com/in/avishekadhikary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
                >
                    <Linkedin size={16} />
                    <span>Say Hello on LinkedIn</span>
                    <ArrowUpRight size={16} />
                </a>
            </motion.div>
        </section>
    );
}

export default Contact;
