import React from 'react';

const NavBar = () => {
  return (
    <nav className=" sticky top-0 z-50">
      <div className="bg-background-light dark:bg-background-dark font-display antialiased">
        <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
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
              <div className="hidden md:flex items-center space-x-8">
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Service
                </a>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Works
                </a>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Products
                </a>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Contact
                </a>
              </div>

              <div className="md:hidden">
                <button className="text-gray-800 dark:text-gray-200 focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </nav>
  );
};

export default NavBar;
