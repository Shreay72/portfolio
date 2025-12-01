import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Fraud Detection ML System',
      techStack: 'Python, Pandas, NumPy, Scikit-learn',
      description:
        'Built a machine learning model to detect fraudulent transactions using a dataset of 10,000+ records. Performed data cleaning, feature engineering, and exploratory analysis.',
      achievements: [
        'Trained classification models achieving 85%+ accuracy',
        'Improved recall for fraud cases with optimized model tuning',
        'Visualized results and prepared insights for reporting',
      ],
      image: 'https://via.placeholder.com/400x250/2563EB/ffffff?text=Fraud+Detection+ML',
      github: '#',
      demo: '#',
    },
    {
      title: 'Jewellery E-commerce Website',
      techStack: 'HTML, CSS, JavaScript',
      description:
        'Designed and developed a user-friendly e-commerce jewelry selling platform with interactive UI and smooth navigation.',
      achievements: [
        'Built interactive UI with smooth navigation',
        'Created product pages, cart features, and responsive layouts',
        'Applied UI/UX principles to improve user flow',
      ],
      image: 'https://via.placeholder.com/400x250/38BDF8/ffffff?text=E-commerce+Website',
      github: '#',
      demo: '#',
    },
    {
      title: 'Sales/HR Dashboard - Excel',
      techStack: 'Advanced Excel, Power Query, Pivot Tables',
      description:
        'Created automated dashboards for HR attendance and sales analytics, reducing manual reporting efforts significantly.',
      achievements: [
        'Used PivotTables, Power Query, and slicers',
        'Reduced manual reporting efforts by 40%',
        'Visualized KPIs for decision-making',
      ],
      image: 'https://via.placeholder.com/400x250/1E293B/ffffff?text=Excel+Dashboard',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in Data Analytics, Machine Learning, and Web Development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">{project.techStack}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 border-2 border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
