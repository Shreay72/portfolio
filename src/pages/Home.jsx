import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-lg md:text-xl text-primary font-medium">
              Hi, I'm 👋
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-secondary leading-tight">
              Shreay Patil
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-600 font-medium">
              Data Analyst | Web Developer | IT Support Enthusiast
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              I transform raw data into meaningful insights and build clean, user-friendly 
              digital experiences. With strong analytical skills and hands-on experience in 
              Python, Machine Learning, and Excel dashboards, I enjoy solving real-world 
              problems using technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.linkedin.com/in/shreay-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/shreay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="mailto:shreay122@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Shreay Patil"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-60 h-60 bg-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
