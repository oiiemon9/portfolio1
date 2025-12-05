import { Mail, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-body antialiased">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="font-display text-6xl font-bold text-text-light dark:text-text-dark">
                Get in Touch
              </h1>
              <p className="font-display text-2xl mt-4 text-text-light dark:text-text-dark">
                I'd like to hear from you!
              </p>
              <p className="mt-6 text-base text-form-text-light dark:text-form-text-dark max-w-md">
                If you have any inquiries or just want to say hi, please use the
                contact form!
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <Mail />
                <a
                  href="mailto:yukaidu.doralice@gmail.com"
                  className="text-form-text-light dark:text-form-text-dark hover:underline cursor-pointer"
                >
                  oiiemon9@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone />
                <a
                  href="tel:+8801865557807"
                  className="text-form-text-light dark:text-form-text-dark hover:underline cursor-pointer"
                >
                  +880 1865-557-807
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                    First Name
                  </label>
                  <input
                    className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                    id="first-name"
                    name="first-name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                    Last Name
                  </label>
                  <input
                    className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                    id="last-name"
                    name="last-name"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                  Email *
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                  id="email"
                  name="email"
                  required=""
                  type="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-form-text-light dark:text-form-text-dark">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                  id="message"
                  name="message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-primary text-white py-2 px-8 rounded hover:opacity-90 transition-opacity"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
