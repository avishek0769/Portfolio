import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { motion } from 'motion/react';

function Contact() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 py-20 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Get in Touch
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>

                        <div className="flex items-center space-x-6 group">
                            <div className="bg-zinc-800/50 p-4 rounded-xl group-hover:bg-blue-500/20 transition-colors border border-zinc-700 group-hover:border-blue-500/50">
                                <Mail className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-400 mb-1">Email</p>
                                <a href="mailto:avishekadhikary.24@nshm.edu.in" target='_blank' rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-400 transition-colors">
                                    avishekadhikary.24@nshm.edu.in
                                </a>
                            </div>
                        </div>

                        {/* <div className="flex items-center space-x-6 group">
                            <div className="bg-zinc-800/50 p-4 rounded-xl group-hover:bg-blue-500/20 transition-colors border border-zinc-700 group-hover:border-blue-500/50">
                                <Phone className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-400 mb-1">Phone</p>
                                <p className="text-lg font-medium">
                                    +91 8017539739
                                </p>
                            </div>
                        </div> */}

                        <div className="flex items-center space-x-6 group">
                            <div className="bg-zinc-800/50 p-4 rounded-xl group-hover:bg-blue-500/20 transition-colors border border-zinc-700 group-hover:border-blue-500/50">
                                <MapPin className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-400 mb-1">Location</p>
                                <p className="text-lg font-medium">
                                    Kolkata, West Bengal
                                </p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-semibold mb-6 text-blue-400">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://github.com/avishek0769" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-zinc-800 p-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/avishekadhikary" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-zinc-800 p-4 rounded-xl hover:bg-blue-700 hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://twitter.com/avishek0769" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-zinc-800 p-4 rounded-xl hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <Twitter className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Availability & CTA */}
                    <div className="bg-zinc-900/30 p-8 mt-[2rem] rounded-2xl border border-zinc-800 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            I’m open to full-time roles, freelance work, collaborations, or interesting engineering discussions. Feel free to reach out.
                        </p>
                        <a 
                            href="mailto:avishekadhikary.24@nshm.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-blue-600/20 cursor-pointer relative z-20"
                        >
                            <Mail className="w-5 h-5" />
                            Say Hello
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;