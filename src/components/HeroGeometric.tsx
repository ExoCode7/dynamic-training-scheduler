
import { motion } from "framer-motion";

export function HeroGeometric({
    badge = "Body Infinite Training",
    title1 = "Transform Your Body",
    title2 = "With Dimitrius",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="text-center">
            <motion.span
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gray-800 text-gray-200 rounded-full"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                {badge}
            </motion.span>
            <motion.h1
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                {title1}
            </motion.h1>
            <motion.h2
                className="mt-4 text-2xl md:text-4xl font-semibold text-gray-300"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={2}
            >
                {title2}
            </motion.h2>
        </div>
    );
}
