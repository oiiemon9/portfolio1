import React from 'react';

const Projects = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <div className="p-8 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Study Mate
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-md shadow-lg ">
                  <img
                    alt="Screenshot of the Study Mate application"
                    className="w-full h-full object-cover object-top transition-all duration-7000 ease-linear hover:object-bottom"
                    src="https://i.ibb.co.com/qMyNJR2s/screencapture-study-mate-94d47-web-app-2025-12-05-15-53-16-min.png"
                  />
                </div>
              </div>
              <div className="p-8">
                <div>
                  <a
                    href="https://study-mate-94d47.web.app/"
                    target="_blank"
                    className="btn rounded-full btn-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 mb-4 transition-colors duration-300 mr-2"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/oiiemon9/study-mate-client"
                    target="_blank"
                    className="btn rounded-full btn-sm mb-4"
                  >
                    GitHub
                  </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  StudyMate is a website where students can get help based on
                  their subjects.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <div className="p-8 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Toy Topia
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-md shadow-lg">
                  <img
                    alt="Screenshot of the Toy Topia application"
                    className="w-full h-full object-cover object-top transition-all duration-7000 ease-linear hover:object-bottom"
                    src="https://i.ibb.co.com/XZKdnSMm/screencapture-my-toy-topia-web-app-2025-12-05-15-55-55-min.png"
                  />
                </div>
              </div>
              <div className="p-8">
                <div>
                  <a
                    href="https://my-toy-topia.web.app/"
                    target="_blank"
                    className="btn rounded-full btn-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 mb-4 transition-colors duration-300 mr-2"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/oiiemon9/toy-topia"
                    target="_blank"
                    className="btn rounded-full btn-sm mb-4"
                  >
                    GitHub
                  </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  ToyTopia is a website where all kinds of children’s toys are
                  available.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <div className="p-8 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    ShopNow
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-md shadow-lg">
                  <img
                    alt="Screenshot of the ShopNow application"
                    className="w-full h-full object-cover object-top transition-all duration-7000 ease-linear hover:object-bottom"
                    src="https://i.ibb.co.com/gbXcf0C4/screencapture-shop-now-jet-vercel-app-2025-11-26-19-02-39-min.png"
                  />
                </div>
              </div>
              <div className="p-8">
                <div>
                  <a
                    href="https://shop-now-jet.vercel.app/"
                    target="_blank"
                    className="btn rounded-full btn-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 mb-4 transition-colors duration-300 mr-2"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/oiiemon9/shop-now"
                    target="_blank"
                    className="btn rounded-full btn-sm mb-4"
                  >
                    GitHub
                  </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  ShopNow is an e-commerce website where a seller can sell their
                  own products.
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
