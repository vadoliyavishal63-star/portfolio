import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    
    // Add event listeners for hover effects
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };
    
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30
      }
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: 'rgba(59, 130, 246, 0.2)', // Accent color transparent
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent-light dark:border-accent-dark pointer-events-none z-[9999]"
        variants={variants}
        animate={cursorVariant}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full pointer-events-none z-[10000]"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
