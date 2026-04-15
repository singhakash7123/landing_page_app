import Image from 'next/image'
import React from 'react'

const Team = ({Name,Role,image}) => {
  return (
    <div className='group '>
        <div className="w-full aspect-square bg-red-500 relative overflow-hidden before:w-6 before:h-16 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-x-full before:-translate-y-1/2 before:bg-gray-600 group-hover:before:translate-x-0 before:transition-all before:duration-300 before:ease-in-out before:z-10">
        <Image src={image} alt='team_member' fill className='object-cover' sizes='(max-width:768px)80vw
        (max-width:1200px) 50vw 
        33vw'/>
        </div>
        <h3 className="text-4xl mt-6">{Name}</h3>
        <h5 className="text-lg text-gray-500 mt-2">{Role}</h5>

    </div>
  )
}

export default Team