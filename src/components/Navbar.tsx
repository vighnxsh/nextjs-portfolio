import React from 'react'
import CustomDock from './CustomDock';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";


interface Props {
    children?: React.ReactNode;
    className?: string;
}

export default function Navbar({children, className}: Props) {
  return (
   
<div className='flex gap-24  justify-between items-center px-10  '>
   
   <Link href='/'>
   <h1 className='text-3xl pt-6  text-white dark:text-white'>
        vighnxsh.dev🚀
    </h1></Link>
   
     <div className='flex   items-center'>
    
     <CustomDock  />
     </div>
   

    <h1 className='text-sky-100 md:text-2xl pt-6 pr-36'><Link href='https://vighnxsh-blog.vercel.app'>Visit my Blog </Link></h1>

    {/* <div>
        <h1 className='text-transparent'>trasnss</h1>
    </div> */}

  
   

</div>

  )
}
