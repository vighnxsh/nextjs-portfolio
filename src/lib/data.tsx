import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineDocker } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";






const ts = <img src="/ts.png" className="w-13 h-11" alt="" />
const react = <FaReact className=" text-5xl text-sky-600 font-bold " />

const next = <img src="/next.png" className="w-15 h-12 pt-1" alt="" />
const node = <IoLogoNodejs className="text-5xl text-lime-200 rounded-xl border bg-green-700 " />

const git = <FaGitAlt className=" text-5xl text-orange-500  font-bold " />

const tailwind = <RiTailwindCssFill className="text-5xl text-sky-600 font-bold " />

const prisma = <SiPrisma className="text-4xl text-black " /> 

const mongodb = <img src="/mongodb.png" className="w-13 h-11" alt="" />
const redux = <TbBrandRedux className="text-5xl text-violet-600 " />;

const shadcn = <h1 className="text-xl text-black">@shadcn/ui </h1>
const docker = <h1><AiOutlineDocker className="text-5xl text-blue-600 " />
</h1>
const k8s = <img src="/k8s.png" className="w-13 h-11" alt="" />
const webrtc = <img src="/webrtc.png" className="w-13 h-11" alt="" />
const cicd = <img src="/cicd.png" className="w-13 h-11" alt="" />
const trpc = <img src="/trpc.png" className="w-13 h-11" alt="" />
const express = <SiExpress className="text-4xl text-sky-900 " />

const postgres = <BiLogoPostgresql className="text-5xl text-sky-900 " />

const python = <img src="/python.png" className="w-13 h-11" alt="" />
const langchain = <h1 className="flex">Langchain 🔗<img src="/bird.png" className="w-7 h-7" /> </h1>



export const skillsData = [
  ts,
  react,
 next,
 shadcn,
 tailwind,
 
 prisma,
 postgres,

  node,
  git,
  
  
  mongodb,
  
  
   docker,
  // "K8's",
  // "webRTC",
  // "tRPC",
  express,
  redux,
  python,
  langchain,
 
] as const;
