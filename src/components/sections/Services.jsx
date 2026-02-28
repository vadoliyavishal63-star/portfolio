import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaPenNib } from 'react-icons/fa';

const services = [
    {
        title: 'Web Development',
        description: 'I design and develop responsive, fast, and modern websites using HTML, CSS, JavaScript, React, PHP, and MySQL. I focus on clean UI, performance optimization, and mobile-friendly layouts.',
        icon: <FaLaptopCode />,
        colSpan: 'md:col-span-12',
    },
    {
        title: 'UI / UX Design',
        description: 'I create user-friendly and visually appealing UI/UX designs that enhance user experience. I focus on modern layouts, intuitive navigation, and responsive design principles.',
        icon: <FaPaintBrush />,
        colSpan: 'md:col-span-6',
    },
    {
        title: 'Graphic Design',
        description: 'I design creative logos, banners, social media posts, and branding materials with clean and modern aesthetics.',
        icon: <FaPenNib />,
        colSpan: 'md:col-span-6',
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-slate-50">
            <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-corp-accent uppercase mb-3">Core Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-primary mb-4">
                        Specialized Services
                    </h3>
                    <p className="text-corp-muted max-w-2xl mx-auto">
                        Comprehensive frontend development services tailored to deliver modern, efficient, and user-centric digital experiences.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`corp-card p-8 md:p-10 flex flex-col justify-between corp-hover ${service.colSpan}`}
                        >
                            <div className="w-14 h-14 bg-indigo-50 text-corp-accent rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                                {service.icon}
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-corp-primary">
                                    {service.title}
                                </h3>
                                <p className="text-corp-text text-base leading-relaxed max-w-3xl">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
