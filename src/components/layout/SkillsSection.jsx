import React from 'react'
import { Database, Layout, Server, Terminal, Brain } from 'lucide-react';

function SkillsSection() {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="w-5 h-5 text-cyan-500" />,
            textColor: "text-cyan-300",
            badgeBg: "bg-cyan-500/10 border-cyan-500/25",
            skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "Next.js (API Routes)", "WebSockets (Socket.io)", "GraphQL", "gRPC", "MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis", "JWT-Auth"]
        },
        {
            title: "Generative AI",
            icon: <Brain className="w-5 h-5 text-orange-500" />,
            textColor: "text-orange-300",
            badgeBg: "bg-orange-500/10 border-orange-500/25",
            skills: ["OpenAI SDK", "OpenAI Agent SDK", "RAG", "Vector DB", "Memory management", "Graph memory (Neo4j)", "Local LLM (Ollama)", "LangChain", "LangGraph"]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-5 h-5 text-purple-500" />,
            textColor: "text-purple-300",
            badgeBg: "bg-purple-500/10 border-purple-500/25",
            skills: ["JS/TS", "React.js", "React Native (Mobile Apps)", "Next.js (Pages & SSR)", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            title: "DevOps & Deployment",
            icon: <Terminal className="w-5 h-5 text-pink-500" />,
            textColor: "text-pink-300",
            badgeBg: "bg-pink-500/10 border-pink-500/25",
            skills: ["AWS", "Nginx", "Docker", "CI/CD", "Linux (CLI)", "Firebase", "Appwrite"]
        },
        {
            title: "Tools & Productivity",
            icon: <Database className="w-5 h-5 text-emerald-500" />,
            textColor: "text-emerald-300",
            badgeBg: "bg-emerald-500/10 border-emerald-500/25",
            skills: ["Git", "GitHub", "Postman"]
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pt-16 pb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                {skillCategories.map((category, index) => {
                    let colSpan = "lg:col-span-2";
                    if (category.title === "Backend Development" || category.title === "Generative AI") {
                        colSpan = "lg:col-span-3";
                    }

                    return (
                        <div
                            key={index}
                            className={`${colSpan} bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col`}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2 rounded-lg bg-white/5">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 content-start">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-3 py-1.5 rounded-md text-sm font-medium border ${category.badgeBg} ${category.textColor}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default SkillsSection