import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";
// import { WavyBackground } from "./ui/wavy-background";
import { Boxes } from "./ui/background-boxes";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    const socialVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        // <WavyBackground
        //     className="min-h-screen max-w-4xl mx-auto flex items-center justify-center text-white"
        //     colors={["#FF61D8", "#7E69AB", "#4CC9F0", "#4361EE", "#7209B7"]}
        //     waveOpacity={0.4}
        //     backgroundFill="#0f172a"
        // >
        <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />

            <motion.div
                className="max-w-4xl mx-auto text-center text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 relative z-20"
                    variants={itemVariants}
                    whileHover="hover"
                >
                    Hi, I'm Himanshu
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mb-8 text-gray-200 relative z-20"
                    variants={itemVariants}
                    whileHover="hover"
                >
                    Full Stack Developer | UI/UX Enthusiast | Problem Solver
                </motion.p>

                <motion.div
                    className="flex justify-center gap-4 relative z-20"
                    variants={itemVariants}
                >
                    <motion.a
                        href="https://github.com/himanshu-wandhare"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-accent transition-colors"
                        variants={socialVariants}
                        whileHover="hover"
                    >
                        <GithubIcon size={24} />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/himanshu-wandhare-253107216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-accent transition-colors"
                        variants={socialVariants}
                        whileHover="hover"
                    >
                        <LinkedinIcon size={24} />
                    </motion.a>

                    <motion.a
                        href="mailto:himanshuwandhare13@gmail.com"
                        className="p-2 hover:text-accent transition-colors"
                        variants={socialVariants}
                        whileHover="hover"
                    >
                        <MailIcon size={24} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
