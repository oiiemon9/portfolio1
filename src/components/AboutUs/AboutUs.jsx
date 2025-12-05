import React from 'react';
import ring from './../../assets/ring.png';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-300"
    >
      <div className="flex items-center justify-center py-24 px-4 sm:px-6 md:px-8">
        <main className="w-full max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              className="relative w-full order-2 lg:order-1"
              variants={itemVariants}
            >
              <div className="relative h-[630px] z-10">
                <motion.img
                  alt="Web developer Emon mollah"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  src="https://i.ibb.co.com/CCd5Lyv/20250804-124826.jpg"
                  variants={itemVariants}
                />
              </div>
              <motion.img
                src={ring}
                alt=""
                className="h-24 w-24 absolute -top-10 -left-10 z-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 flex flex-col justify-center"
              variants={itemVariants}
            >
              <motion.h2
                className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-12"
                variants={itemVariants}
              >
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                  Us
                </span>
              </motion.h2>

              <motion.div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                <motion.p variants={itemVariants}>
                  I am a 20-year-old aspiring web developer committed to
                  building a long and successful career in the tech world. Along
                  my journey, I have already developed several real-world,
                  user-friendly projects that reflect my growing skills and
                  passion for problem-solving.
                </motion.p>
                <motion.p variants={itemVariants}>
                  With a strong combination of intelligence, dedication, and
                  hard work, I am determined to achieve my goals and turn my
                  dreams into reality. I believe in consistency as much as
                  effort—because just as ``small drops of water create a vast
                  ocean``, consistent effort will steadily lead me toward the
                  future I envision.
                </motion.p>
              </motion.div>

              <motion.div className="mt-12" variants={itemVariants}>
                <div className="w-20 h-2 bg-primary dark:bg-slate-400"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </section>
  );
};

export default AboutUs;
