import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img
                src="/profile.jpg"
                alt="Shreay Patil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a <span className="font-semibold text-primary">Computer Science graduate</span> with 
              experience in data analytics, machine learning, and full-stack development. I enjoy 
              converting complex problems into simple, scalable solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              During my academic and project journey, I worked on fraud detection models, sales 
              dashboards, and customer-centric web applications. I'm a fast learner, strong team 
              player, and always excited to explore new technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              My approach to work is simple:
            </p>
            <div className="bg-primary text-white p-6 rounded-lg">
              <p className="text-xl font-semibold text-center">
                Learn fast → Solve smart → Deliver quality
              </p>
            </div>
          </div>
        </div>

        {/* Education & Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-primary text-4xl mb-4">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl font-bold font-poppins text-secondary mb-3">Education</h3>
            <p className="text-gray-700 font-semibold mb-1">B.Sc. Computer Science</p>
            <p className="text-gray-600">Nowrosjee Wadia College, Pune</p>
            <p className="text-gray-500 text-sm mt-2">2022 - 2025</p>
            <p className="text-gray-600 mt-1">CGPA: 5.93/10.0</p>
          </div>

          {/* Experience */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-primary text-4xl mb-4">
              <FaBriefcase />
            </div>
            <h3 className="text-xl font-bold font-poppins text-secondary mb-3">Experience</h3>
            <p className="text-gray-700 font-semibold mb-1">Data Science Intern</p>
            <p className="text-gray-600">The Developers Arena</p>
            <p className="text-gray-500 text-sm mt-2">Recent Selection</p>
            <p className="text-gray-600 mt-3">Machine Learning | Data Analysis</p>
          </div>

          {/* Skills Highlight */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-primary text-4xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold font-poppins text-secondary mb-3">Key Strengths</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Fast Learner</li>
              <li>✓ Team Player</li>
              <li>✓ Analytical Thinker</li>
              <li>✓ Problem Solver</li>
              <li>✓ Adaptable</li>
            </ul>
          </div>
        </div>

        {/* Open To Section */}
        <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold font-poppins mb-4">Open To</h3>
          <p className="text-lg">
            Full-time Roles | Internships | Freelancing | Hybrid/Remote Positions
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
