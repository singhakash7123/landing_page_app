import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinksFooter = ({style}) => {
  return (
    <div className={`flex ${style} items-center flex-wrap justify-center lg:justify-between max-w-7xl mx-auto py-6 border-t border-t-gray-500 px-4 gap-y-4 gap-x-5`}>
            <div className='flex items-center flex-wrap justify-center gap-x-8 gap-y-2'>
                <div><Link className='hover:text-purple-400 flex items-center gap-x-1 text-lg lg:text-base' href={'/'}><span className='text-xl text-purple-400'><FaFacebook /></span>Facebook</Link></div>
                <div><Link className='hover:text-purple-400 flex items-center gap-x-1 text-lg lg:text-base' href={'/'}><span className='text-xl text-purple-400'><FaYoutube /></span>Youtube</Link></div>
                <div><Link className='hover:text-purple-400 flex items-center gap-x-1 text-lg lg:text-base' href={'/'}><span className='text-xl text-purple-400'><FaInstagram /></span>Instagram</Link></div>
            </div>
            <div className='text-lg lg:text-base'>© Copyright 2026 GoSaas. All rights reserved.</div>
        </div>
  )
}

export default SocialLinksFooter