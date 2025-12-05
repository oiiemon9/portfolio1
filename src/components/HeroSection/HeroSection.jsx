import React, { useState } from 'react';

const HeroSection = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const link = document.createElement('a');
    link.href = '/Emon_Mollah_Resume.pdf';
    link.download = 'Emon_Mollah_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <section className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 antialiased">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-4xl">
          <div className="p-2 bg-cyan-100/50 dark:bg-cyan-900/30 rounded-full">
            <img
              alt="Avatar of Emon mollah"
              className="w-24 h-24 object-cover rounded-full"
              src="https://i.ibb.co.com/LzQv13d2/download.png"
            />
          </div>
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
            Hi, I’m Emon 👋
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            A MERN Stack Developer <br /> who builds fast <br /> and modern web
            applications
          </h1>
          <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a professional web developer from Bangladesh. Web development is
            my passion, and I enjoy building clean, responsive, high-quality,
            and real-world web applications that solve real problems.
          </p>
          <button
            onClick={handleDownload}
            className="bg-primary text-white dark:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-offset-background-dark dark:focus:ring-gray-500"
          >
            {loading ? 'Loading...' : 'Download Resume'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
