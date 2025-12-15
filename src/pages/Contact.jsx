import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.send(
        'service_kwyosrt',
        'template_pu4ws64',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'GCieZXnAK5fkBHxar'
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-background text-textPrimary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-xl shadow-lg border border-primary/10">
            <h2 className="text-2xl font-bold font-poppins text-primary mb-6">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-textSecondary font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-700 text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-gray-600"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-textSecondary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-700 text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-gray-600"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-textSecondary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-background border border-gray-700 text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none placeholder-gray-600"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-secondary px-6 py-3 rounded-lg font-bold hover:bg-sky-400 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <FaPaperPlane />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-green-500 font-medium text-center">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-medium text-center">
                  ✗ Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-xl shadow-lg border border-primary/10">
              <h2 className="text-2xl font-bold font-poppins text-primary mb-6">
                Contact Information
              </h2>

              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="bg-primary text-secondary p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">Email</h3>
                  <a
                    href="mailto:shreay72@gmail.com"
                    className="text-accent hover:underline"
                  >
                    shreay72@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-6">
                <div className="bg-primary text-secondary p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">Phone</h3>
                  <a
                    href="tel:+919607679170"
                    className="text-accent hover:underline"
                  >
                    +91-9607679170
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start mb-6">
                <div className="bg-primary text-secondary p-3 rounded-lg mr-4">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/shreay-patil-18317b2a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    linkedin.com/in/shreay-patil-18317b2a3
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start mb-6">
                <div className="bg-primary text-secondary p-3 rounded-lg mr-4">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">GitHub</h3>
                  <a
                    href="https://github.com/Shreay72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    github.com/Shreay72
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-primary text-secondary p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">Location</h3>
                  <p className="text-textSecondary">Nashik, India</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-secondary to-background border border-primary/30 text-textPrimary p-8 rounded-xl text-center shadow-lg">
              <h3 className="text-xl font-bold font-poppins mb-3 text-primary">Let's Connect!</h3>
              <p className="mb-4 text-textSecondary">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/shreay-patil-18317b2a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-primary p-3 rounded-full hover:bg-primary/20 transition-colors duration-300 border border-primary/50"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/Shreay72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-primary p-3 rounded-full hover:bg-primary/20 transition-colors duration-300 border border-primary/50"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="mailto:shreay72@gmail.com"
                  className="bg-background text-primary p-3 rounded-full hover:bg-primary/20 transition-colors duration-300 border border-primary/50"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
