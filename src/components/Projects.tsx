import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FluxSkillsData} from '../lib/data';
import {BlogSkillsData} from "../lib/data";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


const projects = [
  {
    title: 'ForumFlux',
    description: 'A dynamic forum platform built with modern web technologies. Users can create communities, share posts, and engage through voting and commenting. The application leverages Next.js for efficient rendering, Prisma for robust database management, Redis for caching, and Tailwind CSS for a sleek, responsive design. Developed in TypeScript, it offers full CRUD functionality, ensuring a seamless and interactive user experience.',
    image: '/flux.png',
    link: 'https://forumflux.vercel.app/',
    github: 'https://github.com/vighnxsh/forumflux',
    techStack: [...FluxSkillsData]
  },
  // {
  //   title: 'Personal Blog App',
  //   description: 'A personal blog app built with Next.js, Tailwind CSS, and Prisma. It allows users to create, edit, and delete posts. The application leverages Next.js for efficient rendering, Prisma for robust database management, and Tailwind CSS for a sleek, responsive design. Developed in TypeScript, it offers full CRUD functionality, ensuring a seamless and interactive user experience.',
  //   image: '/flux.png',
  //   link: 'https://vighnxsh-blog.vercel.app/',
  //   github: 'https://github.com/vighnxsh/personal-blog',
  //   techStack: [...BlogSkillsData]}
  // },
  // {
  //   title : 'Send SOL',
  //   description : 'A simple transfer app that allows users to send SOL to each other. It uses the SOLANA blockchain and the Phantom wallet.',
  //   image: '/solana.png',
  //   link: 'https://send-s0l.vercel.app/',
  //   github: 'https://github.com/vighnxsh/send-sol',
  //   techStack: []
   
  // }
]



export function Projects() {
  return (
    <Carousel >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
              <div className='w-full max-w-7xl mx-auto'>
          
            <div key={index} className='flex flex-col lg:flex-row items-start justify-center gap-4 sm:gap-8 md:gap-16 mt-8 sm:mt-12 md:mt-20 rounded-xl w-full'>
              <div className='flex flex-col w-full lg:w-1/2 flex-shrink-0'>
              <div className='relative w-full lg:max-w-[500px] overflow-hidden rounded-xl group'>
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
          
        </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
