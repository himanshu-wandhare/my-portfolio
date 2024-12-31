import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                    Get in Touch
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                            <MailIcon className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <a
                            href="mailto:your.email@example.com"
                            className="text-accent hover:underline"
                        >
                            himanshuwandhare13@gmail.com
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                            <PhoneIcon className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <a
                            href="tel:+919657689004"
                            className="text-accent hover:underline"
                        >
                            +91 9657689004
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                            <MapPinIcon className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <p className="text-gray-700">Nagpur, India</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
