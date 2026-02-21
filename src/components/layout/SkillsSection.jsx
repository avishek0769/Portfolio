import { motion } from 'motion/react'
import React from 'react'
import { ThreeDCard } from '../ui/3d-Card'
import { Database, Layout, Server, Terminal, Brain } from 'lucide-react';
import { Card } from '../ui/card';

function SkillsSection() {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="w-6 h-6 text-cyan-500" />,
            bgColor: "bg-cyan-500/20",
            textColor: "text-cyan-300",
            borderColor: "border-cyan-500/30",
            skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "Next.js (API Routes)", "WebSockets (Socket.io)", "MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis", "Firebase", "Appwrite", "JWT-Auth"]
        },
        {
            title: "Generative AI",
            icon: <Brain className="w-6 h-6 text-orange-500" />,
            bgColor: "bg-orange-500/20",
            textColor: "text-orange-300",
            borderColor: "border-orange-500/30",
            skills: ["OpenAI SDK", "OpenAI Agent SDK", "RAG", "Vector DB", "Memory management", "Graph memory (Neo4j)", "Local LLM (Ollama)", "LangChain", "LangGraph"]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-6 h-6 text-purple-500" />,
            bgColor: "bg-purple-500/20",
            textColor: "text-purple-300",
            borderColor: "border-purple-500/30",
            skills: ["JS/TS", "React.js", "React Native (Mobile Apps)", "Next.js (Pages & SSR)", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            title: "DevOps & Deployment",
            icon: <Terminal className="w-6 h-6 text-pink-500" />,
            bgColor: "bg-pink-500/20",
            textColor: "text-pink-300",
            borderColor: "border-pink-500/30",
            skills: ["AWS", "Nginx", "Docker", "CI/CD", "Linux (CLI)"]
        },
        {
            title: "Tools & Productivity",
            icon: <Database className="w-6 h-6 text-emerald-500" />,
            bgColor: "bg-emerald-500/20",
            textColor: "text-emerald-300",
            borderColor: "border-emerald-500/30",
            skills: ["Git", "GitHub", "Postman"]
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pt-32 pb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {skillCategories.map((category, index) => {
                    const isLong = category.skills.length > 8; // Backend (15) & GenAI (9)
                    const isMedium = category.skills.length > 5 && category.skills.length <= 8 ; // Frontend (7)
                    
                    // Layout logic:
                    // Row 1: Backend (3) + GenAI (3) = 6
                    // Row 2: Frontend (2) + DevOps (2) + Tools (2) = 6
                    
                    let colSpan = "lg:col-span-2";
                    if (category.title === "Backend Development" || category.title === "Generative AI") {
                        colSpan = "lg:col-span-3";
                    }

                    return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`${colSpan} h-full`}
                    >
                        <ThreeDCard className="h-full">
                            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 p-6 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-2 rounded-lg bg-white/5`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3 content-start">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className={`px-3 py-1.5 rounded-md text-sm font-medium border ${category.bgColor} ${category.textColor} ${category.borderColor}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </ThreeDCard>
                    </motion.div>
                    );
                })}
            </div>
        </section>
    )
}

export default SkillsSection