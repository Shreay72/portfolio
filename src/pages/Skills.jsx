import React from 'react';
import { FaPython, FaHtml5, FaJs, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn, SiMicrosoftexcel, SiJira } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaPython />,
      color: 'bg-blue-500',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'HTML', level: 90 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      title: 'Data & Machine Learning',
      icon: <FaBrain />,
      color: 'bg-purple-500',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 80 },
        { name: 'Scikit-learn', level: 75 },
        { name: 'Data Analysis (EDA)', level: 85 },
        { name: 'Data Preprocessing', level: 80 },
        { name: 'Classification Models', level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools />,
      color: 'bg-green-500',
      skills: [
        { name: 'MS Excel (Advanced)', level: 90 },
        { name: 'JIRA', level: 70 },
        { name: 'ServiceNow', level: 65 },
        { name: 'MS Teams', level: 85 },
        { name: 'Outlook', level: 85 },
      ],
    },
    {
      title: 'Other Skills',
      icon: <FaDatabase />,
      color: 'bg-orange-500',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Customer Support', level: 85 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'UI/UX Basics', level: 70 },
        { name: 'Analytical Thinking', level: 85 },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">
            Skills & Expertise
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`${category.color} text-white text-3xl p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold font-poppins text-secondary">
                  {category.title}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold font-poppins mb-3">Always Learning</h3>
          <p className="text-lg">
            Continuously exploring new technologies and improving my skill set to stay ahead in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
