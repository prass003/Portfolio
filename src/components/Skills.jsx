import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const SkillCategory = ({ title, skills, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      <h3 className={`text-2xl font-bold mb-6 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          // Dynamically get the icon
          const IconComponent = skill.icon.startsWith('Si')
            ? SiIcons[skill.icon]
            : FaIcons[skill.icon];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`group relative p-4 rounded-xl text-center cursor-pointer transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } card-shadow`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                {IconComponent ? (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="text-3xl md:text-4xl transition-colors duration-300"
                    style={{ color: skill.color || '#FF6B6B' }}
                  >
                    <IconComponent />
                  </motion.div>
                ) : (
                  <div className="text-3xl md:text-4xl">📦</div>
                )}
              </div>

              {/* Text */}
              <h4 className={`font-semibold text-sm md:text-base ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.name}
              </h4>

              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10"
                style={{ backgroundColor: skill.color || '#FF6B6B' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />

              {/* Animated bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-xl"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { isDark } = useTheme();
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  return (
    <section
      id="skills"
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
            <span className="text-primary font-semibold">My Stack</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'frontend' && (
              <SkillCategory
                title="Frontend Development"
                skills={skills.frontend}
                isDark={isDark}
              />
            )}
            {activeTab === 'backend' && (
              <SkillCategory
                title="Backend Development"
                skills={skills.backend}
                isDark={isDark}
              />
            )}
            {activeTab === 'database' && (
              <SkillCategory
                title="Database & Storage"
                skills={skills.database}
                isDark={isDark}
              />
            )}
            {activeTab === 'tools' && (
              <SkillCategory
                title="Tools & DevOps"
                skills={skills.tools}
                isDark={isDark}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Skill Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className={`mt-16 p-6 md:p-8 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          } card-shadow`}
        >
          <p className={`text-sm md:text-base ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm constantly learning and exploring new technologies to stay up-to-date with
            industry trends and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
