import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold font-poppins">Shreay Patil</h3>
            <p className="text-gray-400 text-sm mt-1">Data Analyst | Web Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/shreay-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/shreay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="mailto:shreay122@gmail.com"
              className="text-gray-400 hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <FaHeart className="text-red-500 mx-1" /> by Shreay Patil
            </p>
            <p className="text-gray-500 text-xs mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
