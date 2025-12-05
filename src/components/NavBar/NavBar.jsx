import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div class="bg-background-light dark:bg-background-dark font-display antialiased">
        <header class="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50">
          <nav class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex-shrink-0">
                <a
                  class="text-2xl font-bold text-gray-900 dark:text-white"
                  href="#"
                >
                  Xander.
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-8">
                <a
                  class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  About
                </a>
                <a
                  class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Service
                </a>
                <a
                  class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Works
                </a>
                <a
                  class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Products
                </a>
                <a
                  class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Contact
                </a>
              </div>

              <div class="md:hidden">
                <button class="text-gray-800 dark:text-gray-200 focus:outline-none">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16m-7 6h7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
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
