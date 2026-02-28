import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Web Developer',
        company: '',
        period: '',
        description: 'Developed dynamic and responsive websites using PHP, MySQL, HTML, CSS, JavaScript, and API integration.',
        points: [
            'Worked on backend logic, database management, performance optimization, and responsive UI design.'
        ]
    },
    {
        role: 'Graphic Designer & UI/UX Designer',
        company: '',
        period: '',
        description: 'Designed creative logos, banners, social media posts, and modern website interfaces.',
        points: [
            'Created user-friendly UI/UX designs with focus on usability, wireframing, prototyping, visual hierarchy, and brand consistency to enhance user experience.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-slate-50">
            <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-corp-accent uppercase mb-3">Work History</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-primary">
                        Professional Experience
                    </h3>
                </motion.div>

                <div className="relative border-l-2 border-slate-200 ml-4 md:ml-[130px] space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute w-4 h-4 bg-white border-4 border-corp-accent rounded-full -left-[9px] top-6 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_4px_rgba(79,70,229,0.1)] z-10" />

                            {/* Desktop Period Badge (Left side of timeline) */}
                            <div className="hidden md:flex absolute -left-[140px] top-6 w-[120px] justify-end">
                                <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">
                                    {exp.period ? exp.period.split(' - ')[0] : ''}<br />
                                    <span className="text-xs font-normal text-slate-400">{exp.period ? exp.period.split(' - ')[1] : ''}</span>
                                </span>
                            </div>

                            <div className="corp-card p-6 md:p-8 corp-hover">
                                <div className="mb-4">
                                    {exp.period && (
                                        <div className="flex flex-col md:hidden mb-2">
                                            <span className="text-xs font-semibold text-corp-accent bg-indigo-50 px-3 py-1 rounded-full w-fit">
                                                {exp.period}
                                            </span>
                                        </div>
                                    )}
                                    <h4 className="text-xl font-bold text-corp-primary mb-1">{exp.role}</h4>
                                    {exp.company && <h5 className="text-md font-semibold text-corp-accent">{exp.company}</h5>}
                                </div>

                                <p className="text-slate-600 mb-6 font-medium text-sm border-b border-slate-100 pb-4">
                                    {exp.description}
                                </p>

                                <ul className="space-y-3 text-sm text-corp-text">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0" />
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
