import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: "Bachelor of Computer Application",
        institution: "NSHM Knowledge Campus, Kolkata",
        year: "2024 - 2027",
        location: "Kolkata, India",
        grade: "Current SGPA: 8.1"
    },
    {
        degree: "Higher Secondary Education",
        institution: "Andrew's High School",
        year: "2022 - 2024",
        location: "Kolkata, India",
        grade: "Percentage: 86.6%"
    }
];

function Education() {
    return (
        <div className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-12"
            >
                <div className="flex flex-col gap-4 items-center text-center mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-center">
                        Education
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        My academic journey and qualifications.
                    </p>
                </div>

                <div className="grid gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors relative overflow-hidden group"
                        >                            
                            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                                <div className="bg-blue-500/20 p-4 rounded-xl border border-blue-500/30">
                                    <GraduationCap className="text-blue-400 w-8 h-8" />
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0 bg-black/30 px-3 py-1 rounded-full">
                                            <Calendar size={14} />
                                            <span>{edu.year}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-blue-300 mb-4 font-medium">
                                        <span>{edu.institution}</span>
                                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                        <div className="flex items-center gap-1 text-gray-400 text-sm font-normal">
                                            <MapPin size={14} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-300 font-medium">
                                        {edu.grade}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Education;
