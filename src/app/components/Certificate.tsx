'use client';

import React, { useState } from 'react';
import { certificates } from '@/contents/certificate';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = certificates.length;

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) =>
      dir === -1 ? (prev === 0 ? total - 1 : prev - 1) : (prev + 1) % total
    );
  };

  const getPrevIndex = () => (currentIndex - 1 + total) % total;
  const getNextIndex = () => (currentIndex + 1) % total;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const previewVariants = {
    visible: { opacity: 0.4, scale: 0.75 },
    hidden: { opacity: 0.2, scale: 0.7 },
  };

  return (
    <div id="about" className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <section id="certificates" className="py-20 container max-w-7xl mx-auto px-4">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h1>

        <div className="relative flex items-center justify-center">
          <motion.button
            onClick={() => navigate(-1)}
            className="absolute left-4 md:left-8 z-30 text-black dark:text-white p-3 md:p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>

          <div className="relative w-full max-w-5xl overflow-hidden">
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute left-0 md:left-16 hidden md:block"
                style={{ zIndex: 5 }}
                variants={ previewVariants}
                animate="visible"
                whileHover={{ scale: 0.8, opacity: 0.6 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-40 h-28">
                  <img
                    src={ certificates[getPrevIndex()].image }
                    alt="Previous"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Main Image */}
              <div className="relative w-[28rem] md:w-[36rem]">
                <div className="relative w-full pt-[68%]"> 
                  <AnimatePresence mode="wait" custom={ direction }>
                    <motion.div
                      key={ currentIndex }
                      custom={ direction }
                      variants={ slideVariants }
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 },
                      }}
                      className="absolute inset-0"
                    >
                      <div className="bg-white dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                        <img
                          src={ certificates[currentIndex].image }
                          alt={ certificates[currentIndex].title }
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 via-transparent to-transparent" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                className="absolute right-0 md:right-16 hidden md:block"
                style={{ zIndex: 5 }}
                variants={ previewVariants }
                animate="visible"
                whileHover={{ scale: 0.8, opacity: 0.6 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-40 h-28">
                  <img
                    src={ certificates[getNextIndex()].image }
                    alt="Next"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.button
            onClick={ () => navigate(1) }
            className="absolute right-4 md:right-8 z-30 text-black dark:text-white p-3 md:p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>
        </div>

        <div className="text-center mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={ currentIndex }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mt-10 text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                { certificates[currentIndex]?.title }
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Issued by { certificates[currentIndex]?.issuer }
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Certificate;