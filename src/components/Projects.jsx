import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ project, isDark, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="h-full group cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <motion.div
        className={`relative h-full rounded-xl overflow-hidden card-shadow transition-all duration-300 ${
          isDark
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-white hover:bg-gray-50'
        }`}
        whileHover={{ y: -10 }}
      >
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-gray-300 dark:bg-gray-700">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} />
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`text-lg md:text-xl font-bold mb-2 line-clamp-1 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>

          <p className={`text-sm md:text-base mb-4 line-clamp-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full font-semibold text-gray-600 dark:text-gray-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Details Button */}
          <motion.button
            className="w-full py-2 px-4 bg-primary text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-primary/90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isDark, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`max-w-2xl w-full rounded-2xl overflow-hidden card-shadow ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-300 dark:bg-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Title and Description */}
              <div>
                <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h2>
                <p className={`text-base md:text-lg leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className={`text-lg font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-sm md:text-base ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className={`text-lg font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt /> View Live
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2 transition-all border-2 ${
                      isDark
                        ? 'border-primary text-primary hover:bg-primary hover:text-white'
                        : 'border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub /> Source Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
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
            <span className="text-primary font-semibold">Portfolio</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className={`mt-4 text-base md:text-lg max-w-2xl ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A selection of my recent work showcasing my skills in web development and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDark={isDark}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
