import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const articles = [
    {
        title: "Understanding WebRTC Internals: ICE, STUN, TURN, and SDP explained",
        platform: "Hashnode",
        url: "https://medium.com/@avishekadhikary42/understanding-webrtc-internals-ice-stun-turn-and-sdp-explained-2e0feff41daf",
        date: "Feb 2024",
        excerpt: "A deep dive into WebRTC's inner workings, including ICE candidates, STUN/TURN servers, and Session Description Protocol (SDP)."
    },
    {
        title: "Building Real-Time Collaborative Applications",
        platform: "Hashnode",
        url: "https://avishek-adhikary.hashnode.dev/",
        date: "Jan 2024",
        excerpt: "Exploring the architecture and technologies behind real-time collaborative applications using WebSockets and conflict-free replicated data types."
    },
    {
        title: "Scaling Video Streaming Processing Pipelines",
        platform: "Hashnode",
        url: "https://avishek-adhikary.hashnode.dev/",
        date: "Dec 2023",
        excerpt: "How to design and implement a scalable video transcoding pipeline using FFmpeg, AWS S3, and serverless compute."
    }
];

export const FeaturedArticles = () => {
    return (
        <div className="py-20 px-6 md:px-12 lg:px-24 bg-black text-white relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                            Featured Articles
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Some of my recent writings and technical deep dives.
                        </p>
                    </div>
                    <a 
                        href="https://avishek-adhikary.hashnode.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                    >
                        <span className="font-semibold text-lg">Read all articles</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs px-3 py-1 bg-black text-gray-300 rounded-full border border-zinc-700">
                                    {article.platform}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {article.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 mb-6 flex-grow">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FeaturedArticles;