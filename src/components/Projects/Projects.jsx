import React from 'react';

const Projects = () => {
  return (
    <section class="bg-background-light dark:bg-background-dark font-display">
      <section class="py-16 sm:py-24">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            My{' '}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              Projects
            </span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <div class="p-8 bg-gray-50 dark:bg-gray-700/50">
                <div class="flex items-center mb-6">
                  <span class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Study Mate
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-md shadow-lg">
                  <img
                    alt="Screenshot of the Study Mate application"
                    class="w-full h-full object-cover object-top"
                    src="https://i.ibb.co.com/qMyNJR2s/screencapture-study-mate-94d47-web-app-2025-12-05-15-53-16-min.png"
                  />
                </div>
              </div>
              <div class="p-8">
                <div>
                  <button className="btn rounded-full btn-sm">Live Link</button>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  Mojju, a venture powered by the professional team at Zeroqode,
                  is at the...
                </p>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <div class="p-8 bg-gray-50 dark:bg-gray-700/50">
                <div class="flex items-center mb-6">
                  <span class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Toy Topia
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-md shadow-lg">
                  <img
                    alt="Screenshot of the Toy Topia application"
                    class="w-full h-full object-cover object-top"
                    src="https://i.ibb.co.com/XZKdnSMm/screencapture-my-toy-topia-web-app-2025-12-05-15-55-55-min.png"
                  />
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Metla
                </h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  An all-in-one crypto frontend for managing coins, NFTs, DeFi
                  activity and a lot more -...
                </p>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <div class="p-8 bg-gray-50 dark:bg-gray-700/50">
                <div class="flex items-center mb-6">
                  <span class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    ShopNow
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-md shadow-lg">
                  <img
                    alt="Screenshot of the ShopNow application"
                    class="w-full h-full object-cover object-top"
                    src="https://i.ibb.co.com/gbXcf0C4/screencapture-shop-now-jet-vercel-app-2025-11-26-19-02-39-min.png"
                  />
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Neurai
                </h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  Zeroqode's AI Kit Template, developed for Rapid Dev, is a
                  practical tool for...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
