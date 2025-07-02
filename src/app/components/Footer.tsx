'use client';

import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 mt-4.5 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-7xl mx-auto px-4 py-7">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-secondary">© {new Date().getFullYear()} Kevin Juan Carlos. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <Link href="https://www.github.com/KevinJC23" className="text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.huggingface.co/KevinJuanCarlos23" className="text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                        <SiHuggingface />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kevinjuancarlos" className="text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://www.instagram.com/kvn_jc" className="text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.x.com/kvn_jc23" className="text-2xl text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-300 transition-colors duration-300">
                        <BsTwitterX />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;