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
        <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
            <Vortex
                particleCount={500}
                backgroundColor="black"
                rangeY={250}
                className="flex items-center flex-col justify-center px-2 py-4 w-full h-full"
            >
                <div className=" w-full h-full flex flex-col justify-center items-center gap-6 z-10">
                    
                    {/* Profile Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
                            {/* Replace src with your actual profile image path */}
                            <img 
                                // src="https://ui-avatars.com/api/?name=Avishek+Adhikary&background=0D8ABC&color=fff&size=256" 
                                src={Me} 
                                alt="Avishek Adhikary" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Name and Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                            Avishek Adhikary
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
                            Full Stack Developer
                        </p>
                    </motion.div>

                    {/* Typewriter Effect */}
                    <div className="mt-4">
                        { showTypeWriter && <TypewriterEffect words={words} /> }
                    </div>

                    {/* Introduction Subtext */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-gray-300 text-center max-w-2xl px-4 text-sm md:text-base leading-relaxed"
                    >
                        Building reliable, modern web and mobile experiences. Learning deeper system design and exploring Generative & Agentic AI to create smarter products.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="flex gap-4 mt-8"
                    >
                        <a 
                            href="#projects"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20"
                        >
                            View Work
                        </a>
                        <a 
                            href="#contact"
                            className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </Vortex>
        </div>
    );
}
