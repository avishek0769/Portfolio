import React from "react";
import { motion } from "motion/react";

function AboutMe() {
    return (
        <div className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-12"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl text-center sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 leading-tight"
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="text-white md:w-1/2 flex flex-col gap-6">
                        <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                            <p>
                                I'm{" "}
                                <span className="text-blue-400 font-semibold">
                                    Avishek Adhikary
                                </span>
                                , a{" "}
                                <span className="text-white font-semibold">
                                    Full Stack Developer
                                </span>{" "}
                                from Kolkata, India. I build practical web and mobile products, with a particular focus on{" "}
                                <span className="text-white font-semibold">
                                    backend development
                                </span>{" "}
                                and the systems that make applications{" "}
                                <span className="text-white font-semibold">
                                    reliable and scalable
                                </span>
                                .
                            </p>

                            <p>
                                I've worked on both personal products and real-world projects for businesses, ranging from websites and mobile applications to{" "}
                                <span className="text-white font-semibold">
                                    cloud-based platforms
                                </span>{" "}
                                and{" "}
                                <span className="text-white font-semibold">
                                    developer tools
                                </span>
                                . I enjoy taking an idea from an initial concept to something people can actually use.
                            </p>

                            <p>
                                My approach is simple: understand the problem first, choose the right tools for it, and build software that is{" "}
                                <span className="text-white font-semibold">
                                    reliable
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold">
                                    maintainable
                                </span>
                                , and useful rather than unnecessarily complicated.
                            </p>

                            <p>
                                Outside of building products, I'm continuously exploring{" "}
                                <span className="text-white font-semibold">
                                    system design
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold">
                                    cloud infrastructure
                                </span>
                                , and{" "}
                                <span className="text-white font-semibold">
                                    Generative AI
                                </span>{" "}
                                to understand how modern applications can be designed and scaled better.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-5">
                        {/* How I Build */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-white/3 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
                        >
                            <p className="text-2xl uppercase tracking-widest text-gray-500 font-semibold mb-4">How I build</p>
                            <div className="flex flex-col gap-1">
                                {[
                                    { step: "Understand", desc: "Clarify the real problem before writing a single line of code." },
                                    { step: "Design",     desc: "Plan the structure, data flow, and interfaces with intention." },
                                    { step: "Build",      desc: "Write clean, maintainable code and ship incrementally." },
                                    { step: "Improve",    desc: "Reflect, gather feedback, and refine continuously." },
                                ].map(({ step, desc }, i, arr) => (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.09 }}
                                        viewport={{ once: true }}
                                        className="flex gap-3"
                                    >
                                        {/* Timeline spine */}
                                        <div className="flex flex-col items-center">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                                            {i < arr.length - 1 && (
                                                <span className="w-px flex-1 bg-gradient-to-b from-blue-500/40 to-transparent mt-1" />
                                            )}
                                        </div>
                                        <div className="pb-4">
                                            <p className="text-xl font-semibold text-white leading-none mb-1">{step}</p>
                                            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;
