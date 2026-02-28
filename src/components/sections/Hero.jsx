import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaEnvelope />, href: 'mailto:vadoliyavishal63@gmail.com', label: "Email" },
    { icon: <FaGithub />, href: '#', label: "GitHub" },
    { icon: <FaLinkedin />, href: '#', label: "LinkedIn" }
];

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="home" className="min-h-screen pt-28 pb-12 flex flex-col justify-center relative overflow-hidden bg-slate-50">
            {/* Subtle background abstract shape */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
                >
                    {/* Main Hero Content */}
                    <div className="flex-1 flex flex-col justify-center">

                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm border border-indigo-100">
                                Available for New Opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
                        >
                            Hello, I'm <br />
                            <span className="text-corp-accent">Vishal Vadoliya.</span>
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-slate-600 font-medium mb-6"
                        >
                            Web Developer based in Rajkot, Gujarat, India.
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-slate-500 text-lg max-w-xl leading-relaxed mb-10"
                        >
                            I specialize in creating clean, optimized, and intuitive user interfaces. Passionate about building web applications that deliver exceptional user experiences and drive business success.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="#projects" className="w-full sm:w-auto corp-btn-primary">
                                View My Work <FaArrowRight className="text-sm" />
                            </a>
                            <a href="/resume.pdf" download className="w-full sm:w-auto corp-btn-secondary">
                                <FaFileDownload /> Get Resume
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Connect:</span>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-corp-accent hover:border-corp-accent hover:shadow-sm transition-all"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column / Clean Graphic */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 w-full max-w-md lg:max-w-lg relative"
                    >
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-indigo-100 to-blue-50 relative p-8">
                            <div className="w-full h-full rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border-8 border-white">
                                <img
                                    src="/profile.png"
                                    alt="Vishal Vadoliya"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Floating success badge */}
                            <div className="absolute bottom-10 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite]">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">✓</div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Status</p>
                                    <p className="text-sm font-bold text-slate-800">Ready to Work</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
