import { Timeline } from "../ui/timeline";
import { Github, ExternalLink } from "lucide-react";


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
    }
];

export function Projects() {
    const timelineData = projectsData.map((project) => ({
        title: project.title,
        content: (
            <div className="flex flex-col gap-5">
                {/* Bullet Points */}
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-sm md:text-base">
                    {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {project.tech.map((t, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-sm rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-1">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    ) : (
                        <span className="px-5 py-2.5 bg-gray-800/50 text-gray-500 rounded-full text-sm border border-gray-700/50 flex items-center gap-2 cursor-not-allowed">
                            <Github size={16} />
                            GitHub (Coming Soon)
                        </span>
                    )}

                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 text-sm"
                        >
                            <ExternalLink size={16} />
                            Live Website
                        </a>
                    ) : (
                        <span className="px-5 py-2.5 bg-gray-800/50 text-gray-500 rounded-full text-sm border border-gray-700/50 cursor-not-allowed">
                            Live Website Unavailable
                        </span>
                    )}
                </div>


            </div>
        ),
    }));

    return (
        <div className="w-full py-20">
            <Timeline data={timelineData} />
        </div>
    );
}
