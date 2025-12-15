import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bankFraudImg from '../assets/projects/bank_fraud.png';
import aiAgentImg from '../assets/projects/ai_agent.png';
import financeManagerImg from '../assets/projects/finance_manager.png';
import jewelleryImg from '../assets/projects/jewellery.png';

const Projects = () => {
  const projects = [
    {
      title: 'Bank Fraud Detection System',
      techStack: 'Python, Machine Learning, Pandas, NumPy, Scikit-learn',
      description:
        'Worked with 10,000+ banking transaction records, cleaning and preparing data for real-world fraud analysis. Built machine learning models that achieved 85%+ accuracy, helping identify suspicious transactions more reliably. Improved fraud detection quality by reducing false positives through better feature selection.',
      achievements: [
        'Processed 10,000+ transaction records',
        'Achieved 85%+ model accuracy',
        'Reduced false positives significantly',
        'Applied ML to real financial data',
      ],
      image: bankFraudImg,
      github: 'https://github.com/Shreay72/Bank-Fraud-Detection-system',
      demo: '#',
    },
    {
      title: 'AI Agent by Shreay',
      techStack: 'Python, FastAPI, Perplexity API, React, Tailwind CSS',
      description:
        'Built an AI research agent that fetches real-time information from the live internet using the Perplexity API. Designed intelligent responses that summarize complex topics into clear, structured answers with citations. Created a ChatGPT-style interface with dark mode and chat history for better user experience.',
      achievements: [
        'Integrated Perplexity API for live research',
        'Built citation system for transparency',
        'ChatGPT-style dark mode UI',
        'Improved trust with source attribution',
      ],
      image: aiAgentImg,
      github: 'https://github.com/Shreay72/ai-agent-by-shreay',
      demo: '#',
    },
    {
      title: 'Personal Finance Manager',
      techStack: 'Python (Flask), React (Vite), SQLAlchemy, JWT, SQLite',
      description:
        'Built a full-stack finance application that helps users track expenses, budgets, savings goals, and monthly trends. Implemented secure login using JWT authentication and encrypted password storage. Developed dashboards that allow users to understand spending patterns and manage money better.',
      achievements: [
        'Full-stack expense tracking system',
        'JWT authentication & secure storage',
        'Budget & savings goal tracking',
        'Solved authentication & CORS issues',
      ],
      image: financeManagerImg,
      github: 'https://github.com/Shreay72/personal-finance-manager',
      demo: '#',
    },
    {
      title: 'Jewellery E-commerce Website',
      techStack: 'Python, HTML, CSS, JavaScript, Web Technologies',
      description:
        'Final Year Project: Developed a customer-friendly e-commerce website with smooth navigation and optimized checkout flow. Improved usability by applying UI/UX principles, reducing user confusion and errors. Quickly learned new tools and concepts to meet project deadlines.',
      achievements: [
        'Complete e-commerce platform',
        'Optimized UI/UX for better flow',
        'Final Year Academic Project',
        'Delivered user-centered solution',
      ],
      image: jewelleryImg,
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background text-textPrimary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            A showcase of my recent work in Data Analytics, Machine Learning, and Web Development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-secondary rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-secondary p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">{project.techStack}</p>
                <p className="text-textSecondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-secondary px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-accent/20 text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
