import { Sparkles, Github, ExternalLink, Copy, Check, KeyRound } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Timeline } from "../ui/timeline";

const projectsData = [
    {
        title: "DocChat — AI Docs Assistant",
        points: [
            "Built an AI documentation chat platform that crawls documentation websites and transforms them into searchable knowledge bases.",
            "Implemented vector-based RAG using Qdrant for embedding-based retrieval.",
            "Implemented a vectorless retrieval approach using TreeIndex, a custom knowledge-tree-based retrieval system.",
            "Integrated multiple LLM providers and built asynchronous processing for documentation crawling and knowledge-base creation.",
            "Implemented token usage tracking and secure user API key management for AI providers.",
        ],
        tech: ["React.js", "Express.js", "PostgreSQL", "Prisma", "BullMQ", "Redis", "Qdrant", "OpenAI SDK", "Mem0"],
        github: "https://github.com/avishek0769/DocChat",
        link: "https://avishek.short.gy/docchat",
    },
    {
        title: "Codium — Cloud IDE",
        points: [
            "Built a cloud-based IDE that allows users to write and execute code directly from the browser.",
            "Used Monaco Editor to provide a VS Code-like code editing experience.",
            "Implemented isolated code execution using Docker containers for improved process and environment isolation.",
            "Built backend services to manage code execution and containerized runtime environments.",
            "Implemented real-time communication for interactive code execution and output handling.",
        ],
        tech: ["React.js", "Express.js", "MongoDB", "Mongoose", "Docker", "WebSockets", "Ngrok"],
        github: "https://github.com/avishek0769/Codium-IDE",
        link: "https://avishek.short.gy/codium",
    },
    {
        title: "VideoTubes — Video Streaming App",
        points: [
            "Built a video streaming platform with an end-to-end video processing and delivery pipeline.",
            "Implemented video transcoding using FFmpeg to process uploaded videos into streaming-compatible formats.",
            "Implemented HLS adaptive bitrate streaming with segmented video delivery.",
            "Built backend services using Node.js and Express.js for video management and streaming workflows.",
            "Worked with asynchronous video processing and cloud-based infrastructure for media storage and delivery.",
        ],
        tech: ["HTML/CSS/JS", "Express.js", "FFmpeg", "MongoDB", "Mongoose", "Docker", "AWS (ECS, S3)"],
        github: "https://github.com/avishek0769/videotubes",
        link: "https://avishek.short.gy/videotubes",
    },
    {
        title: "Video Calling Platform",
        points: [
            "Built a real-time group video calling platform that enables multiple users to participate in audio and video calls.",
            "Implemented an SFU-based media server architecture using mediasoup for scalable real-time media communication.",
            "Used WebRTC for real-time audio and video communication between participants.",
            "Implemented WebSockets for signaling, room management, and real-time participant coordination.",
            "Worked with media producers and consumers to manage real-time audio and video streams.",
        ],
        tech: ["React.js", "Express.js", "WebRTC", "Mediasoup", "WebSockets"],
        github: "https://github.com/avishek0769/Videocall",
        link: "https://avishek.short.gy/videocall",
    },
    {
        title: "Cloudify — Frontend Hosting Platform",
        points: [
            "Built a cloud hosting platform that allows users to deploy and host frontend applications.",
            "Implemented an automated deployment pipeline using Docker containers and AWS ECS/Fargate.",
            "Used AWS S3 for project and build artifact storage and Nginx for reverse proxy and routing.",
            "Built the backend with Node.js, Express.js, PostgreSQL, and Prisma, with Clerk for authentication.",
            "Worked on containerized deployments, domain routing, SSL configuration, and cloud infrastructure.",
        ],
        tech: ["React.js", "Express.js", "PostgreSQL", "Prisma", "Docker", "AWS (ECS, S3)", "Clerk"],
        github: "https://github.com/avishek0769/Cloudify",
        link: "https://avishek.short.gy/cloudify",
    },
    {
        title: "SpotMe — Photo Discovery",
        points: [
            "Built an AI-powered event photo discovery platform for weddings, college events, concerts, conferences, and other large gatherings.",
            "Implemented face-based photo matching that allows guests to upload a selfie and discover their photos from large event collections.",
            "Built event-based photo management, paginated galleries, personalized collections, photo downloads, and controlled guest access.",
            "Allowed guests to access shared events without creating an account while maintaining privacy and personalized photo collections.",
            "Built photographer tools for managing event photos, monitoring guest activity, and manually managing guest collections.",
        ],
        tech: ["React.js", "Express.js", "MongoDB", "vladmandic/face-api", "Qdrant", "BullMQ"],
        github: "https://github.com/avishek0769/SpotMe",
        link: "https://avishek.short.gy/spotme",
    },
];

// ── Copy button ──────────────────────────────────────────────────────────────
function CopyButton({ value, label }) {
    const [copied, setCopied] = useState(false);
    const handle = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <div className="flex items-center justify-between gap-3 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-xl px-4 py-2.5 transition-colors">
            <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">{label}</span>
                <span className="font-mono text-sm text-zinc-200 mt-0.5 select-all">{value}</span>
            </div>
            <button
                onClick={handle}
                title={`Copy ${label}`}
                className={`p-2 rounded-lg border transition-all flex items-center justify-center cursor-pointer ${
                    copied
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-zinc-800/40 border-zinc-700/50 hover:bg-zinc-700 text-zinc-400 hover:text-white"
                }`}
            >
                {copied ? <Check size={13} /> : <Copy size={13} />}
            </button>
        </div>
    );
}

// ── Main export ──────────────────────────────────────────────────────────────
export function Projects() {
    return (
        <section id="projects" aria-label="Featured Projects" className="w-full py-20 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Engineering &amp; Exploration</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 max-w-4xl leading-tight"
                >
                    Projects That Define Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-base sm:text-lg max-w-3xl mt-4 leading-relaxed"
                >
                    Beyond client work, these are the products and systems I've built to explore engineering challenges,
                    experiment with new technologies, and push my understanding of software development.
                </motion.p>
            </div>

            {/* ── Demo Credentials ── */}
            <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                viewport={{ once: true }}
                className="mb-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 flex flex-col sm:flex-row sm:items-center gap-5"
            >
                <div className="flex items-center gap-3 shrink-0">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <KeyRound size={18} />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-md">Demo Credentials</p>
                        <p className="text-gray-500 text-sm mt-0.5">Same login applies across all live demos.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                    <CopyButton label="Username" value="avishek09" />
                    <CopyButton label="Password" value="avishek09" />
                </div>
            </motion.div>


            {/* ── Project Cards with Scroll-Animated Timeline Component ── */}
            <Timeline>
                <div className="flex flex-col gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            viewport={{ once: true, margin: "-60px" }}
                            className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-zinc-700/80 transition-colors"
                        >
                            {/* Simple timeline node dot aligned over the line */}
                            <div className="absolute -left-[19px] sm:-left-[23px] top-8 w-3 h-3 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:border-purple-400 group-hover:scale-125 transition-all shadow-sm z-10" />

                            {/* Content */}
                            <div className="flex flex-col gap-4 min-w-0 flex-1">
                                {/* Title row */}
                                <div className="flex items-start justify-between gap-3 flex-wrap">
                                    <h3 className="text-base sm:text-xl font-semibold text-white leading-snug">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Bullet points */}
                                <ul className="flex flex-col gap-2">
                                    {project.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-md text-gray-400 leading-relaxed">
                                            <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech chips */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 text-sm rounded-lg bg-blue-500/8 border border-blue-500/15 text-blue-300/80 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-gray-300 bg-zinc-800/60 border border-zinc-700/60 rounded-lg hover:bg-zinc-700/60 hover:text-white transition-colors"
                                        >
                                            <Github size={14} />
                                            GitHub
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-600 bg-zinc-800/30 border border-zinc-800 rounded-lg cursor-not-allowed">
                                            <Github size={14} />
                                            GitHub (Coming Soon)
                                        </span>
                                    )}

                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600/80 border border-blue-500/40 rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-600 bg-zinc-800/30 border border-zinc-800 rounded-lg cursor-not-allowed">
                                            Live Demo Unavailable
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Timeline>

        </section>
    );
}
