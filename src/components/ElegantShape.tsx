
"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const pathLength = useTransform([x, y], ([latestX, latestY]) => {
        return Math.sqrt(latestX ** 2 + latestY ** 2);
    });

    useEffect(() => {
        animate(x, width, { duration: 5, repeat: Infinity, repeatType: "mirror" });
        animate(y, height, { duration: 5, repeat: Infinity, repeatType: "mirror", delay });
    }, [x, y, width, height, delay]);

    return (
        <motion.div
            className={cn("absolute", className)}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                rotate,
                background: `linear-gradient(${gradient})`,
                clipPath: `polygon(0% 0%, ${pathLength}% 0%, ${pathLength}% 100%, 0% 100%)`,
            }}
        />
    );
}
