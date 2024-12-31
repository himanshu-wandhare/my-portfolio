import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const projects = [
        {
            title: "CarePulse - Healtcare Application",
            description:
                "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
            tech: ["Next.js", "Tailwind CSS", "Appwrite", "Twilio"],
            github: "https://github.com/himanshu-wandhare/healthcare_carepluse",
            live: "https://healthcare-carepluse.vercel.app/",
        },
        {
            title: "E-commerce Store",
            description:
                "E-commerce web application build with Next.js which allows search and buy products. Integreted Stripe payment getaway for smooter payment experience.",
            tech: ["Next.js", "Tailwind CSS", "Stripe", "Prisma ORM"],
            github: "https://github.com/himanshu-wandhare/e-commerce-site",
            live: "https://github.com/himanshu-wandhare/e-commerce-site",
        },
        {
            title: "Video Streaming Application",
            description:
                "A live video streaming application created using React.js & Redux.js. Utilized Redux functionality for efficient state management, RTMP server to stream videos and json server for storing data.",
            tech: ["React.js", "Redux", "JSON Server", "RTMP"],
            github: "https://github.com/himanshu-wandhare/Streamer",
            live: "https://github.com/himanshu-wandhare/Streamer",
        },
    ];

    return (
        <section className="py-20 bg-secondary" id="projects">
            <div className="container mx-auto px-4">
                <h2
                    className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
                    data-aos="fade-down"
                >
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-secondary px-3 py-1 rounded-full text-sm text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                                    >
                                        <GithubIcon size={20} />
                                        <span>Code</span>
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                                        >
                                            <ExternalLinkIcon size={20} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
