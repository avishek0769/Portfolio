import React from 'react'
import { motion } from 'motion/react';

function AboutMe() {
    return (
        <div className='py-20 px-4 md:px-10 max-w-7xl mx-auto'>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='flex flex-col gap-12'
            >
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                    The Mind Behind the Screen
                </h2>

                <div className='flex flex-col md:flex-row gap-12 items-center'>
                    <div className='text-white md:w-1/2 flex flex-col gap-6'>
                        <div className='text-lg text-gray-300 leading-relaxed space-y-4'>
                        <p>
                            I'm <span className="text-blue-400 font-semibold">Avishek Adhikary</span>, a <span className="text-white font-semibold">Full Stack Developer</span> based in Kolkata who enjoys building practical
                            and reliable products across web and mobile. My work primarily revolves around <span className="text-white font-semibold">backend development</span>, where I focus on writing <span className="text-white font-semibold">clean, maintainable code</span> and building systems that are efficient and meaningful.
                        </p>
                        <p>
                            I’m actively learning <span className="text-white font-semibold">system design</span> and <span className="text-white font-semibold">scalable architecture</span>, and I constantly apply these concepts to the backends I build, making them more structured,
                            resilient, and prepared for growth. Alongside development, I also manage the essential <span className="text-white font-semibold">DevOps responsibilities</span> required to support smooth development and deployment workflows.
                        </p>
                        <p>
                            I’m also exploring <span className="text-white font-semibold">Generative AI</span> and <span className="text-white font-semibold">Agentic AI</span>, aiming to integrate intelligent capabilities into real-world applications. My goal is to continuously improve, stay curious,
                            and build technology that is <span className="text-white font-semibold">reliable, impactful, and future-ready</span>.
                        </p>
                        </div>
                    </div>
                
                <div className='md:w-1/2 w-full'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: "Experience", value: "Self-driven", desc: "Building web & mobile projects while implementing DevOps practices" },
                            { title: "Projects", value: "15+", desc: "Completed personal projects with MERN and React Native" },
                            { title: "Exploration", value: "System Design & AI", desc: "Applying scalable architecture concepts and experimenting with Generative & Agentic AI" },
                            { title: "Focus", value: "Backend-first", desc: "Prioritizing robust, maintainable, and scalable backend systems in every project" }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col justify-center"
                            >
                                <h3 className="text-3xl font-bold text-blue-400 mb-4">{item.title}</h3>
                                <h4 className="text-xl font-semibold text-white mb-3">{item.value}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe