import React from 'react';

const Education = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="flex items-center justify-center">
        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              Education
            </span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:mt-16">
            <div className="flex items-start gap-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  SSC | MUK High School
                </h3>
                <h4 className="font-medium mt-2">2020-2021</h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Subject: Accounting
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  HSC | Gazipur Metropolitan College
                </h3>
                <h4 className="font-medium mt-2">2022-2023</h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Subject: Accounting
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  BBA | National University
                </h3>
                <h4 className="font-medium mt-2">2024 – Present</h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Subject: Accounting
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Education;
