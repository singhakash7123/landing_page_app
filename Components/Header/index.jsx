import Link from 'next/link';
import React from 'react'
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className=' min-h-20 lg:min-h-25  fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
       <nav className=' min-h-20 lg:min-h-25  max-w-7xl mx-auto flex items-center justify-between px-8 '>
         <div>
          <h1 className='text-2xl font-bold'><span className='text-green-500'>Go</span>Saas.</h1>
        </div>
        <ul className='hidden lg:flex items-center justify-end gap-x-10 text-2sm'>
            <li><Link className='relative text-lg before:w-0 before:h-0.5 before:absolute hover:before:w-full before:top-full before:bg-green-400 before:transition-all before:ease-in-out before:duration-300 ' href={'/'}>Home</Link></li>
            <li><Link className='relative text-lg before:w-0 before:h-0.5 before:absolute hover:before:w-full before:top-full before:bg-green-400 before:transition-all before:ease-in-out before:duration-300 ' href={'/Features'}>Feature</Link></li>
            <li><Link className='relative text-lg before:w-0 before:h-0.5 before:absolute hover:before:w-full before:top-full before:bg-green-400 before:transition-all before:ease-in-out before:duration-300 ' href={'/Pricing'}>Pricing</Link></li>
            <li><Link className='relative text-lg before:w-0 before:h-0.5 before:absolute hover:before:w-full before:top-full before:bg-green-400 before:transition-all before:ease-in-out before:duration-300 ' href={'/Blog'}>Blog</Link></li>
            <li className='relative text-lg group before:w-0 before:h-0.5 before:absolute hover:before:w-full before:top-full before:bg-green-400 before:transition-all before:ease-in-out before:duration-300 ' >
            Pages
            <ul className='hidden group-hover:block absolute top-full left-0 px-5 py-12 w-50 space-y-5 bg-white'>
              <li> <Link className='text-lg hover:text-[#00cc61]' href={'/About_Us'}>About Us</Link> </li>
              <li> <Link className='text-lg hover:text-[#00cc61]' href={'/Services'}>Services</Link> </li>
              <li> <Link className='text-lg hover:text-[#00cc61]' href={'/Integration'}>Integration</Link> </li>
              <li> <Link className='text-lg hover:text-[#00cc61]' href={'/Blog/BlogDetails'}>Blog Details</Link> </li>
              <li> <Link className='text-lg hover:text-[#00cc61]' href={'/Login'}>Login</Link> </li>
              <li> <Link className='text-lg hover:text-[#00cc61]' href={'/Sign_Up'}>Register</Link> </li>
            </ul>
            </li>
            <li><Link aria-label='learn more about our services' className='relative text-lg before:w-0 before:h-0.5 before:absolute hover:before:w-full before:top-full before:bg-green-400 before:transition-all before:ease-in-out before:duration-300 ' href={'/Contact_Us'}>Contact_Us</Link></li>
        </ul>
        <MobileMenu/>
       </nav>
    </header>
  )
}

export default Header