import React, { useEffect } from 'react';
import { projectsData } from '../layout/Projects';

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24 pb-12 bg-black text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-400">All Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors">
                        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                        <p className="text-gray-400 mb-4 h-24 overflow-hidden">{project.description}</p>
                        
                        <div className="mb-4 flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-6">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
                                    Code
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;