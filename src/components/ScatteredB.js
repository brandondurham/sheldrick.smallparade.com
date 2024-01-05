import React from 'react';
import { motion, useScroll } from 'framer-motion';

const b = {
  start: {
    d: 'M913.09,1530.35l10.99-40.67,163.17,44.1-10.79,39.94c-5.63,20.83-19.03,29.56-41.57,23.47l-20.34-5.5c-14.46-3.91-21.82-11.68-21.76-24.55-6.76,12.37-17.71,14.93-31.67,11.16l-24.01-6.49c-22.54-6.09-29.65-20.63-24.02-41.46ZM1041.06,1577.28c8.58,2.32,14.65.28,17.03-8.54l5.23-19.36-53.9-14.57-4.63,17.15c-2.52,9.31,1.73,15.98,12.02,18.76l24.26,6.55ZM968.34,1558.42c10.29,2.78,17.32-.84,19.83-10.15l4.83-17.89-56.11-15.16-5.43,20.09c-2.32,8.58,1.83,13.64,10.16,15.89l26.71,7.22Z',
    fill: 'transparent',
    rotate: 0,
    scale: 1,
    transition: {
      duration: 5,
      stiffness: 100,
      type: 'spring',
    },
    x: 0,
    y: 0,
  },
  end: {
    d: 'M1589.71,568.29h-82.55V237.09h81.06c42.27,0,65.64,20.89,65.64,66.64v41.28c0,29.34-10.94,47.24-35.31,53.71,26.85,6.46,37.3,25.86,37.3,54.21v48.74c0,45.75-23.87,66.64-66.14,66.64ZM1613.08,302.24c0-17.41-6.96-27.85-24.87-27.85h-39.29v109.41h34.81c18.9,0,29.34-11.44,29.34-32.32v-49.23ZM1614.57,449.44c0-20.89-10.44-32.32-29.34-32.32h-36.3v113.88h40.78c17.41,0,24.87-10.44,24.87-27.35v-54.21Z',
    fill: '#5C63FE',
  },
};

export const ScatteredB = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.svg
      fill="none"
      id="scattered"
      viewBox="0 0 3024 1738"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={ scrollYProgress.current > 0.029 ? 'end' : 'start' }
        variants={b}
      />
    </motion.svg>
  );
};