import React from "react";
import { Timeline } from "../ui/timeline";
import { LinkPreview } from "../ui/link-preview";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Github, Download } from "lucide-react";
import vd1 from "/videotubes/vd1.png"
import vd2 from "/videotubes/vd2.png"
import vd3 from "/videotubes/vd3.png"
import vd4 from "/videotubes/vd4.png"
import q1 from "/quiz/q1.png"
import q2 from "/quiz/q2.png"
import q3 from "/quiz/q3.png"
import q4 from "/quiz/q4.png"
import ide1 from "/ide/ide1.png"
import ide2 from "/ide/ide2.png"
import ide3 from "/ide/ide3.png"
import ide4 from "/ide/ide4.png"
import welli1 from "/welli/welli-1.jpeg"
import welli2 from "/welli/welli-2.jpeg"
import welli3 from "/welli/welli-3.jpeg"
import welli4 from "/welli/welli-4.jpeg"
import welli5 from "/welli/welli-5.jpeg"
import welli6 from "/welli/welli-6.jpeg"
import welli7 from "/welli/welli-7.jpeg"
import welli8 from "/welli/welli-8.jpeg"
import welli9 from "/welli/welli-9.jpeg"
import welli10 from "/welli/welli-10.jpeg"
import welli11 from "/welli/welli-11.jpeg"
import welli12 from "/welli/welli-12.jpeg"
import welli13 from "/welli/welli-13.jpeg"
import videocall1 from "/videocall/videocall-1.png"
import videocall2 from "/videocall/videocall-2.mp4"

const projectsData = [
    {
        title: "Video Streaming Platform",
        description: "A scalable video streaming platform inspired by YouTube, offering multi-resolution playback with manual quality selection and community engagement features.",
        points: [
            "Implemented HLS-based multi-resolution streaming, allowing users to manually switch resolutions.",
            "Built a robust video processing pipeline with AWS & FFmpeg to transcode uploads into multiple resolutions.",
            "Developed a comprehensive community system allowing users to like, comment, and manage playlists."
        ],
        tech: ["HTML", "Tailwind CSS", "JS", "Express.js", "MongoDB", "Docker", "AWS", "FFmpeg"],
        link: "https://avishek.short.gy/videotubes",
        github: "https://github.com/avishek0769/videotubes",
        credentials: "Username: avishek09 | Password: avishek09",
        images: [vd1, vd2, vd3, vd4]
    },
    {
        title: "Collaborative Web IDE",
        description: "A real-time collaborative coding environment enabling developers to write and debug code together instantly.",
        points: [
            "Engineered a real-time collaboration engine using Socket.io for instant code synchronization.",
            "Integrated a secure sandboxed execution environment using Docker to run user code safely.",
            "Designed a responsive UI with syntax highlighting and multi-language support for a seamless coding experience."
        ],
        tech: ["React.js", "Tailwind CSS", "Express.js", "Ngrok", "MongoDB", "Socket.io", "Docker"],
        link: null,
        github: "https://github.com/avishek0769/Cloud-IDE",
        images: [ide1, ide2, ide3, ide4]
    },
    {
        title: "Multiplayer Quiz Web App",
        description: "A real-time quiz battle platform with private room matches, where players join via invite or room id.",
        points: [
            "Architected a low-latency WebSocket infrastructure to handle real-time game state synchronization.",
            "Created a dynamic room management system for private matches and friend challenges.",
            "Implemented a room-specific leaderboard with player profiles to track performance for each game session."
        ],
        tech: ["HTML", "Tailwind CSS", "JS", "Express.js", "MongoDB", "Socket.io", "AWS"],
        link: "https://avishek.short.gy/quiz",
        github: "https://github.com/avishek0769/quiz_app",
        credentials: "Username: avishek09 | Password: avishek09",
        images: [q1, q2, q3, q4]
    },
    {
        title: "Group Video Call Web App",
        description: "A real-time video calling platform supporting both live group video calls and a unique short-recording communication mode.",
        points: [
            "A real-time video calling platform supporting both group video calls and a unique short-recording communication mode.",
            "Two modes: Live Mode for real-time video conferencing and Record Mode for sending short recorded video clips in 1-on-1 sessions.",
            "Room-based connection system enabling secure joining via Room ID, ensuring controlled participation."
        ],
        tech: ["React.js", "Tailwind CSS", "JS", "WebRTC", "MediaSoup", "AWS"],
        link: "https://avishek.short.gy/videocall",
        github: "https://github.com/avishek0769/video-live-and-record-call",
        images: [videocall1, videocall2]
    },
    {
        title: "Welli - Mental Wellness Companion",
        description: "A mental-health support mobile app that offers AI-guided conversations, anonymous peer-to-peer support, community interaction, and access to human counsellors for holistic emotional care.",
        points: [
            "AI-AI-powered chatbot that understands emotions and offers personalized mental health support.",
            "Anonymous peer-to-peer chat and community forum for safe sharing and mutual support.",
            "Smart recommendations (videos and resources) generated from conversation history."
        ],
        tech: ["React Native", "Express.js", "MongoDB", "Socket.io", "AWS", "Python (AI Models)", "Flask"],
        link: null,
        apk: "https://github.com/avishek0769/welli_app_sih_2025/releases/download/v1.0.0/welli-v1.apk",
        github: "https://github.com/avishek0769/welli_app_sih_2025",
        credentials: "Username: avishek09 | Password: avishek09",
        images: [welli1, welli2, welli3, welli4, welli5, welli6, welli7, welli8, welli9, welli10, welli11, welli12, welli13],
        isMobile: true
    }
];

const ImageSlider = ({ images, isMobile }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalIndex, setModalIndex] = React.useState(0);

    // Configuration for visible items
    const itemsPerPage = isMobile ? 3 : 2;
    const maxIndex = Math.max(0, images.length - itemsPerPage);

    const nextSlide = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Keyboard navigation for modal
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;
            
            if (e.key === 'ArrowRight') {
                setModalIndex((prev) => (prev + 1) % images.length);
            } else if (e.key === 'ArrowLeft') {
                setModalIndex((prev) => (prev - 1 + images.length) % images.length);
            } else if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, images.length]);

    return (
        <>
            {/* Inline Slider */}
            <div className={`relative rounded-xl overflow-hidden group border border-white/10 bg-black/50 ${isMobile ? 'h-64' : 'h-48 md:h-64'}`}>
                <motion.div 
                    className="w-full h-full flex"
                    animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {images.map((media, index) => (
                        <div 
                            key={index} 
                            className={`h-full flex-shrink-0 p-1 cursor-pointer ${isMobile ? 'w-1/3' : 'w-1/2'}`}
                            onClick={() => openModal(index)}
                        >
                            <div className="w-full h-full overflow-hidden rounded-lg relative group/image">
                                {typeof media === 'string' && (media.endsWith('.mp4') || media.endsWith('.webm')) ? (
                                    <video
                                        src={media}
                                        className="w-full h-full object-contain bg-black"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img 
                                        src={media} 
                                        alt={`Slide ${index + 1}`} 
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="opacity-0 group-hover/image:opacity-100 text-white text-xs bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                                        Click to expand
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Navigation Buttons */}
                {currentIndex > 0 && (
                    <button 
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}
                {currentIndex < maxIndex && (
                    <button 
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={closeModal}
                    >
                        <button 
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
                        >
                            <X size={32} />
                        </button>

                        <div 
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                             {typeof images[modalIndex] === 'string' && (images[modalIndex].endsWith('.mp4') || images[modalIndex].endsWith('.webm')) ? (
                                <motion.video
                                    key={modalIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    src={images[modalIndex]}
                                    className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl ${isMobile ? 'h-[80vh]' : ''}`}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                            ) : (
                                <motion.img
                                    key={modalIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    src={images[modalIndex]}
                                    alt={`Full screen view ${modalIndex + 1}`}
                                    className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl ${isMobile ? 'h-[80vh]' : ''}`}
                                />
                            )}

                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
                                }}
                                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors"
                            >
                                <ChevronLeft size={48} />
                            </button>

                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setModalIndex((prev) => (prev + 1) % images.length);
                                }}
                                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors"
                            >
                                <ChevronRight size={48} />
                            </button>
                            
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                                {modalIndex + 1} / {images.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export function Projects() {
    const timelineData = projectsData.map((project, index) => ({
        title: project.title,
        content: (
            <div className="flex flex-col gap-6">
                <div className="text-neutral-200 text-base md:text-lg font-normal leading-relaxed">
                    <p className="mb-4 font-medium text-white">{project.description}</p>
                    
                    <ul className="list-disc list-outside ml-5 mb-6 space-y-2 text-gray-300 text-sm md:text-base">
                        {project.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs md:text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        {project.link ? (
                            <LinkPreview url={project.link}>
                                <span className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 text-sm">
                                    Visit Live Site <ChevronRight size={16} />
                                </span>
                            </LinkPreview>
                        ) : project.apk ? (
                            <a 
                                href={project.apk}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all shadow-lg shadow-green-600/20 flex items-center gap-2 text-sm"
                            >
                                <Download size={16} />
                                Download APK
                            </a>
                        ) : (
                            <span className="px-6 py-3 bg-gray-800/50 text-gray-400 rounded-full text-sm border border-gray-700 cursor-not-allowed">
                                Live Link Unavailable
                            </span>
                        )}

                        {project.github && (
                            <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 bg-white/5 rounded-full border border-white/10 text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                <Github size={18} />
                                Source Code
                            </a>
                        )}

                        {project.credentials && (
                            <div className="px-5 py-3 bg-white/5 rounded-xl border border-white/10 text-sm text-gray-300 flex items-center gap-2 hover:bg-white/10 transition-colors">
                                <span className="font-semibold text-blue-400 whitespace-nowrap">Demo:</span>
                                <span className="font-mono text-xs md:text-sm">{project.credentials}</span>
                            </div>
                        )}
                    </div>
                </div>

                <ImageSlider images={project.images} isMobile={project.isMobile} />
            </div>
        ),
    }));

    return (
        <div className="w-full py-20">
            <Timeline data={timelineData} />
        </div>
    );
}
