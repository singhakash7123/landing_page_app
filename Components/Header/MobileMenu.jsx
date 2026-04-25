'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
const MobileMenu = () => {
  const[isMenuOpen,setIsMenuOpen] = useState(false)
  const[showPages, setShowPages] = useState(false) ;
  return (
    <aside className=' lg:hidden flex'>
      <ul className={`min-h-screen absolute top-full right-0 w-full bg-white px-6 text-lg font-light lg:hidden flex flex-col items-start gap-x-12 pb-8 space-y-3 ${isMenuOpen?'translate-x-0':'translate-x-full'} transition-transform duration-500 ease-in-out`}>
          <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/'}>Home</Link></li>
          <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Features'}>Features</Link></li>
          <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Pricing'}>Pricing</Link></li>
          <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Blog'}>Blog</Link></li>
          <div className='w-full'><button className='w-full flex items-center justify-between' onClick={()=>{setShowPages(!showPages)}}><span>Pages</span> <span>+</span></button></div>
            <ul className={`whitespace-nowrap space-y-2 ${showPages?'block':'hidden'}`}>
              <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/About_Us'}>About_Us</Link></li>
              <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Services'}>Services</Link></li>
              <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Integration'}>Integration</Link></li>
              <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Blog/BlogDetails'}>Blog Details</Link></li>
              <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Login'}>Login</Link></li>
              <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Sign_Up'}>Register</Link></li>
            </ul>
          
          <li><Link onClick={()=>{setIsMenuOpen(false)}} href={'/Contact_Us'}>Contact_Us</Link></li>
        </ul>
        <div ><button onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='text-2xl' > {isMenuOpen?<RxCross1 />:<CiMenuFries />} </button></div>
    </aside>
  )
}

export default MobileMenu