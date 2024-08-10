import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { FluxSkillsData } from '../lib/data';

const projects = [
  {
    title: 'ForumFlux',
    description: 'A dynamic forum platform built with modern web technologies. Users can create communities, share posts, and engage through voting and commenting. The application leverages Next.js for efficient rendering, Prisma for robust database management, Redis for caching, and Tailwind CSS for a sleek, responsive design. Developed in TypeScript, it offers full CRUD functionality, ensuring a seamless and interactive user experience.',
    image: '/flux.png',
    link: 'https://forumflux.vercel.app/',
    github: 'https://github.com/vighnxsh/forumflux',
    techStack: [...FluxSkillsData]
  }
];

export default function Projects() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8">
      <div>
        <h1 className='mt-8 sm:mt-16 md:mt-24 text-violet-900 text-3xl md:text-5xl'>
          <Link href='/'>
            <IoArrowBackSharp />
          </Link>
        </h1>
      </div>
      <div className='text-4xl sm:text-5xl md:text-6xl text-violet-900 p-4 font-semibold flex flex-col items-center justify-center'>
        Projects
        <div className='w-full max-w-7xl mx-auto'>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col lg:flex-row items-start justify-center gap-4 sm:gap-8 md:gap-16 mt-8 sm:mt-12 md:mt-20 rounded-xl w-full'>
              <div className='flex flex-col w-full lg:w-1/2 flex-shrink-0'>
              <div className='relative w-full lg:max-w-[400px] overflow-hidden rounded-xl group'>
  <Link target='_blank' href={project.link}>
    <img
      src={project.image}
      alt={project.title}
      className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center'>
      <span className='text-white text-xl sm:text-2xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center'>
        Visit {project.title} <MdArrowOutward className="ml-2" />
      </span>
    </div>
  </Link>
</div>
                <div className='mt-4 sm:mt-6 bg-gradient-to-r from-black/30 via-indigo-600/40 to-violet-900/30 p-3 sm:p-4 rounded-xl'>
                  <h1 className='text-xl sm:text-2xl font-bold text-white mb-2'>Tech Stack Used:</h1>
                  <div className='flex flex-wrap gap-2'>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className='text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='text-lg sm:text-xl md:text-2xl font-bold text-white text-center lg:text-left mt-4 lg:mt-0 bg-black/20 p-4 sm:p-6 md:p-8 rounded-xl w-full lg:w-1/2'>
                {project.description}
                <Link className='text-blue-800 text-xl sm:text-2xl md:text-3xl block mt-4 sm:mt-6' href={project.github} target='_blank'>
                  <h1 className='flex items-center justify-center lg:justify-start gap-2 font-bold'>
                    Visit <FaGithub /> for source code <MdArrowOutward />
                  </h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}