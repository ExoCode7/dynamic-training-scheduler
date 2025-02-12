
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
                className="inline-block px-6 py-2 mb-8 text-base font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20 rounded-full"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                {badge}
            </motion.span>
            <motion.h1
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 animate-gradient"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                {title1}
            </motion.h1>
            <motion.h2
                className="mt-6 text-3xl md:text-5xl font-semibold bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent"
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
