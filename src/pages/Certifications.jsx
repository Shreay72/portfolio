import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Deloitte Virtual Internship – Data Analytics',
      issuer: 'Deloitte Australia, Forage Platform',
      date: '2025',
      description:
        'Gained hands-on exposure to data analysis workflows, business problem understanding, data interpretation, and presenting insights similar to real consulting engagements.',
      image: 'https://via.placeholder.com/300x200/2563EB/ffffff?text=Deloitte+Analytics',
      link: '#',
    },
    {
      title: 'IBM Data Fundamentals Badge',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      description:
        'Built a strong foundation in data concepts including data types, analytics lifecycle, data-driven decision-making, and practical business applications of data.',
      image: 'https://via.placeholder.com/300x200/38BDF8/ffffff?text=IBM+Data+Fundamentals',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background text-textPrimary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
            Certifications & Achievements
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Professional certifications and accomplishments that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 border border-primary/10"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-secondary to-background flex items-center justify-center border-b border-primary/20">
                <FaCertificate className="text-primary text-6xl" />
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-accent font-semibold mb-1">{cert.issuer}</p>
                <p className="text-xs text-textSecondary mb-3">{cert.date}</p>
                <p className="text-textSecondary text-sm mb-4">{cert.description}</p>

                {/* Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-sky-400 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={cert.link}
                    download
                    className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-secondary rounded-xl shadow-lg p-8 border border-primary/20">
          <h2 className="text-3xl font-bold font-poppins text-primary mb-6 text-center">
            Other Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4 bg-background/50 p-4 rounded-r-lg">
              <h3 className="font-bold text-lg text-textPrimary mb-1">
                Runner-up at MindQuisitive Hackathon
              </h3>
              <p className="text-textSecondary">
                Recognized for innovative problem-solving and technical implementation
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4 bg-background/50 p-4 rounded-r-lg">
              <h3 className="font-bold text-lg text-textPrimary mb-1">
                Smart India Hackathon (College Level)
              </h3>
              <p className="text-textSecondary">
                Selected for participation showcasing project development skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
