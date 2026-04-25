import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='min-h-20 lg:min-h-24 fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-md bg-white'>
      <nav className='w-full lg:max-w-7xl flex items-center justify-between px-4 lg:px-8'>
        <Link className='text-2xl  lg:text-3xl font-bold' href={'/'}>Go<span className='text-green-500'>Saas</span></Link>
        <ul className='text-lg font-light hidden lg:flex items-center gap-x-12'>
          <li><Link className='relative before:absolute before:bg-green-300 before:top-full before:left-0 before:h-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out' href={'/'}>Home</Link></li>
          <li><Link className='relative before:absolute before:bg-green-300 before:top-full before:left-0 before:h-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out' href={'/Features'}>Features</Link></li>
          <li><Link className='relative before:absolute before:bg-green-300 before:top-full before:left-0 before:h-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out' href={'/Pricing'}>Pricing</Link></li>
          <li><Link className='relative before:absolute before:bg-green-300 before:top-full before:left-0 before:h-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out' href={'/Blog'}>Blog</Link></li>
          <div className='group relative'>Pages
            <ul className='hidden group-hover:block absolute left-0 top-full space-y-2 min-w-xs bg-white py-5 shadow-2xl px-5 whitespace-nowrap'>
              <li><Link href={'/About_Us'}>About_Us</Link></li>
              <li><Link href={'/Services'}>Services</Link></li>
              <li><Link href={'/Integration'}>Integration</Link></li>
              <li><Link href={'/Blog/BlogDetails'}>Blog Details</Link></li>
              <li><Link href={'/Login'}>Login</Link></li>
              <li><Link href={'/Sign_Up'}>Register</Link></li>
            </ul>
          </div>
          <li><Link className='relative before:absolute before:bg-green-300 before:top-full before:left-0 before:h-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out' href={'/Contact_Us'}>Contact_Us</Link></li>
        </ul>
        <MobileMenu/>
      </nav>
    </header>
  )
}

export default Header