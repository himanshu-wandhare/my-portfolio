const About = () => {
    return (
        <section className="py-20 bg-secondary" id="about">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 mb-6">
                        I'm a passionate developer with a keen eye for creating
                        beautiful and functional web applications. Throughout my
                        academic journey, I've actively pursued opportunities to
                        apply classroom learning to real-world projects. My
                        passion for development extends beyond the classroom.
                        I've sought out internships and part-time roles where
                        I've had the privilege to contribute to impactful
                        projects and gain hands-on experience.
                    </p>
                    <p className="text-lg text-gray-700">
                        My approach to development combines technical expertise
                        with creative problem-solving. I believe in writing
                        clean, maintainable code and creating intuitive user
                        experiences that make a difference.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
