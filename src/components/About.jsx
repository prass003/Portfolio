import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const { isDark } = useTheme();
  const { personal, about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className={`py-10 md:py-15 ${isDark ? 'bg-darker' : 'bg-white'}`}
    >
      <div className="container-custom ">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-primary font-semibold">About Me</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Who Am I
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative rounded-2xl overflow-hidden card-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <img
                src={personal.image}
                alt={personal.name}
                className="w-full h-full object-cover aspect-square"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className={`absolute -bottom-6 -right-6 p-6 rounded-2xl card-shadow ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
              animate={{
                y: [0, 20, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                1 Year
              </p>
              <p className="text-xs text-primary">Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Main description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Creating Digital Experiences
              </h3>
              <p className={`text-base leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {about.intro}
              </p>
              <p className={`text-base leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {about.description}
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <FaCheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-gray-200 dark:border-gray-700"
        >
          {[
            { number: '1', label: 'Year Experience' },
            { number: '10+', label: 'Projects Completed' },
            { number: '8+', label: 'Happy Clients' },
            { number: '5+', label: 'Technologies' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </h4>
              <p className={`text-sm md:text-base ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
