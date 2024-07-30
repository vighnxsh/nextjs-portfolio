import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { FluxSkillsData } from '../../lib/data';

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

export default function Page() {
  return (
    <div>
      <div>
        <h1 className='mt-24 ml-12 text-sky-900 md:text-5xl text-3xl'>
          <Link href='/'>
            <IoArrowBackSharp />
          </Link>
        </h1>
      </div>
      <div className='text-6xl text-sky-900 p-4 font-semibold flex flex-col items-center justify-center'>
        Projects
        <div className='flex flex-col items-center justify-center gap-16 rounded-xl w-full'>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col md:flex-row items-start justify-center gap-4 md:gap-16 mt-12 md:mt-20 rounded-xl w-full'>
              <div className='flex flex-col w-full md:w-auto flex-shrink-0'>
                <div className='text-3xl text-sky-100 relative group'>
                  <Link target='_blank' href={project.link}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full md:w-[622px] h-auto object-cover shadow-xl rounded-xl transition-all duration-300'
                    />
                    <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center'>
                      <span className='text-white text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center'>
                        Visit {project.title} <MdArrowOutward className="ml-2" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className='mt-6 bg-black/20 p-4 rounded-xl'>
                  <h1 className='text-2xl font-bold text-white mb-2'>Tech Stack Used:</h1>
                  <div className='flex flex-wrap gap-2'>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className=' text-white px-3 p-4 py-1 rounded-full text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='text-xl md:text-2xl font-bold text-white text-center md:text-left mt-6 md:mt-0 bg-black/20 p-20 rounded-xl md:flex-grow'>
                {project.description}
                <Link className='text-blue-800 text-3xl ' href={project.github} target='_blank'>
                  <h1 className='flex items-center justify-center gap-2 font-bold pt-12 '>
                    Visit <FaGithub />
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