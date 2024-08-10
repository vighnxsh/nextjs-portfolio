"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";
import * as React from "react";
import { useTheme } from "next-themes";
import Skills from "@/components/skills";
import Learning from "@/components/Learning";
import {Projects} from "@/components/Projects";

import { Separator } from "@/components/ui/separator"


export default function Home() {
  const { theme } = useTheme();

  const data = [
    { goal: 400 },
    { goal: 300 },
    { goal: 200 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 239 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 349 },
  ];

  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-4 pl-4">
          <GradualSpacing
            className=" text-4xl sm:text-6xl md:text-6xl font-medium tracking-[-0.1em] text-sky-100 dark:text-white"
            text="Hello... "
          />
        </div>
        <GradualSpacing
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.1em] text-violet-900 dark:text-white"
          text=" I&apos;m Vighnesh "
        />
        <div className="mt-6">
          <p className="text-lg sm:text-xl md:text-2xl text-sky-100 dark:text-white">
            Full-stack dev from Mumbai, India, building apps with{" "}
            <span className="underline">Next.js, TailWind CSS and Prisma.</span>{" "}
            I do it all, from database to front-end. Currently diving into web3
            – &apos;cause why not add more buzz to the tech stack, right? Let's build
            something awesome!
          </p>
        </div>
      </div>

      <Separator className="my-10 text-black " />


      <div className="mt-12 sm:mt-16">
        <Projects />
      </div>

      <Separator className="my-10 " />

    <div className="flex ">
    <div className="mt-12 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-950 via-violet-700 to-violet-950 font-bold mb-6">
          TechStack
        </h1>
        <Skills />
      </div>

      <div className="mt-12 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-950 via-violet-600 to-violet-950 font-bold mb-6">
          Stuff I&apos;m learning
        </h1>
        <Learning />
      </div>
    </div>
     
    </div>
  );
}