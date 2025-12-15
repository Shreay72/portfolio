import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-textSecondary py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/shreay-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/shreay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:shreay122@gmail.com"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shreay Patil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
