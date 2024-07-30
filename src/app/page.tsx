"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";

import * as React from "react"

import { useTheme } from "next-themes";
import Skills from "@/components/skills";
import Link from "next/link";
import Learning from "@/components/Learning";
 


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
            className=" text-4xl font-medium tracking-[-0.1em] text-sky-100 pt-8  dark:text-white md:text-7xl md:leading-[5rem]"
            text="Hello...  "
          />
          
        </div>




        <GradualSpacing
          className="font-display  text-5xl font-bold tracking-[-0.1em] text-sky-900  pt-3 dark:text-white md:text-7xl md:leading-[5rem]"
          text=" I&apos;m Vighnesh "
        />
        <div className="flex flex-col items-center justify-center  pr-20 ">


        
        <p className="text-2xl text-sky-100 dark:text-white pt-8 pr-[10px] lg:pr-[800px]">
        Full-stack dev from   {""}
        Mumbai ,India
          {/* <button className=" font-semibold text-blue-700 p-1 text-xl rounded-xl border bg-gradient-to-r from-orange-500 via-white to-green-500 cursor-text">{} Mumbai</button> */}
           , cooking up apps with <span className="underline">Next.js, TailWind CSS and Prisma.</span>  I do it all, from database to front-end magic. Currently diving into web3 – &apos;cause why not add more buzz to the tech soup, right? Let&apos;s build something awesome!

        </p>


        </div>

     

        <div className="flex gap-32 pt-16  ">
        
      

    
        </div>
        
<div className="flex flex-col items-center justify-center  pr-20 ">
   
    <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 font-bold  pb-6  ">TechStack</h1>
    <Skills />
   
    <h1 className="text-5xl mt-0 text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 font-bold   pb-6  ">techstack i&apos;m learning~</h1>
    <Learning/>
  
  

 

</div>
      </div>  
    </div>
  );
}
