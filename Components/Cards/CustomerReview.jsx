import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
const CustomerReview = ({image,Name,Role}) => {
  return (
    <div className='w-full space-y-10 px-6 py-8 bg-[#00cc61] rounded-2xl' data-aos="fade-up">
        <div className='flex items-center gap-x-6 w-full'>
            <div className='w-15 h-15 rounded-full overflow-hidden bg-red-500 relative'>
              <Image src={image} alt='customer_pic' fill className='object-cover' sizes='25vw'/>
            </div>
            <div>
                <h5>{Name}</h5>
                <h6>{Role}</h6>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nam, laudantium omnis excepturi obcaecati a velit labore amet temporibus maxime cum? Deleniti enim quis odit.</p>
            <div className='flex items-center'>
                <span><FaStar className='text-[#00cc61] text-xl' /></span>
                <span><FaStar className='text-[#00cc61] text-xl' /></span>
                <span><FaStar className='text-[#00cc61] text-xl' /></span>
                <span><FaStar className='text-[#00cc61] text-xl' /></span>
            </div>
        
    </div>
  )
}

export default CustomerReview