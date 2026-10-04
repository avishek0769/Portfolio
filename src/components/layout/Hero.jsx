import React, { useEffect, useState } from "react";
import { Vortex } from "../ui/vortex";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "motion/react";

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
                particleCount={700}
                backgroundColor="transparent"
                rangeY={270}
                className="flex items-center justify-center w-full h-full"
            >
                <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center z-10">

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
                    <div className="min-h-16 flex items-center justify-center lg:w-[65rem] md:w-[45rem] mb-6 mt-6">
                        {showTypeWriter && <TypewriterEffect words={words} className="text-center" />}
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
            </Vortex>
        </div>
    );
}
