import { motion } from 'framer-motion';

const education = [
    {
        year: 'Expected May 2026',
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Atmiya University',
        details: 'Rajkot, Gujarat',
    },
    {
        year: '2017 - 2023',
        degree: 'Higher Secondary Education',
        institution: 'Sanskar School',
        details: 'Completed foundational studies.',
    },
];

const skills = ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'React.js', 'MySQL', 'Graphic Design'];

const About = () => {
    return (
        <section id="about" className="py-20 relative bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-corp-accent uppercase mb-3">About Me</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-primary">
                        Profile & Education
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Professional Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        <h4 className="text-2xl font-bold mb-6 text-corp-primary">Professional Objective</h4>
                        <div className="prose prose-slate lg:prose-lg text-corp-text mb-8">
                            <p>
                                Motivated BCA student with strong skills in Web Development, passionate about building responsive applications, seeking to apply technical skills in a professional IT environment for growth and development.
                            </p>
                        </div>

                        <div>
                            <h5 className="text-sm font-bold uppercase tracking-wider text-corp-muted mb-4">Core Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                className="corp-card p-6 md:p-8 flex flex-col justify-center corp-hover border-l-4 border-l-corp-accent"
                            >
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h4 className="text-lg font-bold text-corp-primary leading-tight">{item.degree}</h4>
                                    <span className="inline-block px-3 py-1 text-xs font-bold text-corp-accent bg-indigo-50 rounded-full whitespace-nowrap">
                                        {item.year}
                                    </span>
                                </div>

                                <h5 className="text-md font-semibold text-slate-600 mb-2">{item.institution}</h5>
                                <p className="text-corp-muted text-sm">{item.details}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
