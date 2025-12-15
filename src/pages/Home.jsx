import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl text-primary font-medium tracking-wide">
            Hello, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-textPrimary leading-tight">
            Shreay Patil
          </h1>
          <h2 className="text-2xl md:text-4xl text-textSecondary font-semibold h-20 md:h-auto">
            I am a{' '}
            <span className="text-accent">
              <Typewriter
                words={['Data Science Enthusiast', 'Python Developer', 'ML Engineer']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary leading-relaxed">
            Data Science Enthusiast and Intermediate Python Developer with hands-on experience transforming raw data into meaningful insights.
            I build machine learning models, automate dashboards, and deliver data-driven outcomes that improve decision-making efficiency.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download
              className="bg-primary text-secondary px-8 py-3 rounded-full font-bold hover:bg-sky-400 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-primary/50"
            >
              <FaDownload /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-secondary transition-colors duration-300 shadow-lg hover:shadow-primary/30"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-start pt-6">
            <a
              href="https://www.linkedin.com/in/shreay-patil-18317b2a3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-primary transition-colors duration-300 text-3xl hover:scale-110 transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Shreay72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-primary transition-colors duration-300 text-3xl hover:scale-110 transform"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:shreay122@gmail.com"
              className="text-textSecondary hover:text-primary transition-colors duration-300 text-3xl hover:scale-110 transform"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Glowing Rings */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-accent/20 animate-spin-slow"></div>

            <div className="w-full h-full rounded-full overflow-hidden border-4 border-secondary shadow-2xl shadow-primary/20 z-10 relative">
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpg`}
                alt="Shreay Patil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
