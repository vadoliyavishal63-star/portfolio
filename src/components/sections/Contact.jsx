import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format the WhatsApp message
        const phoneNumber = "918401739715";
        const text = `Hello Vishal,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        setTimeout(() => {
            setIsSubmitting(false);
            window.open(whatsappUrl, '_blank');
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 800);
    };

    const inputClasses =
        "w-full bg-slate-50 border border-slate-200 focus:border-corp-accent focus:ring-1 focus:ring-corp-accent rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-slate-400 text-slate-800 text-sm";

    return (
        <section id="contact" className="py-24 relative bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-corp-accent uppercase mb-3">Get In Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-primary mb-4">
                        Contact Information
                    </h3>
                    <p className="text-corp-muted max-w-2xl mx-auto">
                        Open for new opportunities and collaborations. Feel free to reach out via the provided channels or the contact form below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Contact Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex flex-col justify-between"
                    >
                        <div>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-corp-accent flex items-center justify-center shrink-0 mt-1">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-1">Email Address</h4>
                                        <a href="mailto:vadoliyavishal63@gmail.com" className="text-slate-600 hover:text-corp-accent transition-colors">
                                            vadoliyavishal63@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-corp-accent flex items-center justify-center shrink-0 mt-1">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-1">Phone Number</h4>
                                        <p className="text-slate-600">+91 8401739715</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-corp-accent flex items-center justify-center shrink-0 mt-1">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-1">Location</h4>
                                        <p className="text-slate-600">Rajkot, Gujarat, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12 pt-8 border-t border-slate-100">
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-corp-accent hover:border-corp-accent hover:shadow-sm transition-all">
                                <FaLinkedin />
                            </a>
                            <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-corp-accent hover:border-corp-accent hover:shadow-sm transition-all">
                                <FaGithub />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 corp-card p-8 md:p-10"
                    >
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="text-green-500 text-6xl mb-6 shadow-sm rounded-full">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully</h3>
                                    <p className="text-slate-500">
                                        Thank you for reaching out. I will review your message and respond promptly within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`${inputClasses} resize-none`}
                                                placeholder="How can I help you?"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className={`corp-btn-primary w-full sm:w-auto ${isSubmitting && 'opacity-70 cursor-not-allowed'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">Processing...</span>
                                        ) : (
                                            <>Send Message <FaPaperPlane className="text-xs" /></>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
