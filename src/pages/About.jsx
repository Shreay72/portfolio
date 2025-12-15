import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-background text-textPrimary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-secondary shadow-xl shadow-primary/20">
              <img
                src="/profile.jpg"
                alt="Shreay Patil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6 text-textSecondary text-lg leading-relaxed">
            <p className="text-xl font-semibold text-primary">
              Data Science Enthusiast | Python Developer | Problem Solver
            </p>
            <p>
              I'm a <span className="font-semibold text-primary">Data Science Enthusiast and Intermediate Python Developer</span> with hands-on experience transforming raw data into meaningful insights using Python, SQL, and Excel.
            </p>
            <p>
              I have proven ability to build machine learning models, automate dashboards, and deliver data-driven outcomes that improve decision-making efficiency. With a strong foundation in data preprocessing, exploratory data analysis, and model evaluation, I bring a continuous learning mindset backed by practical exposure through real-world projects.
            </p>

            {/* Core Competencies */}
            <div className="bg-secondary p-6 rounded-lg border border-primary/20 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Core Competencies</h3>
              <ul className="space-y-2 text-textSecondary">
                <li className="flex items-start"><FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" /> Turning raw data into clear insights that support real decisions</li>
                <li className="flex items-start"><FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" /> Building machine learning models that solve practical business problems</li>
                <li className="flex items-start"><FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" /> Writing clean, reusable Python code for data analysis and automation</li>
                <li className="flex items-start"><FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" /> Explaining technical results in simple, human-friendly language</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <div className="bg-secondary p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/30 transition-all duration-300">
            <div className="text-primary text-4xl mb-4">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl font-bold font-poppins text-textPrimary mb-3">Education</h3>
            <p className="text-accent font-semibold mb-1">B.Sc. Computer Science</p>
            <p className="text-textSecondary">Nowrosjee Wadia College, Pune</p>
            <p className="text-gray-500 text-sm mt-2">2022 - 2025</p>
            <p className="text-textSecondary text-sm mt-2">Relevant Coursework: Data Analytics, DBMS, Statistics, Python</p>
          </div>

          {/* Experience */}
          <div className="bg-secondary p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/30 transition-all duration-300">
            <div className="text-primary text-4xl mb-4">
              <FaBriefcase />
            </div>
            <h3 className="text-xl font-bold font-poppins text-textPrimary mb-3">Experience</h3>
            <p className="text-accent font-semibold mb-1">Data Science Intern</p>
            <p className="text-textSecondary">Developers Arena (Remote)</p>
            <p className="text-gray-500 text-sm mt-2">2025 - Present</p>
            <p className="text-textSecondary text-sm mt-3">Working on data cleaning, analysis, and ML models with Python</p>
          </div>

          {/* Professional Strengths */}
          <div className="bg-secondary p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/30 transition-all duration-300">
            <div className="text-primary text-4xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold font-poppins text-textPrimary mb-3">Key Strengths</h3>
            <ul className="text-textSecondary space-y-2">
              <li>✓ Analytical Mindset</li>
              <li>✓ Fast Learner</li>
              <li>✓ Team Player</li>
              <li>✓ Problem Solver</li>
              <li>✓ Strong Work Ethic</li>
            </ul>
          </div>
        </div>

        {/* Open To Section */}
        <div className="bg-gradient-to-r from-secondary to-background border border-primary/30 text-textPrimary p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl font-bold font-poppins mb-4 text-primary">Open To Opportunities</h3>
          <p className="text-lg">
            Data Analyst Roles | Data Science Positions | Python Developer Roles | Full-time & Internships
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
