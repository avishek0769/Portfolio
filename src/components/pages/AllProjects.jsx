import { useEffect } from 'react';
import { Github, ExternalLink } from "lucide-react";
import SEO from '../common/SEO';

const projectsData = [
    {
        title: "DocChat - AI Docs Assistant",
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
        title: "Codium - Cloud IDE",
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
        title: "VideoTubes - Video Streaming App",
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
        title: "Cloudify - Frontend Hosting Platform",
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
        title: "SpotMe - Photo Discovery",
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
    {
        title: "Real-time Quiz App",
        points: [
            "Built a real-time multiplayer quiz platform where participants can join using a shared game code.",
            "Implemented live question synchronization and instant score updates using WebSockets.",
            "Designed separate host and participant interfaces for seamless quiz management.",
            "Supports multiple players participating simultaneously with real-time leaderboard updates.",
        ],
        tech: ["React.js", "Express.js", "MongoDB", "Socket.io"],
        github: "https://github.com/avishek0769/quiz_app",
        link: "https://avishek.short.gy/quiz",
    },
    {
        title: "My Github",
        points: [
            "Built a self-hosted Git hosting platform with SSH-based clone/push support using bare Git repositories, inspired by GitHub.",
            "Implemented repository management, SSH public key authentication, repository browser, README rendering, commit history, commit diffs, and branch exploration.",
            "Developed backend APIs that interact directly with Git CLI to retrieve repository trees, file contents, branches, and commit metadata.",
            "Built to gain a deeper understanding of Git internals, SSH authentication, and the architecture behind Git hosting platforms."
        ],
        tech: ["React.js", "Express.js", "Git bare repo"],
        github: "https://github.com/avishek0769/My_Github",
        link: "https://avishek.short.gy/my-github",
    },
    {
        title: "Custom DNS Server",
        points: [
            "Built a custom authoritative DNS server from scratch to understand the DNS protocol and domain name resolution.",
            "Implemented UDP-based DNS request parsing, zone management, and generation of A, CNAME, NS, and SOA record responses.",
            "Explored DNS packet encoding/decoding, authoritative name server behavior, and low-level networking concepts through hands-on implementation.",
        ],
        tech: ["Node.js", "dns-packet"],
        github: "https://github.com/avishek0769/Custom_DNS_server",
        link: null
    },
    {
        title: "Custom SMTP Server",
        points: [
            "Built a custom SMTP server in Node.js to understand the SMTP protocol and inbound email delivery workflow.",
            "Implemented SMTP session handling, email parsing, reverse DNS validation, and SPF, DKIM, and DMARC authentication using Mailauth.",
            "Explored mail server architecture, DNS-based email authentication, and server-to-server communication while investigating outbound SMTP delivery limitations."
        ],
        tech: ["Node.js", "smtp-server", "mailparser", "mailauth"],
        github: "https://github.com/avishek0769/Custom_SMTP_server",
        link: null
    },
    {
        title: "Express Starter Kit",
        points: [
            "Built a CLI tool that scaffolds production-ready Express.js backend projects through an interactive setup process.",
            "Supports configurable authentication (JWT/Clerk), database integration (MongoDB/Mongoose or PostgreSQL/Prisma), Redis/Valkey caching, Zod validation, file upload utilities, Docker Compose generation, and a preconfigured MVC architecture.",
            "Automatically installs dependencies, generates project files based on user selections, and eliminates repetitive backend setup to accelerate development.",
        ],
        tech: ["Node.js"],
        github: "https://github.com/avishek0769/express-starter-kit",
        link: "https://www.npmjs.com/package/create-express-starter-kit"
    },
    {
        title: "TreeIndex",
        points: [
            "Built a vectorless semantic indexing library that transforms large text into hierarchical knowledge trees using LLMs.",
            "Implemented concept-based knowledge tree generation, semantic node retrieval, and grounded answer generation without relying on vector embeddings or vector databases.",
            "Supports multiple LLM providers through a bring-your-own API key approach, enabling flexible integration into AI applications.",
            "Developed as the vectorless retrieval engine for DocChat to power documentation search and question answering.",
        ],
        tech: ["Node.js"],
        github: "https://github.com/avishek0769/TreeIndex",
        link: "https://www.npmjs.com/package/treeindex"
    },
    {
        title: "CNG Sathi",
        points: [
            "Built a cross-platform mobile application to help users check CNG availability at nearby stations.",
            "Allows station owners to update gas availability in real time.",
            "Designed to reduce unnecessary travel by providing up-to-date station status information.",
        ],
        tech: ["React Native", "Express.js", "MongoDB"],
        github: "https://github.com/avishek0769/cng_sathi",
        link: null
    },
    {
        title: "Blood Donation Social Network",
        points: [
            "Built a blood donation platform connecting donors, requesters, and blood banks for both urgent and scheduled blood requirements.",
            "Implemented location-based donor matching, blood request management, donation verification, gamification, and real-time leaderboards to encourage community participation.",
            "Designed an admin dashboard for monitoring users, blood requests, donations, analytics, and blood bank management, enabling efficient coordination across the platform.",
            "Developed as a hackathon project to improve access to blood during emergencies and streamline the donation process.",
        ],
        tech: ["React Native", "Express.js", "MongoDB"],
        github: "https://github.com/hackathons-labs/SevaSethu",
        link: null
    },
    {
        title: "Welli - Mental Health Wellness",
        points: [
            "Built a mental health support platform featuring an AI-powered chatbot, anonymous peer-to-peer messaging, and a moderated community forum for emotional support.",
            "Implemented secure user authentication, real-time communication, discussion forums, and wellness-focused features to help users connect and seek support in a safe environment.",
            "Developed as a team project for Smart India Hackathon 2025, focusing on making mental health resources more accessible through technology.",
        ],
        tech: ["React Native", "Express.js", "MongoDB"],
        github: "https://github.com/hackathons-labs/Welli",
        link: null
    },
];

const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects Showcase by Avishek Adhikary",
    "description": "Complete list of software projects and systems built by Avishek Adhikary",
    "itemListElement": projectsData.map((project, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
            "@type": "SoftwareApplication",
            "name": project.title,
            "description": project.points[0] || project.title,
            "applicationCategory": "DeveloperApplication",
            "url": project.link || project.github || "https://avishekadhikary.in/projects"
        }
    }))
};

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="All Projects & Software Builds — Avishek Adhikary"
                description="Explore all software engineering projects built by Avishek Adhikary, including AI platforms, cloud IDEs, WebRTC streaming apps, custom DNS/SMTP servers, and CLI developer tools."
                canonical="https://avishekadhikary.in/projects"
                schema={projectsSchema}
            />
            <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-12 lg:px-24 pb-12 bg-black text-white w-full max-w-full overflow-x-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 leading-tight"
                >
                    All Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <article key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                                <ul className="list-disc pl-5 mb-4 text-gray-400 text-xs md:text-sm space-y-1.5 min-h-[9rem] max-h-[12rem] overflow-y-auto pr-2 custom-scrollbar">
                                    {project.points && project.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs md:text-sm text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
                                    >
                                        <Github size={14} />
                                        GitHub
                                    </a>
                                ) : (
                                    <span className="px-4 py-2 bg-gray-800/40 text-gray-500 rounded-full text-xs md:text-sm border border-gray-700/45 flex items-center gap-1.5 cursor-not-allowed">
                                        <Github size={14} />
                                        GitHub
                                    </span>
                                )}

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-md shadow-blue-600/10 flex items-center gap-1.5 text-xs md:text-sm"
                                    >
                                        <ExternalLink size={14} />
                                        Live Demo
                                    </a>
                                ) : (
                                    <span className="px-4 py-2 bg-gray-800/40 text-gray-500 rounded-full text-xs md:text-sm border border-gray-700/45 flex items-center gap-1.5 cursor-not-allowed">
                                        <ExternalLink size={14} />
                                        Live Demo
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllProjects;