'use client';

import React from 'react'
import { technologies } from '@/contents/technology';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Skills = () => {
  const programmingLanguages = technologies.filter(tech => tech.category === 'programming');
  const frameworks = technologies.filter(tech => tech.category === 'framework');
  const tools = technologies.filter(tech => tech.category === 'tool');

  const fallbackProgrammingLanguages = technologies.slice(0, 6);
  const fallbackFrameworks = technologies.slice(6, 12);
  const fallbackTools = technologies.slice(12, 30);

  const progLangs = programmingLanguages.length > 0 ? programmingLanguages : fallbackProgrammingLanguages;
  const frameWorks = frameworks.length > 0 ? frameworks : fallbackFrameworks;
  const toolsData = tools.length > 0 ? tools : fallbackTools;

  const softSkills = [
    { name: 'Adaptability', icon: 'mdi:sync' },
    { name: 'Analytical Thinking', icon: 'mdi:brain' },
    { name: 'Attention to Detail', icon: 'mdi:magnify' },
    { name: 'Collaboration', icon: 'mdi:account-group' },
    { name: 'Communication', icon: 'mdi:forum' },
    { name: 'Continuous Learning', icon: 'mdi:book-open-page-variant' },
    { name: 'Intellectually Curious', icon: 'mdi:lightbulb-on' },
    { name: 'Decision-Making', icon: 'mdi:scale-balance' },
    { name: 'Problem-Solving', icon: 'mdi:puzzle' }
  ];

  type TechCategoryProps = {
    title: string;
    technologies: { name: string; icon: string }[];
    delay?: number;
  };

  const TechCategory: React.FC<TechCategoryProps> = ({ title, technologies, delay = 0 }) => (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        { title }
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        { technologies.map((tech, index) => (
          <motion.div
            key={ tech.name }
            className="flex flex-col items-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 cursor-pointer group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
          >
            <Icon 
              icon={ tech.icon } 
              className="h-6 w-6 mb-2 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300 text-center">
              { tech.name }
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div id="skills" className='container mt-20 max-w-7xl mx-auto py-14'>
      <motion.h1
        className="text-3xl mt-8 font-bold mb-13 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical & Soft Skills
      </motion.h1>

      <div className="space-y-12">
        <motion.div
          className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tech Stack
          </motion.h2>

          <div className="text-center">
            <TechCategory 
              title="Programming Languages" 
              technologies={ progLangs } 
              delay={ 0.1 }
            />
            
            <TechCategory 
              title="Frameworks & Libraries" 
              technologies={ frameWorks } 
              delay={ 0.2 }
            />
            
            <TechCategory 
              title="Tools & Technologies" 
              technologies={ toolsData } 
              delay={ 0.3 }
            />
          </div>
        </motion.div>

        <motion.div
          className="p-6 -mt-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Soft Skills
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={ skill.name }
                className="flex items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Icon 
                  icon={ skill.icon } 
                  className="h-6 w-6 mr-3 text-black dark:text-white transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  { skill.name }
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills;
