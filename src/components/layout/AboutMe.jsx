import React from "react";
import { Sparkles, Terminal, Cpu, Layers, Code2, Compass } from "lucide-react";
import { motion } from "motion/react";

function AboutMe() {
    const buildSteps = [
        {
            step: "Understand",
            title: "Problem First",
            desc: "Clarify the core user & business requirements before writing code.",
            color: "text-blue-400",
            borderColor: "border-blue-500",
        },
        {
            step: "Design",
            title: "Architecture & Data",
            desc: "Plan schema, data flow, APIs, and component boundaries with intention.",
            color: "text-purple-400",
            borderColor: "border-purple-500",
        },
        {
            step: "Build",
            title: "Clean Execution",
            desc: "Write maintainable, type-safe code and ship features incrementally.",
            color: "text-pink-400",
            borderColor: "border-pink-500",
        },
        {
            step: "Improve",
            title: "Iterate & Scale",
            desc: "Reflect, measure performance, gather feedback, and optimize continuous integration.",
            color: "text-emerald-400",
            borderColor: "border-emerald-500",
        },
    ];

    const focusAreas = [
        "Backend System Design",
        "Generative & Agentic AI",
    ];

    return (
        <section id="about" className="py-6 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-white relative z-10">
            {/* Header Badge & Title */}
            <div className="flex flex-col items-center text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 leading-tight"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed"
                >
                    Passionate about building scalable systems, intuitive applications, and solving real engineering problems.
                </motion.p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Left Side: Story & Bio Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-blue-400 mb-2">
                            <Terminal size={14} />
                            <span>Who I Am</span>
                        </div>

                        <p className="text-gray-300 text-base leading-relaxed">
                            I'm <span className="text-white font-semibold">Avishek Adhikary</span>, a <span className="text-white font-semibold">Full Stack Developer</span> from Kolkata, India. I build practical web and mobile products, with a particular focus on <span className="text-blue-400 font-semibold">backend development</span> and the systems that make applications <span className="text-blue-400 font-semibold">reliable and scalable</span>.
                        </p>

                        <p className="text-gray-300 text-base leading-relaxed">
                            I've worked on both personal products and real-world projects for businesses, ranging from websites and mobile applications to cloud-based platforms and developer tools. I enjoy taking an idea from an initial concept to something people can actually use.
                        </p>

                        <p className="text-gray-300 text-base leading-relaxed">
                            My approach is simple: understand the problem first, choose the right tools for it, and build software that is reliable, maintainable, and useful rather than unnecessarily complicated.
                        </p>

                        <p className="text-gray-300 text-base leading-relaxed">
                            Outside of building products, I'm continuously exploring <span className="text-purple-400 font-semibold">system design</span>, <span className="text-purple-400 font-semibold">cloud infrastructure</span>, and <span className="text-pink-400 font-semibold">Generative AI</span> to understand how modern applications can be designed and scaled better.
                        </p>
                    </div>

                    {/* Focus Areas Badges */}
                    <div className="mt-8 pt-6 border-t border-zinc-800/80">
                        <p className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-3 flex items-center gap-1.5">
                            <Compass size={14} className="text-purple-400" />
                            Current Explorations &amp; Focus
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {focusAreas.map((area, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 text-gray-300"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: "How I Build" Timeline Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col"
                >
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-purple-400 mb-6">
                        <Layers size={14} />
                        <span>How I Build</span>
                    </div>

                    <div className="flex flex-col gap-6 flex-1 justify-between">
                        {buildSteps.map((item, idx, arr) => (
                            <div key={item.step} className="relative flex gap-4">
                                {/* Spine connector */}
                                <div className="flex flex-col items-center">
                                    <div className={`w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 ${item.borderColor} shrink-0 mt-1 shadow-sm`} />
                                    {idx < arr.length - 1 && (
                                        <div className="w-[2px] flex-1 bg-gradient-to-b from-zinc-700 to-zinc-800/40 mt-1" />
                                    )}
                                </div>

                                <div className="pb-1">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className={`text-md font-bold uppercase tracking-wider ${item.color}`}>
                                            0{idx + 1}. {item.step}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-white mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutMe;
