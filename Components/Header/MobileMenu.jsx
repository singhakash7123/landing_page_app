'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
const MobileMenu = () => {

 

  const[isOpen,setIsOpen] = useState(false) ;
  const[openPages,setOpenPages] = useState(false) ;
  const handleMenu = ()=>{
    setOpenPages(false)
    setIsOpen(false)
  }

 

  return (
    <aside className='flex lg:hidden'>
      
        
         <ul className={`w-full min-h-screen bg-white  flex lg:hidden flex-col items-start  gap-y-6 text-2sm absolute top-full right-0 transform transition-all ease-in-out duration-500 overflow-y-auto p-6 ${isOpen?' translate-x-0':'translate-x-full'}`}>
            <li><Link onClick={handleMenu} className='text-lg  w-full ' href={'/'}>Home</Link></li>
            <li><Link onClick={handleMenu} className='text-lg  w-full ' href={'/Features'}>Features</Link></li>
            <li><Link onClick={handleMenu} className='text-lg  w-full ' href={'/Pricing'}>Pricing</Link></li>
            <li><Link onClick={handleMenu} className='text-lg  w-full ' href={'/Blog'}>Blog</Link></li>
            <li className=' text-lg  w-full relative'>
            <button onClick={()=>{setOpenPages(!openPages)}}> Pages</button>
            <ul className={`${openPages?'block':'hidden'} absolute top-full left-0 px-4 py-5 w-full space-y-5 bg-white`}>
              <li> <Link onClick={handleMenu} className='text-lg  w-full' href={'/About_Us'}>About Us</Link> </li>
              <li> <Link onClick={handleMenu} className='text-lg  w-full' href={'/Services'}>Services</Link> </li>
              <li> <Link onClick={handleMenu} className='text-lg  w-full' href={'/Integration'}>Integration</Link> </li>
              <li> <Link onClick={handleMenu} className='text-lg  w-full' href={'/Blog/BlogDetails'}>Blog Details</Link> </li>
              <li> <Link onClick={handleMenu} className='text-lg  w-full' href={'/Login'}>Login</Link> </li>
              <li> <Link onClick={handleMenu} className='text-lg  w-full' href={'/Sign_Up'}>Register</Link> </li>
            </ul>
           </li>
            <li><Link aria-label='learn more about our services' onClick={handleMenu} className='text-lg  w-full ' href={'/Contact_Us'}>Contact_Us</Link></li>

    </ul>
    <div><button aria-label='show-menu' onClick={()=>{setIsOpen(!isOpen)}} className='text-2xl transition-all ease-in-out duration-500'>{isOpen?<RxCross1 />:<GrMenu />}</button></div>
    </aside>
   
  )
}

export default MobileMenu