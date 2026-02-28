import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/common/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300">
      <ScrollProgress />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
