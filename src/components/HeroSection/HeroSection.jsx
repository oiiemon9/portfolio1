import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const link = document.createElement('a');
    link.href = '/Emon_Mollah_Resume.pdf';
    link.download = 'Emon_Mollah_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      id="resume"
      className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 antialiased"
    >
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="p-2 bg-cyan-100/50 dark:bg-cyan-900/30 rounded-full"
            variants={avatarVariants}
          >
            <motion.img
              alt="Avatar of Emon mollah"
              className="w-24 h-24 object-cover rounded-full"
              src="https://i.ibb.co.com/LzQv13d2/download.png"
              initial={{ rotate: -6 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>

          <motion.p
            className="text-xl font-medium text-gray-800 dark:text-gray-200"
            variants={itemVariants}
          >
            Hi, I’m Emon 👋
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            A MERN Stack Developer <br /> who builds fast <br /> and modern web
            applications
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            I'm a professional web developer from Bangladesh. Web development is
            my passion, and I enjoy building clean, responsive, high-quality,
            and real-world web applications that solve real problems.
          </motion.p>

          <motion.button
            onClick={handleDownload}
            className="bg-primary text-white dark:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-offset-background-dark dark:focus:ring-gray-500"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            {loading ? 'Loading...' : 'Download Resume'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
