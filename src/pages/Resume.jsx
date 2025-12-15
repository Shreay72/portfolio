import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen py-20 bg-background text-textPrimary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
            My Resume
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            View or download my complete professional resume
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/resume.pdf"
            download
            className="bg-primary text-secondary px-8 py-3 rounded-lg font-bold hover:bg-sky-400 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-primary/50"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-secondary transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-primary/30"
          >
            <FaEye /> View in New Tab
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-secondary">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-screen"
            style={{ minHeight: '800px' }}
          />
        </div>

        {/* Alternative - If PDF doesn't load */}
        <div className="text-center mt-8">
          <p className="text-textSecondary mb-2">Having trouble viewing the resume?</p>
          <a
            href="/resume.pdf"
            download
            className="text-primary hover:underline font-medium"
          >
            Click here to download directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
