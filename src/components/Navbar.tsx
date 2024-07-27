import React from 'react'
import CustomDock from './CustomDock';
import Link from 'next/link';


interface Props {
    children?: React.ReactNode;
    className?: string;
}

export default function Navbar({children, className}: Props) {
  return (
   
<div className='flex gap-24  justify-between items-center px-10  '>
   
   <Link href='/'>
   <h1 className='text-3xl pt-6  text-white dark:text-white'>
        vighnesh.me🚀
    </h1></Link>
   
     <div className='flex   items-center'>
    
     <CustomDock  />
     </div>
  

    <h1 className='text-sky-100 md:text-2xl pt-6 pr-36'><Link href='https://vighnxsh-blog.vercel.app'>Visit my Blog </Link></h1>
    <h1 className='text-sky-800 font-semibold md:text-2xl pt-6 pr-36 '><Link href='/projects'><button className='bg-sky-100 border rounded-xl p-3 '>
    My Projects  💻</button></Link></h1>


</div>

  )
}
