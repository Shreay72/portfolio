import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'IBM Data Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: '2024',
      description:
        'Completed IBMs Data Fundamentals program covering core concepts of data, databases, data ecosystems, and data formats.',
      image: 'https://via.placeholder.com/300x200/2563EB/ffffff?text=IBM+Data+Fundamentals',
      link: '#',
    },
    {
      title: 'Deloitte Forage Data Analytics',
      issuer: 'Deloitte Australia, Forage Platform',
      date: '2024',
      description:
        'Completed a virtual internship focused on data cleaning, data visualization, and business problem-solving.',
      image: 'https://via.placeholder.com/300x200/38BDF8/ffffff?text=Deloitte+Forage',
      link: '#',
    },
    {
      title: 'Business Intelligence Analyst',
      issuer: 'Industry Certification',
      date: '2024',
      description:
        'Comprehensive certification covering BI tools, data analysis, dashboard creation, and business insights.',
      image: 'https://via.placeholder.com/300x200/1E293B/ffffff?text=BI+Analyst',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">
            Certifications & Achievements
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and accomplishments that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <FaCertificate className="text-white text-6xl" />
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-secondary mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-3">{cert.date}</p>
                <p className="text-gray-700 text-sm mb-4">{cert.description}</p>

                {/* Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={cert.link}
                    download
                    className="flex-1 border-2 border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold font-poppins text-secondary mb-6 text-center">
            Other Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-lg text-secondary mb-1">
                Runner-up at MindQuisitive Hackathon
              </h3>
              <p className="text-gray-600">
                Recognized for innovative problem-solving and technical implementation
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-bold text-lg text-secondary mb-1">
                Smart India Hackathon (College Level)
              </h3>
              <p className="text-gray-600">
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
