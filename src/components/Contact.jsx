import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

const Contact = () => {
  const { isDark } = useTheme();
  const { contact, personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage('Thanks for reaching out! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Map platform names to icon keys
  const getSocialIcon = (platform) => {
    const iconMap = {
      'GitHub': 'FaGithub',
      'LinkedIn': 'FaLinkedin',
      'Twitter': 'FaTwitter',
      'Instagram': 'FaInstagram',
    };
    return iconMap[platform] || 'FaLink';
  };

  return (
    <section
      id="contact"
      className={`py-10 md:py-15 ${isDark ? 'bg-darker' : 'bg-white'}`}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.div className="inline-block mb-4">
            <span className="text-primary font-semibold">Let's Connect</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className={`mt-4 text-base md:text-lg max-w-2xl ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {[
            {
              icon: FaEnvelope,
              label: 'Email',
              value: contact.email,
              link: `mailto:${contact.email}`,
            },
            {
              icon: FaPhone,
              label: 'Phone',
              value: contact.phone,
              link: `tel:${contact.phone}`,
            },
            {
              icon: FaMapMarkerAlt,
              label: 'Location',
              value: contact.location,
              link: '#',
            },
          ].map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: '-100px' }}
              className={`p-8 rounded-xl card-shadow text-center transition-all duration-300 group hover:scale-105 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50'
              }`}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-4xl text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 10 }}
              >
                <info.icon />
              </motion.div>
              <h3 className={`font-bold text-lg mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {info.label}
              </h3>
              <p className="text-primary font-semibold hover:underline">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form and Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <form  action="https://formspree.io/f/selvaprasanna0@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                    isDark
                      ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700'
                      : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                    isDark
                      ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700'
                      : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
              </div>

              {/* Subject */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                    isDark
                      ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700'
                      : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                    isDark
                      ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700'
                      : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90'
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success/Error Message */}
              <AnimatePresence>
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg text-sm font-semibold text-center ${
                      submitMessage.includes('Thanks')
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Social Links and Additional Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Social Links */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {contact.socialLinks.map((link, index) => {
                  const IconComponent = FaIcons[link.icon];
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800 hover:bg-primary hover:text-white'
                          : 'bg-gray-100 hover:bg-primary hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {IconComponent && <IconComponent size={20} />}
                      <span className="font-semibold text-sm">{link.platform}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Facts */}
            {/* <div className={`p-8 rounded-xl ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Facts
              </h3>
              <ul className={`space-y-3 text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Available for freelance and full-time projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Response time within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Based in {contact.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>5+ years of industry experience</span>
                </li>
              </ul>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Import AnimatePresence for proper animation
import { AnimatePresence } from 'framer-motion';

export default Contact;
