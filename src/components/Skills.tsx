import { motion } from "framer-motion";
import { Code2, Database, Laptop, Users } from "lucide-react";

const Skills = () => {
    const skills = [
        {
            category: "Frontend Development",
            icon: <Laptop className="w-6 h-6" />,
            items: [
                "React & Next.js",
                "Vue.js",
                "TypeScript",
                "Tailwind CSS",
                "Responsive Design",
            ],
            color: "bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-700",
            borderColor: "border-blue-200",
            description: "Building modern, responsive web applications",
        },
        {
            category: "Backend Development",
            icon: <Database className="w-6 h-6" />,
            items: [
                "Node & Express.js",
                "MongoDB",
                "PostgreSQL",
                "RESTful APIs",
            ],
            color: "bg-gradient-to-br from-purple-50 to-purple-100/50 text-purple-700",
            borderColor: "border-purple-200",
            description: "Creating robust server-side solutions",
        },
        {
            category: "Development Tools",
            icon: <Code2 className="w-6 h-6" />,
            items: ["Git & GitHub", "Docker", "AWS Cloud", "VS Code"],
            color: "bg-gradient-to-br from-green-50 to-green-100/50 text-green-700",
            borderColor: "border-green-200",
            description: "Leveraging modern development tools",
        },
        {
            category: "Professional Skills",
            icon: <Users className="w-6 h-6" />,
            items: [
                "Problem Solving",
                "Team Spirit",
                "Good Observation",
                "Early Adopter",
            ],
            color: "bg-gradient-to-br from-orange-50 to-orange-100/50 text-orange-700",
            borderColor: "border-orange-200",
            description: "Bringing projects to successful completion",
        },
    ];

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            className="py-24 bg-gradient-to-b from-white to-gray-50"
            id="skills"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                        Comprehensive skillset focused on creating scalable,
                        efficient, and user-centric solutions
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillSet) => (
                            <motion.div
                                key={skillSet.category}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                    boxShadow:
                                        "0 4px 20px -2px rgba(0,0,0,0.1)",
                                }}
                                className={`rounded-xl border ${skillSet.borderColor} p-6 ${skillSet.color} backdrop-blur-sm transition-all duration-300`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-white/80 shadow-sm">
                                        {skillSet.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold leading-tight">
                                        {skillSet.category}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    {skillSet.description}
                                </p>
                                <ul className="space-y-2.5">
                                    {skillSet.items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                                            <span className="font-medium">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
