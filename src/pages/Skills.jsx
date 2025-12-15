import React from 'react';
import { FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiJavascript, SiTailwindcss, SiFlask } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Programming & Data Science',
      items: [
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500', detail: 'Pandas, NumPy, Matplotlib, Scikit-learn' },
        { name: 'SQL', icon: <SiMysql />, color: 'text-blue-700', detail: 'Data extraction, joins, aggregations' },
      ],
    },
    {
      category: 'Machine Learning & Analytics',
      items: [
        { name: 'Classification Models', icon: <FaPython />, color: 'text-purple-500', detail: 'Fraud Detection, Model Evaluation' },
        { name: 'Data Analysis', icon: <FaPython />, color: 'text-indigo-500', detail: 'EDA, Feature Engineering, Insights' },
      ],
    },
    {
      category: 'Backend & APIs',
      items: [
        { name: 'Flask', icon: <SiFlask />, color: 'text-gray-400', detail: 'REST APIs, SQLAlchemy' },
        { name: 'FastAPI', icon: <FaNodeJs />, color: 'text-green-500', detail: 'JWT auth, API development' },
      ],
    },
    {
      category: 'Frontend & UI',
      items: [
        { name: 'React', icon: <FaReact />, color: 'text-cyan-400', detail: 'Vite, React Router, Axios' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400', detail: 'Responsive design' },
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, color: 'text-orange-600', detail: 'Version control, collaboration' },
        { name: 'Jupyter Notebook', icon: <FaPython />, color: 'text-orange-500', detail: 'Data analysis & prototyping' },
        { name: 'MS Excel', icon: <SiMysql />, color: 'text-green-700', detail: 'Advanced functions, pivot analysis' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background text-textPrimary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
            Skills & Technologies
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="bg-secondary p-8 rounded-xl shadow-lg border border-primary/20">
              <h2 className="text-2xl font-bold font-poppins text-primary mb-6">
                {skillCategory.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-6 rounded-lg bg-background hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group border border-transparent hover:border-primary/50"
                  >
                    <div className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-textPrimary font-medium text-center group-hover:text-primary transition-colors mb-2">
                      {skill.name}
                    </span>
                    {skill.detail && (
                      <span className="text-xs text-textSecondary text-center">
                        {skill.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
