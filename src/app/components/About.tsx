'use client';

import React from 'react'
import { technologies } from '@/contents/technology';
import { motion } from 'framer-motion';

const About = () => {
  const firstRowTechs = technologies.slice(0, 10);
  const secondRowTechs = technologies.slice(10, 20);

  const duplicatedFirstRow = [...firstRowTechs, ...firstRowTechs];
  const duplicatedSecondRow = [...secondRowTechs, ...secondRowTechs];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .tech-item {
          min-width: 120px;
          width: 120px;
          flex-shrink: 0;
        }

        .scroll-container {
          display: flex;
          width: calc(120px * 20 + 24px * 20); 
        }

        .overflow-container {
          overflow: hidden;
          width: 100%;
        }
      `}</style>

      <div id="about" className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='mt-16 container max-w-7xl mx-auto py-8 sm:py-12 lg:py-16'>
          <section className='mb-20'>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold mt-4 mb-8 sm:mb-12 text-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>

            <div className='-mt-6 space-y-4 sm:space-y-6'>
              <motion.p 
                className='text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-5xl mx-auto text-justify leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hello everyone, my name is Kevin Juan Carlos as a Computer Science student passionate about Artificial Intelligence, Mathematics, Website 
                Development, and currently exploring Cloud Computing. Besides that, I have a strong interest in developing various projects and have worked 
                on several projects related to Artificial Intelligence such as Predictive Analytics, System Recommendation, Integrating LLMs API to Website 
                & Mobile applications, and others, which give me a strong foundation to build another projects. Previously, I had the opportunity to handle 
                client projects from Qatar to craft Object Detection to identify defective and non-defective manufacturing items.
              </motion.p>
              
              <motion.p 
                className='text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-5xl mx-auto text-justify leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Furthermore, I always apply a flexible and thoughtful action when I work as a team and develop some projects to ensure both collaboration and 
                continuous improvement of every step in the process. In my spare time, I enjoy playing strategic games, listening to podcasts, sometimes trying 
                to watch movies, reading something that I am curious about, and getting quality rest to recharge myself to stay productive.
              </motion.p>
            </div>
          </section>

          {/*
          <section className='mb-20'>
            <motion.h1
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Tech Stack
            </motion.h1>
            
            <div className='space-y-6'>
              <div className='overflow-container'>
                <div className='scroll-container animate-scroll-left'>
                  {duplicatedFirstRow.map((tech, index) => (
                    <div
                      key={`${tech.name}-${index}-row1`}
                      className='tech-item flex-shrink-0 mx-3 group cursor-pointer'
                    >
                      <div className='flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-white/50 dark:hover:bg-gray-800/50'>
                        <Icon 
                          icon={tech.icon} 
                          className='h-12 w-12 mb-2 transition-transform duration-300' 
                        />
                        <span className='text-xs font-medium text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='overflow-container -mt-8'>
                <div className='scroll-container animate-scroll-right'>
                  {duplicatedSecondRow.map((tech, index) => (
                    <div
                      key={`${tech.name}-${index}-row2`}
                      className='tech-item flex-shrink-0 mx-3 group cursor-pointer'
                    >
                      <div className='flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-white/50 dark:hover:bg-gray-800/50'>
                        <Icon 
                          icon={tech.icon} 
                          className='h-12 w-12 mb-2 transition-transform duration-300' 
                        />
                        <span className='text-xs font-medium text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          */}
        </div>
      </div>
    </>
  )
}

export default About;