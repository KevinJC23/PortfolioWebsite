'use client';

import { projects } from '@/contents/project'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { GlowingEffect } from '../components/ui/glowing-effect'
import { technologies } from '@/contents/technology';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id="about" className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <section id="projects" className='py-22 container max-w-7xl mx-auto px-4'>
        <motion.h1
          className="text-3xl font-bold mb-9 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <ProjectCard key={ project.title } project={ project } />
          ))}
        </div>
      </section>
    </div>
  )
}

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <>
      <Card>
        <CardSkeletonContainer>
          <div className='relative w-full h-full rounded-xl overflow-hidden'>
            <Image 
              src={ project.image } 
              alt={ project.title } 
              fill 
              className='object-cover' 
              sizes='(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw'
            />
          </div>
        </CardSkeletonContainer>
        <CardTitle>{ project.title }</CardTitle>
        <CardDescription>
          { project.description }
        </CardDescription>
        <div className='flex flex-wrap gap-2 mb-4'>
          { project.technologies.map((tech: string) => (
            <TechBadge key={ tech } tech={ tech } />
          ))}
        </div>
        <div className='flex gap-4 mt-2'>
          <ProjectLink href={ project.githubLink } icon={ <FaGithub className='w-4 h-4'/> } label="Code" />
          {project.demoLink && project.demoLink.trim() !== '' && (
            <ProjectLink href={ project.demoLink } icon={ <FaExternalLinkAlt className='w-4 h-4'/> } label="Live Demo" />
          )}
        </div>
      </Card>
    </>
  )
}

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-sm w-full mx-auto">
      <div className={cn(
        "relative p-6 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group hover:shadow-lg transition-all duration-300",
        className
      )}>
        <GlowingEffect
          spread={ 60 }
          glow={ true }
          disabled={ false } 
          proximity={ 80 }
          inactiveZone={ 0.01 }
          borderWidth={ 3 }
        />
        { children }
      </div>
    </div>
  );
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-800 dark:text-white py-2 mb-2",
        className
      )}
    >
      { children }
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm mb-4",
        className
      )}
    >
      { children }
    </p>
  );
};

const CardSkeletonContainer = ({
  className,
  children,
  showGradient = false,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-48 md:h-52 rounded-xl z-40 mb-4 overflow-hidden",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      { children }
    </div>
  );
};

const TechBadge = ({ tech }: { tech: string }) => {
  const matchedTech = technologies.find(t => t.name.toLowerCase() === tech.toLowerCase());

  return (
    <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-800 dark:text-white'>
      {matchedTech && (
        <Icon icon={ matchedTech.icon } className='w-4 h-4' />
      )}
      { tech }
    </span>
  );
};

const ProjectLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
}) => {
  return (
    <Link 
      href={ href } 
      target='_blank' 
      className='flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black hover:dark:text-white transition-colors duration-200 text-sm font-medium'
    >
      { icon }
      <span>{ label }</span>
    </Link>
  )
}

export default Projects;