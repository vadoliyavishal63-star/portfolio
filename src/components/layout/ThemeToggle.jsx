import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <MdLightMode className="text-xl text-yellow-400" />
        ) : (
          <MdDarkMode className="text-xl text-gray-800" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
