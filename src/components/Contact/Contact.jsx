import { Mail, Phone } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-background-light dark:bg-background-dark font-body antialiased"
    >
      <motion.div
        className="container mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h1
                className="font-display text-6xl font-bold text-text-light dark:text-text-dark"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="font-display text-2xl mt-4 text-text-light dark:text-text-dark"
                variants={itemVariants}
              >
                I'd like to hear from you!
              </motion.p>
              <motion.p
                className="mt-6 text-base text-form-text-light dark:text-form-text-dark max-w-md"
                variants={itemVariants}
              >
                If you have any inquiries or just want to say hi, please use the
                contact form!
              </motion.p>
            </motion.div>

            <motion.div className="space-y-4 pt-4" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <Mail />
                <motion.a
                  href="mailto:yukaidu.doralice@gmail.com"
                  className="text-form-text-light dark:text-form-text-dark hover:underline cursor-pointer"
                  variants={itemVariants}
                >
                  oiiemon9@gmail.com
                </motion.a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <Phone />
                <motion.a
                  href="tel:+8801865557807"
                  className="text-form-text-light dark:text-form-text-dark hover:underline cursor-pointer"
                  variants={itemVariants}
                >
                  +880 1865-557-807
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <motion.form
              className="space-y-6"
              variants={itemVariants}
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                    First Name
                  </label>
                  <motion.input
                    className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                    id="first-name"
                    name="first-name"
                    type="text"
                    variants={itemVariants}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                    Last Name
                  </label>
                  <motion.input
                    className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                    id="last-name"
                    name="last-name"
                    type="text"
                    variants={itemVariants}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                  Email *
                </label>
                <motion.input
                  className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                  id="email"
                  name="email"
                  required
                  type="email"
                  variants={itemVariants}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                  Message
                </label>
                <motion.textarea
                  className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                  id="message"
                  name="message"
                  rows="4"
                  variants={itemVariants}
                />
              </motion.div>

              <motion.div className="flex justify-end" variants={itemVariants}>
                <motion.button
                  className="bg-primary text-white py-2 px-8 rounded hover:opacity-90 transition-opacity"
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
