"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";
import * as React from "react";
import { useTheme } from "next-themes";
import Skills from "@/components/skills";
import Link from "next/link";
import Learning from "@/components/Learning";

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
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <div className="mb-4">
          <GradualSpacing
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.1em] text-sky-100 dark:text-white"
            text="Hello... "
          />
        </div>
        <GradualSpacing
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.1em] text-sky-900 dark:text-white"
          text=" I&apos;m Vighnesh "
        />
        <div className="mt-8">
          <p className="text-lg sm:text-xl md:text-2xl text-sky-100 dark:text-white max-w-4xl mx-auto">
            Full-stack dev from Mumbai, India, building apps with{" "}
            <span className="underline">Next.js, TailWind CSS and Prisma.</span>{" "}
            I do it all, from database to front-end. Currently diving into web3
            – &apos;cause why not add more buzz to the tech stack, right? Let&apos;s build
            something awesome!
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 font-bold mb-8">
          TechStack
        </h1>
        <Skills />
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 font-bold mt-16 mb-8">
          techstack i&apos;m learning
        </h1>
        <Learning />
      </div>
    </div>
  );
}