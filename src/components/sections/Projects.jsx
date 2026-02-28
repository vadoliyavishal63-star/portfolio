import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Cricket E-Commerce Website',
        shortDesc: 'E-Commerce Project',
        description: 'Developed a dynamic cricket products e-commerce website with responsive design and cart functionality.',
        tags: ['React', 'Responsive Design', 'E-Commerce'],
        liveLink: '#',
        githubLink: '#',
        imageColor: 'from-blue-500 to-indigo-600'
    },
    {
        title: 'Music Play',
        shortDesc: 'Music Streaming Website',
        description: 'Developed a music streaming website using PHP, MySQL, HTML, CSS, JavaScript, and YouTube Data API. Fetches and displays trending and recommended songs in real-time. Includes a dedicated music player page, and implements API optimization.',
        tags: ['PHP', 'MySQL', 'JavaScript', 'YouTube Data API'],
        liveLink: '#',
        githubLink: '#',
        imageColor: 'from-emerald-400 to-teal-500'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="corp-card flex flex-col h-full group"
        >
            {/* Abstract Image Placeholder representing professional mockups */}
            <div className={`h-48 w-full bg-gradient-to-tr ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-x-8 -bottom-4 h-32 bg-white rounded-t-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500 opacity-90 border-t border-x border-white" />
            </div>

            <div className="p-8 flex flex-col flex-1">
                <h4 className="text-sm font-bold tracking-wider text-corp-accent uppercase mb-2">
                    {project.shortDesc}
                </h4>

                <h3 className="text-2xl font-bold mb-4 text-corp-primary">
                    {project.title}
                </h3>

                <p className="text-corp-text mb-8 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-100">
                    <a
                        href={project.liveLink}
                        className="flex-1 corp-btn-primary py-2.5 text-sm"
                    >
                        Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                    <a
                        href={project.githubLink}
                        className="corp-btn-secondary py-2.5 px-4"
                        aria-label="View Source on GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative bg-white">
            <div className="container mx-auto px-6 md:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-corp-accent uppercase mb-3">Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-primary mb-4">
                        Recent Client Work & Projects
                    </h3>
                    <p className="text-corp-muted max-w-2xl mx-auto">
                        A selection of recent development projects demonstrating my capability to build functional, scalable, and responsive web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
