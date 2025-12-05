import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section
      id="my-skills"
      className="bg-background-light dark:bg-background-dark font-display"
    >
      <div className="flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              Skills:
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-2 bg-orange-100/60 dark:bg-orange-900/30 text-gray-800 dark:text-orange-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="HTML5 logo"
                className="w-6 h-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <span>HTML</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-blue-100/60 dark:bg-blue-900/30 text-gray-800 dark:text-blue-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="CSS3 logo"
                className="w-6 h-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <span>CSS</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-cyan-100/60 dark:bg-cyan-900/30 text-gray-800 dark:text-cyan-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="Tailwind CSS logo"
                className="w-6 h-6"
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              />
              <span>Tailwind</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-green-100/60 dark:bg-green-900/30 text-gray-800 dark:text-green-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="Node.js logo"
                className="w-6 h-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <span>Node.js</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-green-100/60 dark:bg-green-900/30 text-gray-800 dark:text-green-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="JavaScript logo"
                className="w-6 h-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <span>JavaScript</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-sky-100/60 dark:bg-sky-900/30 text-gray-800 dark:text-sky-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="React logo"
                className="w-6 h-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <span>React</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-yellow-100/60 dark:bg-yellow-900/30 text-gray-800 dark:text-yellow-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="Firebase logo"
                className="w-6 h-6"
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              />
              <span>Firebase</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-emerald-100/60 dark:bg-emerald-900/30 text-gray-800 dark:text-emerald-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="MongoDB logo"
                className="w-6 h-6"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              />
              <span>MongoDB</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-gray-200/60 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="Express.js logo"
                className="w-6 h-6 dark:invert"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <span>Express.js</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-gray-200/60 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                alt="Next.js logo"
                className="w-6 h-6 dark:invert"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
              <span>Next.js</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
