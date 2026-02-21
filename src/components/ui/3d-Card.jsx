import { cn } from "../../../lib/utils.js";
import { useRef, useState } from "react";

export const ThreeDCard = ({
    children,
    className,
    containerClassName,
}) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;

            setRotation({ x: rotateX, y: rotateY });
        }
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className={cn("relative group/card", containerClassName)}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={cn(
                    "relative h-full transition-transform duration-200 ease-out",
                    className
                )}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
            >
                {children}
            </div>
        </div>
    );
};