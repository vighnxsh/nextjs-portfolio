"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"


 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import Skills from "@/components/skills";

 


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
        <div className="flex flex-col">

 
        
        <p className="text-2xl text-sky-100 dark:text-white pt-8 pr-[10px] lg:pr-[800px]">
          Full-stack dev here, cooking up apps with Next.js, TailWind CSS and Prisma. I do it all, from database to front-end magic. Currently diving into web3 – &apos;cause why not add more buzz to the tech soup, right? Let&apos;s build something awesome!

        </p>

        
        

        </div>

     

        <div className="flex gap-32 pt-16 text-sky-800 ">
        
      
          
        {/* <Link href="/projects">
          <h1 className=" font-bold text-4xl  flex ">Explore my Projects<MdArrowOutward />
          </h1></Link> */}

        
{/* 
          <Drawer>
      <DrawerTrigger asChild>
        <p  className="p-5 flex items-center gap-2 text-4xl rounded-xl mx-auto text-white border   m-6 "> my techstack<MdArrowOutward /></p>
      </DrawerTrigger>
      <DrawerContent className="bg-slate-200">
      

    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
    <div className="flex gap-4 items-center justify-center">
   
 
    </div>
    </div>
      </DrawerContent>
    </Drawer> */}

          
    
        </div>
        
<div className="flex pt-6 ">
   <h1 className="text-6xl font-bold text-sky-800 dark:text-white ">My Skills ✨ ~</h1>

   <Skills/>

</div>
      </div>  
    </div>
  );
}
