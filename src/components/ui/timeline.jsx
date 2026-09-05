import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Copy, Check, KeyRound } from "lucide-react";

const CopyButton = ({ value, label }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative group flex items-center justify-between gap-3 bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 rounded-xl px-4 py-2.5 transition-all duration-300 w-full shadow-sm hover:shadow-blue-950/20">
            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">{label}</span>
                <span className="font-mono text-sm text-zinc-200 mt-0.5 select-all">{value}</span>
            </div>
            <button
                onClick={handleCopy}
                title={`Copy ${label}`}
                className={`p-2 rounded-lg border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    copied 
                        ? "bg-green-500/10 border-green-500/30 text-green-400" 
                        : "bg-zinc-800/40 border-zinc-700/50 hover:bg-blue-600 hover:border-blue-500 text-zinc-400 hover:text-white"
                }`}
            >
                {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
        </div>
    );
};

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full max-w-full overflow-x-hidden bg-black font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 mt-[-4rem] mb-[-9rem]">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-center">
                    Projects That Define Me
                </h2>
            </div>

            {/* Shared Demo Credentials Banner */}
            <div className="max-w-2xl mx-auto px-6 mt-14 mb-4">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-zinc-900/80 backdrop-blur-xl p-5 md:p-6 shadow-xl shadow-black/40">
                    {/* Glowing subtle top line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner flex-shrink-0">
                                <KeyRound size={20} className="animate-pulse" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base tracking-wide">
                                    Demo Credentials
                                </h4>
                                <p className="text-gray-400 text-xs mt-0.5">
                                    Same login details apply across all live project demos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <CopyButton label="Username" value="avishek09" />
                        <CopyButton label="Password" value="avishek09" />
                    </div>
                </div>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-900 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-800 borderborder-neutral-700 p-2" />
                            </div>
                            <h3
                                className="hidden md:block text-xl md:pl-20 md:text-5xl font-boldtext-neutral-500 text-white">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3
                                className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%]via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>
    );
};
