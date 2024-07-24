import GradualSpacing from "@/components/magicui/gradual-spacing";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


export default function Home() {
  return (

  <div >
 
  <div className="text-8xl pl-28 pt-28   text-opacity-90">

 
   
   
    <div className="pl-3">
    <GradualSpacing
      className=" text-8xl font-medium tracking-[-0.1em] text-sky-100  dark:text-white md:text-7xl md:leading-[5rem]"
      text="Hello...  "
    />
    </div>

    


  <GradualSpacing
      className="font-display  text-4xl font-bold tracking-[-0.1em] text-blue-900  pt-3 dark:text-white md:text-7xl md:leading-[5rem]"
      text=" I&apos;m Vighnesh !!"
    />
   
<p className="text-2xl text-sky-100 dark:text-white pt-8 pr-[800px]">
Full-stack dev here, cooking up apps with Next.js, TailWind CSS and Prisma. I do it all, from database to front-end magic. Currently diving into web3 – &apos;cause why not add more buzz to the tech soup, right? Let&apos;s build something awesome!

</p>
  
   <Link href="/projects">
   <h1 className="text-blue-100 font-bold text-4xl pt-28 flex ">Explore my Projects<MdArrowOutward />
   </h1></Link>
 


   
    
 
  </div>
 
 </div>
  );
}
