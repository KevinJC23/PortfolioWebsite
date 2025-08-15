'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              { ...fadeInUp } 
              transition={{ delay: 0.4 }} 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5"
            >
              Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Kevin Juan Carlos</span>
            </motion.h1>
            
            <motion.p 
              { ...fadeInUp } 
              transition={{ delay: 0.6 }} 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-6"
            >
              Computer Science Student @President University
            </motion.p>
            
            <motion.div 
              { ...fadeInUp } 
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-4 sm:space-x-6 mb-4 md:mb-6"
            >
                <Link href="https://www.github.com/KevinJC23" className="text-xl sm:text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                    <FaGithub />
                </Link>
                <Link href="https://www.huggingface.co/KevinJuanCarlos23" className="text-xl sm:text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                    <SiHuggingface />
                </Link>
                <Link href="https://www.linkedin.com/in/kevinjuancarlos" className="text-xl sm:text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                    <FaLinkedin />
                </Link>
                <Link href="https://www.instagram.com/kvn_jc" className="text-xl sm:text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                    <FaInstagram />
                </Link>
                <Link href="https://www.x.com/kvn_jc23" className="text-xl sm:text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                    <BsTwitterX />
                </Link>
            </motion.div>

            <motion.div 
              {...fadeInUp} 
              transition={{delay: 1.0}}
              className="flex flex-row sm:flex-row justify-center items-center gap-3 sm:gap-4"
            >
                <Link href="https://drive.google.com/file/d/1b8Vr-N6eVgRYD29VqZqoBI55-sF2CTc5/view?usp=drive_link" passHref>
                    <HoverBorderGradient
                        containerClassName="rounded-full w-fit"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                    >
                        <span>Download CV</span>
                    </HoverBorderGradient>
                </Link>
                
                <Link href="#contact" passHref>
                    <HoverBorderGradient
                        containerClassName="rounded-full w-fit"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                    >
                        <span>Contact Me</span>
                    </HoverBorderGradient>
                </Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero;
