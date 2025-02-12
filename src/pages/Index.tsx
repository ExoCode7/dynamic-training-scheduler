
import { ElegantShape } from "@/components/ElegantShape";
import { HeroGeometric } from "@/components/HeroGeometric";
import { SparklesCore } from "@/components/SparklesCore";
import { motion } from "framer-motion";
import { Circle, Calendar, User } from "lucide-react";

const Index = () => {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Particle Effects */}
            <SparklesCore
                particleColor="#ffffff"
                particleDensity={120}
                speed={4}
                className="z-0"
            />

            {/* Elegant Shapes */}
            <ElegantShape
                className="left-0 top-20"
                width={300}
                height={200}
                gradient="from-purple-500/20"
            />
            <ElegantShape
                className="right-0 top-40"
                width={400}
                height={300}
                gradient="from-blue-500/20"
                delay={1}
            />

            {/* Hero Section */}
            <section className="relative z-10 py-24 px-4 mx-auto max-w-screen-xl text-center lg:py-32">
                <HeroGeometric />
                
                {/* Scheduling Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16 max-w-lg mx-auto"
                >
                    <form className="backdrop-blur-xl bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                    Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        id="name"
                                        className="pl-10 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-200 mb-2">
                                    Preferred Date
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="date"
                                        id="date"
                                        className="pl-10 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                    Your Goals
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                    placeholder="Tell us about your fitness goals..."
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                type="submit"
                            >
                                Schedule Training Session
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Personalized Training",
                                description: "Custom workouts tailored to your goals and fitness level",
                            },
                            {
                                title: "Expert Guidance",
                                description: "Professional support from certified trainer Dimitrius",
                            },
                            {
                                title: "Track Progress",
                                description: "Monitor your improvements with detailed progress tracking",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="backdrop-blur-xl bg-black/30 p-6 rounded-xl border border-white/10"
                            >
                                <Circle className="w-10 h-10 mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
