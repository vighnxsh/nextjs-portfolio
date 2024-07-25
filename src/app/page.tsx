import GradualSpacing from "@/components/magicui/gradual-spacing";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {ProjectGrid} from "@/components/ProjectGrid";
import { ChevronRight } from "lucide-react";
 
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
 


export default function Home() {
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
        <div className="flex">
        <p className="text-2xl text-sky-100 dark:text-white pt-8 pr-[10px] lg:pr-[800px]">
          Full-stack dev here, cooking up apps with Next.js, TailWind CSS and Prisma. I do it all, from database to front-end magic. Currently diving into web3 – &apos;cause why not add more buzz to the tech soup, right? Let&apos;s build something awesome!

        </p>
        
        <button className="text-2xl">Download my resume</button>

        </div>

     

        <div className="flex gap-32 pt-16 text-sky-800 ">
        
        <Link href="#techstack">
          <h1 className=" font-bold text-4xl  flex ">My TechStack<MdArrowOutward />
          </h1></Link>
          
        <Link href="#projects">
          <h1 className=" font-bold text-4xl  flex ">Explore my Projects<MdArrowOutward />
          </h1></Link>

          <Link href="/projects">
          <h1 className=" font-bold text-4xl  flex ">About me<MdArrowOutward />
          </h1></Link>

          <div className="z-10 flex min-h-[16rem] items-center justify-center">
    
    </div>
          

        </div>
      
      </div>  
      {/* <section className="mt-[200px]" id="techstack">
      Techstack
      </section>
      <section className="mt-[100px]" id="projects">
        <ProjectGrid />
      </section> */}
      
    </div>
  );
}
