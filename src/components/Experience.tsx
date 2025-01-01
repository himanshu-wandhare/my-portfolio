import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
    {
        title: "MCA",
        location: "Ramdeobaba University",
        period: "2024-26",
        description: [
            "Pursuing Master's in Computer Applications with focus on advanced software development and system design. Engaging in comprehensive coursework covering modern development practices and emerging technologies.",
        ],
        type: "education",
    },
    {
        title: "Full-Stack Developer",
        location: "Meritest Solution Pvt. Ltd",
        period: "June 2023 - September 2023",
        description: [
            "Build reusable components using Vue.js.",
            "Integrated front-end components with Laravel functionalities.",
            "Collaborated with cross-functional teams to deliver high-quality solutions.",
        ],
        type: "work",
        progression: [
            {
                title: "Full-Stack Developer",
                period: "January 2024 - March 2024",
                achievements: [
                    // "Led team of 3 developers in implementing new features",
                    // "Optimized database queries resulting in 40% faster load times",
                    // "Mentored junior developers in React best practices",
                ],
            },
            {
                title: "Intern - Web Development",
                period: "August 2023 - January 2024",
                achievements: [
                    // "Developed and maintained React components",
                    // "Implemented RESTful APIs using Node.js",
                    // "Collaborated in agile development processes",
                ],
            },
        ],
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
                        <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative flex items-center mb-16 ${
                                    index % 2 === 0
                                        ? "md:flex-row flex-col"
                                        : "md:flex-row-reverse flex-col"
                                }`}
                            >
                                {/* Timeline card */}
                                <div
                                    className={`md:w-1/2 w-full ${
                                        index % 2 === 0
                                            ? "md:pr-12 pr-0"
                                            : "md:pl-12 pl-0"
                                    } ${
                                        index % 2 === 0
                                            ? "md:ml-0 ml-auto"
                                            : "md:mr-0 mr-auto"
                                    } relative z-10`}
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
                                        {exp.description.length === 1 ? (
                                            <p className="text-gray-600 leading-relaxed">
                                                {exp.description[0]}
                                            </p>
                                        ) : (
                                            <ul className="list-disc list-inside space-y-1">
                                                {exp.description.map(
                                                    (achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-gray-600 text-sm leading-relaxed"
                                                        >
                                                            {achievement}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                        {exp.progression && (
                                            <div className="mt-6 border-t border-primary/10 pt-6">
                                                <h4 className="text-lg font-semibold text-primary mb-4">
                                                    Career Progression
                                                </h4>
                                                <div className="relative pl-4 border-l-2 border-primary/20">
                                                    {exp.progression.map(
                                                        (role, roleIndex) => (
                                                            <div
                                                                key={roleIndex}
                                                                className="mb-6 last:mb-0 relative"
                                                            >
                                                                <div className="absolute -left-[21px] top-2 w-4 h-4 bg-white border-2 border-primary rounded-full" />
                                                                <h5 className="text-lg font-semibold text-primary flex items-center gap-2">
                                                                    {role.title}
                                                                    {roleIndex ===
                                                                        0 && (
                                                                        <ArrowUpRight className="w-4 h-4 text-accent" />
                                                                    )}
                                                                </h5>
                                                                <p className="text-sm text-primary/60 mb-2">
                                                                    {
                                                                        role.period
                                                                    }
                                                                </p>
                                                                <ul className="list-disc list-inside space-y-1">
                                                                    {role.achievements.map(
                                                                        (
                                                                            achievement,
                                                                            i
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className="text-gray-600 text-sm"
                                                                            >
                                                                                {
                                                                                    achievement
                                                                                }
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
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
