import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { isDark } = useTheme();
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
    },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${
        isDark ? 'bg-darker' : 'bg-light'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left side - Text content */}
          <div>
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Greeting */}
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-sm md:text-base font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Hi, I'm <span className="text-gradient">{personal.name}</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-primary">
                  {personal.title}
                </p>
              </div>

              {/* Description */}
              <p className={`text-base md:text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } max-w-lg`}>
                {personal.bio}
              </p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="#projects"
                  className="btn-primary bg-primary text-white text-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,107,107,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className={`btn-primary border-2 text-center transition-all ${
                    isDark
                      ? 'border-primary text-primary hover:bg-primary hover:text-white'
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-6 pt-8 border-t border-gray-300 dark:border-gray-700"
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 text-white hover:bg-primary hover:text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-primary hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 text-white hover:bg-primary hover:text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-primary hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 text-white hover:bg-primary hover:text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-primary hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Image with floating animation */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              animate="animate"
              variants={floatingVariants}
              className="relative w-full max-w-md"
            >
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Image container */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-primary/20">
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl"
                animate={{
                  y: [0, 30, 0],
                  x: [0, 20, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl"
                animate={{
                  y: [0, -30, 0],
                  x: [0, -20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex flex-col items-center gap-2 p-2 rounded-full transition-colors ${
              isDark
                ? 'hover:bg-gray-800'
                : 'hover:bg-gray-200'
            }`}
            aria-label="Scroll to about section"
          >
            <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Scroll
            </span>
            <FaArrowDown className={isDark ? 'text-primary' : 'text-primary'} size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
