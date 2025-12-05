import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'resume', label: 'Resume' },
  { id: 'about-us', label: 'About Us' },
  { id: 'my-skills', label: 'My Skills' },
  { id: 'education', label: 'Education' },
  { id: 'my-projects', label: 'My Projects' },
  { id: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 100) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDropdownOpen(false); // Close dropdown on link click
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light dark:bg-background-dark font-display antialiased">
      <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white"
          >
            <img
              className="h-12 w-12"
              src="https://i.ibb.co/4Z5YYw8j/Chat-GPT-Image-Dec-5-2025-05-48-32-PM-removebg-preview.png"
              alt="Logo"
            />
            Emon
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleClick(id)}
                className={`transition-colors duration-300 cursor-pointer ${
                  activeSection === id
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Dropdown Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isDropdownOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="md:hidden bg-background-light dark:bg-background-dark px-6 pb-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleClick(id)}
                className={`block py-2 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300 cursor-pointer ${
                  activeSection === id
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>
    </nav>
  );
};

export default NavBar;
