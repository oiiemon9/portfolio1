import { FacebookIcon, Github, Linkedin } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const Footer = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display p-8 antialiased mt-24">
      <motion.footer
        className="bg-black text-white py-8 px-6 sm:px-10 rounded-2xl w-full container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="container mx-auto" variants={containerVariants}>
          <div className="border-b border-gray-700 mb-8"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <motion.div
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <a
                className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 text-white"
                href="/"
              >
                <img
                  className="h-12 w-12"
                  src="https://i.ibb.co.com/4Z5YYw8j/Chat-GPT-Image-Dec-5-2025-05-48-32-PM-removebg-preview.png"
                  alt=""
                />
                Emon
              </a>
            </motion.div>

            <motion.div
              className="text-sm text-gray-400 dark:text-gray-400 text-center"
              variants={itemVariants}
            >
              Copyright {new Date().getFullYear()}© Emon
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://www.linkedin.com/in/emon-mollah-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="icon" />
              </a>
              <a
                href="https://github.com/oiiemon9"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="icon" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.footer>
    </section>
  );
};

export default Footer;
