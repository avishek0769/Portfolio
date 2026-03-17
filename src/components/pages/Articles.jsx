import React, { useEffect } from 'react';

const articlesData = [
    {
        title: "Understanding WebRTC Internals: ICE, STUN, TURN, and SDP explained",
        platform: "Medium",
        url: "https://medium.com/@avishekadhikary/understanding-webrtc-internals-ice-stun-turn-and-sdp-explained-2e0feff41daf",
        date: "2024",
        excerpt: "A deep dive into WebRTC's inner workings, including ICE candidates, STUN/TURN servers, and Session Description Protocol (SDP)."
    }
];

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24 pb-12 bg-black text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-400">My Articles</h1>
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                {articlesData.map((article, index) => (
                    <a href={article.url} target="_blank" rel="noopener noreferrer" key={index} className="block group">
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-blue-500/50 hover:bg-neutral-800/80 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{article.title}</h2>
                                <span className="text-sm px-3 py-1 bg-black/50 text-gray-300 rounded-full border border-neutral-700">
                                    {article.platform}
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6 text-lg">{article.excerpt}</p>
                            <div className="flex items-center text-sm font-medium text-blue-400">
                                Read Article &rarr;
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Articles;