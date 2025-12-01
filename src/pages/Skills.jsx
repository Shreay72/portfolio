import React from 'react';
import { FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiJavascript, SiTailwindcss, SiFlask } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
      ],
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Flask', icon: <SiFlask />, color: 'text-gray-700' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
      ],
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">
            Skills & Technologies
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold font-poppins text-secondary mb-6">
                {skillCategory.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 font-medium text-center">
                      {skill.name}
                    </span>
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
