import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { FaTrophy, FaAward, FaStar } from 'react-icons/fa';

const AchievementIcon = ({ index }) => {
  const icons = [FaTrophy, FaAward, FaStar, FaAward];
  const Icon = icons[index % icons.length];
  return <Icon size={32} className="text-primary" />;
};

const Achievements = () => {
  const { isDark } = useTheme();
  const { achievements } = portfolioData;

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

  return (
    <section
      id="achievements"
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
            <span className="text-primary font-semibold">Recognition</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Achievements & Awards
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className={`group relative p-8 rounded-xl card-shadow transition-all duration-300 overflow-hidden ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50'
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r from-primary to-secondary"
              />

              {/* Icon */}
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <AchievementIcon index={index} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-lg md:text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h3>

                <p className="text-primary font-semibold text-sm md:text-base mb-3">
                  {achievement.organization} • {achievement.year}
                </p>

                <p className={`text-sm md:text-base leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>

                {/* Hover effect bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        {portfolioData.testimonials && portfolioData.testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-700"
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              What People Say
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {portfolioData.testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className={`p-8 rounded-xl card-shadow ${
                    isDark ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={16} />
                    ))}
                  </div>

                  {/* Message */}
                  <p className={`mb-6 italic text-base ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{testimonial.message}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className={`font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-primary text-sm font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
