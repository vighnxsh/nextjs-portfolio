"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";

import * as React from "react"

import { useTheme } from "next-themes";
import Skills from "@/components/skills";
import Link from "next/link";

 


export default function Home() {

  const { theme } = useTheme();

  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]

  const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
  return (

    <div >

      <div className="text-8xl pl-28 pt-28   text-opacity-90">




        <div className="pl-3">
          <GradualSpacing
            className=" text-4xl font-medium tracking-[-0.1em] text-sky-100  dark:text-white md:text-7xl md:leading-[5rem]"
            text="Hello...  "
          />
          
        </div>




        <GradualSpacing
          className="font-display  text-5xl font-bold tracking-[-0.1em] text-sky-900  pt-3 dark:text-white md:text-7xl md:leading-[5rem]"
          text=" I&apos;m Vighnesh !!"
        />
        <div className="flex ">

 
        
        <p className="text-2xl text-sky-100 dark:text-white pt-8 pr-[10px] lg:pr-[800px]">
          Full-stack dev here, cooking up apps with Next.js, TailWind CSS and Prisma. I do it all, from database to front-end magic. Currently diving into web3 – &apos;cause why not add more buzz to the tech soup, right? Let&apos;s build something awesome!

        </p>


        </div>

     

        <div className="flex gap-32 pt-16 text-sky-800 ">
        
      

    
        </div>
        
<div className="flex pt-6 ">
    <div className="flex flex-col">
    <h1 className="text-6xl font-bold text-sky-800 dark:text-white ">My Skills ✨ ~</h1>

   
    {/* <h1 className='text-sky-800 font-semibold md:text-4xl pt-6 pr-36 pl-20 text-2xl'><Link href='/projects'><button className='bg-sky-100 border rounded-xl p-3 '>
   My Projects  💻</button></Link></h1> */}
    </div>
  

   <Skills/>

</div>
      </div>  
    </div>
  );
}
