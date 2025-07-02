'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { Navbar as AceternityNavbar, NavBody, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from '../components/ui/resizable-navbar';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills'},
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  const navItems = menuItems.map(item => ({
    name: item.label,
    link: item.href,
  }));

  const CustomNavbarLogo = () => (
    <Link href='/' className='text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
      Kevin Juan Carlos
    </Link>
  );

  const ThemeToggleButton = ({ className = "" }) => (
    <button 
      onClick={ toggleTheme } 
      className={`p-2 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors cursor-pointer ${className}`}
    >
      {theme === 'dark' ? (
        <SunIcon className='w-5 h-5'/>
      ) : (
        <MoonIcon className='w-5 h-5'/>
      )}
    </button>
  );

  return (
    <div className="relative w-full -mt-12 -mb-13 sm:mx-4 md:mx-0 md:-mt-16 z-50">
      <AceternityNavbar>
        <NavBody>
          <CustomNavbarLogo />
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={ item.href } 
                  href={ item.href } 
                  className="transition-colors font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
                >
                  { item.label }
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggleButton />
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <CustomNavbarLogo />
              <MobileNavToggle 
                isOpen={ isMobileMenuOpen }
                onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }
              />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={ isMobileMenuOpen }
            onClose={ () => setIsMobileMenuOpen(false) }
            className="flex flex-col items-center justify-center text-center w-full"
          >
            <div className="w-full max-w-sm mx-auto flex flex-col items-center">
              {menuItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={ `mobile-link-${idx}` }
                    href={ item.href }
                    onClick={ () => setIsMobileMenuOpen(false) }
                    className={ `relative transition-all duration-300 font-medium w-full text-center group ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent' 
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'
                    }`}
                  >
                    <span className={`block py-3 ${
                      !isActive 
                        ? 'hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300' 
                        : ''
                    }`}>
                      { item.label }
                    </span>
                  </Link>
                );
              })}
              
              <div className="flex w-full flex-col gap-4 pt-4">
                <button 
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }} 
                  className="flex items-center justify-center py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-neutral-600 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 w-full group"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className='w-5 h-5 mr-2 group-hover:text-current'/> 
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className='w-5 h-5 mr-2 group-hover:text-current'/> 
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
};

export default Navbar;