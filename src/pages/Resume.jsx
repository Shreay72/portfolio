import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">
            My Resume
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View or download my complete professional resume
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/resume.pdf"
            download
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 shadow-lg"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 shadow-lg"
          >
            <FaEye /> View in New Tab
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-screen"
            style={{ minHeight: '800px' }}
          />
        </div>

        {/* Alternative - If PDF doesn't load */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Having trouble viewing the resume?</p>
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
