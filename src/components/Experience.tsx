import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
    {
        title: "MCA",
        location: "Ramdeobaba University",
        period: "2024-26",
        description:
            "Pursuing Master's in Computer Applications with focus on advanced software development and system design. Engaging in comprehensive coursework covering modern development practices and emerging technologies.",
        type: "education",
    },
    {
        title: "Full-Stack Developer",
        location: "Meritest Solution Pvt. Ltd",
        period: "June 2023 - September 2023",
        description:
            "Build reusable components using Vue.js. Integrated front-end components with Laravel functionalities. Collaborated with cross-functional teams to deliver high-quality solutions.",
        type: "work",
    },
];

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <section className="py-20 bg-secondary" id="experience">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
                        Professional Journey
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative flex items-center mb-16 ${
                                    index % 2 === 0
                                        ? "flex-row"
                                        : "flex-row-reverse"
                                }`}
                            >
                                {/* Timeline card */}
                                <div
                                    className={`w-1/2 ${
                                        index % 2 === 0 ? "pr-12" : "pl-12"
                                    }`}
                                >
                                    <motion.div
                                        className="bg-white p-8 rounded-xl shadow-lg border border-primary/10"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow:
                                                "0 10px 30px -15px rgba(0,0,0,0.15)",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <h3 className="text-2xl font-bold text-primary mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-sm font-medium text-primary/60 mb-1">
                                            {exp.location}
                                        </p>
                                        <p className="text-sm font-medium text-primary/60 mb-4">
                                            {exp.period}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Timeline icon */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-md">
                                    {exp.type === "education" ? (
                                        <GraduationCap className="w-7 h-7 text-primary" />
                                    ) : (
                                        <Briefcase className="w-7 h-7 text-primary" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
