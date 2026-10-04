import React from 'react'
import { Database, Layout, Server, Terminal, Brain } from 'lucide-react';
import { motion } from 'motion/react';

function SkillsSection() {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="w-5 h-5 text-cyan-500" />,
            textColor: "text-cyan-300",
            badgeBg: "bg-cyan-500/10 border-cyan-500/25",
            skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "WebSockets (Socket.io)", "GraphQL", "gRPC", "MongoDB", "PostgreSQL", "Redis"]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-5 h-5 text-purple-500" />,
            textColor: "text-purple-300",
            badgeBg: "bg-purple-500/10 border-purple-500/25",
            skills: ["JavaScript", "TypeScript", "React.js", "React Native", "Next.js", "Tailwind CSS"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Terminal className="w-5 h-5 text-pink-500" />,
            textColor: "text-pink-300",
            badgeBg: "bg-pink-500/10 border-pink-500/25",
            skills: ["AWS", "Nginx", "Docker", "CI/CD", "Linux (CLI)"]
        },
        {
            title: "AI & Intelligent Systems",
            icon: <Brain className="w-5 h-5 text-orange-500" />,
            textColor: "text-orange-300",
            badgeBg: "bg-orange-500/10 border-orange-500/25",
            skills: ["OpenAI SDK", "Agent SDK", "RAG", "Vector DB", "Graph memory (Neo4j)", "LangChain", "LangGraph"]
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pt-16 pb-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl text-center sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 leading-tight"
            >
                Skills & Expertise
            </motion.h2>

            <div className="flex flex-col gap-6 mt-12 max-w-5xl mx-auto">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-5 border-b border-zinc-800/60 last:border-0"
                    >
                        <div className="flex items-center gap-3 w-[18rem] shrink-0">
                            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 items-center">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className={`px-3 py-1 rounded-lg text-md font-medium border ${category.badgeBg} ${category.textColor}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection