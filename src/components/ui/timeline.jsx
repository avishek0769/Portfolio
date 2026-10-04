import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ children }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 15%", "end 85%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full relative" ref={containerRef}>
            <div ref={ref} className="relative pl-6 sm:pl-8">
                {/* Scroll Animated Timeline Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-2.5 sm:left-3.5 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
                    />
                </div>

                {children}
            </div>
        </div>
    );
};
