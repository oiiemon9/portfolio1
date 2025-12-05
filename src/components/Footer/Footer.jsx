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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-md">
                S
              </div>
              <span className="text-lg font-semibold text-gray-200 dark:text-gray-200">
                slothui
              </span>
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
