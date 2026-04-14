import React, { useEffect, useState } from "react";
import { Vortex } from "../ui/vortex";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "motion/react";
import Me from "/meAvi.jpeg";

export function Hero() {
    const [showTypeWriter, setShowTypeWriter] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowTypeWriter(true)
        }, 700);
    }, [showTypeWriter, setShowTypeWriter])
    

    const words = [
        {
            text: "Turning\u00A0",
            className: "text-white text-3xl md:text-6xl font-bold"
        },
        {
            text: " Concepts\u00A0",
            className: "text-blue-500 text-3xl md:text-6xl font-bold",
        },
        {
            text: "into\u00A0",
            className: "text-white text-3xl md:text-6xl font-bold",
        },
        {
            text: "Systems.",
            className: "text-pink-500 text-3xl md:text-6xl font-bold",
        },
    ];

    return (
        <div className="w-full h-screen overflow-hidden bg-black">
            <Vortex
                particleCount={500}
                backgroundColor="transparent"
                rangeY={250}
                className="flex items-center justify-center w-full h-full"
            >
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row justify-center items-center gap-12 z-10 pt-16">
                    
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-8 md:pt-0">
                        {/* Name and Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                                Avishek Adhikary
                            </h1>
                            <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide mb-6">
                                Full Stack Developer
                            </p>
                        </motion.div>

                        {/* Typewriter Effect */}
                        <div className="min-h-16 flex items-center justify-center md:justify-start w-full mb-6">
                            { showTypeWriter && <TypewriterEffect words={words} className="text-center md:text-left" /> }
                        </div>

                        {/* Introduction Subtext */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-gray-300 max-w-xl text-base md:text-lg leading-relaxed"
                        >
                            Building reliable, modern web and mobile experiences. Learning deeper system design and exploring Generative & Agentic AI to create smarter products.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.5 }}
                            className="flex gap-4 mt-10"
                        >
                            <a 
                                href="#projects"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20"
                            >
                                View Work
                            </a>
                            <a 
                                href="#contact"
                                className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex justify-center md:justify-end items-center"
                    >
                        <div className="w-56 h-56 md:w-80 md:h-80 lg:w-80 lg:h-8w-80 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-white/10 relative">
                            <img 
                                src={Me} 
                                alt="Avishek Adhikary" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </Vortex>
        </div>
    );
}
