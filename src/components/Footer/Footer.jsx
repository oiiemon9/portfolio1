import { FacebookIcon, Github, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display p-8 antialiased">
      <footer className="bg-black text-white py-8 px-6 sm:px-10 rounded-2xl w-full container mx-auto">
        <div className="container mx-auto">
          <div className="border-b border-gray-700 mb-8"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
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
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-400 text-center">
              Copyright {new Date().getFullYear()}© Emon
            </div>
            <div className="flex items-center space-x-4">
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://www.linkedin.com/in/emon-mollah-dev/"
                target="_blank"
              >
                <Linkedin className="icon" />
              </a>
              <a
                href="https://github.com/oiiemon9"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
