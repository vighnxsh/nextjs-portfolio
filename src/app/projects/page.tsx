import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";



const projects = [
  {
    title: 'ForumFlux',
    description: 'A forum app where you can create topics and discuss with other people',
    image: '/flux.png',
    link: 'https://forumflux.vercel.app/',
    github: 'https://github.com/vighnxsh/forumfluxx'
  }
];

export default function Page() {
  return (
    <div>
      <div><h1 className='mt-24 ml-12 text-sky-900 md:text-5xl  text-3xl'><Link href='/'><IoArrowBackSharp />
      </Link>
      </h1></div>
 <div className='text-6xl text-sky-900 p-4  font-semibold flex flex-col items-center justify-center'>
      Projects
      <div className='flex flex-col items-center justify-center gap-16   rounded-xl'>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 mt-12 md:mt-20 rounded-xl w-full'>
            <div className='text-3xl text-sky-100 relative group w-full md:w-auto'>
              <Link target='_blank' href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full md:w-[622px] h-auto md:h-[350px] object-cover shadow-xl rounded-xl transition-all duration-300'
                />
                <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center'>
                  <span className='text-white text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center'>
                    Visit  {project.title} <MdArrowOutward className="ml-2" />
                  </span>
                </div>
              </Link>
            </div>
            <div className='text-xl md:text-2xl font-bold text-sky-900/80 text-center md:text-left mt-6 md:mt-0'>{project.description}  <Link className= 'text-sky-900/90 p-0 text-3xl' href={project.github} target='_blank'> <h1 className='flex items-center justify-center gap-2 font-bold pt-4'>Visit <FaGithub  /></h1> 
            </Link></div>
          
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
}