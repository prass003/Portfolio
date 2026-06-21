import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceCard = ({ item, index, isDark, isEducation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute -left-12 top-6 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Card */}
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`cursor-pointer p-6 md:p-8 rounded-xl transition-all duration-300 card-shadow ${
          isDark
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-white hover:bg-gray-50'
        } border-l-4 border-primary`}
        whileHover={{ y: -5 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {isEducation ? (
                <FaGraduationCap className="text-secondary text-xl" />
              ) : (
                <FaBriefcase className="text-primary text-xl" />
              )}
              <h3 className={`text-lg md:text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
            </div>
            <p className="text-primary font-semibold text-sm md:text-base">
              {item.company || item.university}
            </p>
            <p className={`text-xs md:text-sm mt-1 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {item.duration}
            </p>
          </div>

          {/* Expand icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className={`text-2xl ${isDark ? 'text-primary' : 'text-primary'}`}
          >
            ↓
          </motion.div>
        </div>

        {/* Description */}
        <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>

        {/* Expandable content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {item.responsibilities && (
            <div className={`mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Responsibilities:
              </h4>
              <ul className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.details && (
            <div className={`mt-4 p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {item.details}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const { isDark } = useTheme();
  const { experience, education } = portfolioData;

  return (
    <section
      id="experience"
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
            <span className="text-primary font-semibold">My Journey</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <FaBriefcase className="text-primary" />
              Work Experience
            </motion.h3>

            <div className="relative pl-8 space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

              {experience.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  isDark={isDark}
                  isEducation={false}
                />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <FaGraduationCap className="text-secondary" />
              Education
            </motion.h3>

            <div className="relative pl-8 space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary" />

              {education.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  isDark={isDark}
                  isEducation={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
