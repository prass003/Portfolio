import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { FaArrowUp } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
  const { isDark } = useTheme();
  const { contact, personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`${isDark ? 'bg-darker border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-gradient">{personal.name}</span>
            </h3>
            <p className={`text-sm leading-relaxed max-w-xs ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {personal.bio}
            </p>
            <div className="flex gap-4 pt-4">
              {contact.socialLinks.map((link, index) => {
                const IconComponent = FaIcons[link.icon];
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800 text-white hover:bg-primary'
                        : 'bg-gray-100 text-gray-900 hover:bg-primary'
                    } hover:text-white`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.platform}
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className={`text-sm transition-all duration-300 hover:text-primary ${
                      isDark ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className={`block transition-all duration-300 hover:text-primary ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className={`block transition-all duration-300 hover:text-primary ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {contact.phone}
              </a>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {contact.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`my-8 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'}`} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-sm text-center md:text-left ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            {/* {personal.name}  */}
           Copyrights &copy; {currentYear} . All rights reserved.
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-gray-800 text-white hover:bg-primary'
                : 'bg-gray-100 text-gray-900 hover:bg-primary'
            } hover:text-white`}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </motion.button>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex gap-6 text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'} py-4`}
      >
        <div className="container-custom">
          <p className={`text-xs text-center leading-relaxed ${
            isDark ? 'text-gray-500' : 'text-gray-600'
          }`}>
            <strong>Disclaimer:</strong> This portfolio website is a personal project showcasing my work and skills. 
            All content is for demonstration purposes. Please contact me directly for any professional inquiries.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
