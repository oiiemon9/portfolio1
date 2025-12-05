import { Mail, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <section class="bg-background-light dark:bg-background-dark font-body antialiased">
      <div class="container mx-auto px-6 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="flex flex-col space-y-8">
            <div>
              <h1 class="font-display text-6xl font-bold text-text-light dark:text-text-dark">
                Get in Touch
              </h1>
              <p class="font-display text-2xl mt-4 text-text-light dark:text-text-dark">
                I'd like to hear from you!
              </p>
              <p class="mt-6 text-base text-form-text-light dark:text-form-text-dark max-w-md">
                If you have any inquiries or just want to say hi, please use the
                contact form!
              </p>
            </div>
            <div class="space-y-4 pt-4">
              <div class="flex items-center space-x-4">
                <Mail />
                <a
                  href="mailto:yukaidu.doralice@gmail.com"
                  class="text-form-text-light dark:text-form-text-dark hover:underline cursor-pointer"
                >
                  oiiemon9@gmail.com
                </a>
              </div>
              <div class="flex items-center space-x-4">
                <Phone />
                <a
                  href="tel:+8801865557807"
                  class="text-form-text-light dark:text-form-text-dark hover:underline cursor-pointer"
                >
                  +880 1865-557-807
                </a>
              </div>
            </div>
          </div>
          <div class="w-full">
            <form class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    class="block text-sm font-medium text-form-text-light dark:text-form-text-dark"
                    for="first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                    id="first-name"
                    name="first-name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-form-text-light dark:text-form-text-dark"
                    for="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                    id="last-name"
                    name="last-name"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-form-text-light dark:text-form-text-dark"
                  for="email"
                >
                  Email *
                </label>
                <input
                  class="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                  id="email"
                  name="email"
                  required=""
                  type="email"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-form-text-light dark:text-form-text-dark"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class="mt-1 block w-full bg-transparent border-0 border-b border-form-border-light dark:border-form-border-dark focus:ring-0 focus:border-primary text-form-text-light dark:text-form-text-dark"
                  id="message"
                  name="message"
                  rows="4"
                ></textarea>
              </div>
              <div class="flex justify-end">
                <button
                  class="bg-primary text-white py-2 px-8 rounded hover:opacity-90 transition-opacity"
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
