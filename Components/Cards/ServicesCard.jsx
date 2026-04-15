import React from 'react'

const ServicesCard = ({icon,heading,paragraph}) => {
  return (
    <div data-aos="fade-up" className='w-full space-y-4 p-10 border rounded-2xl hover:shadow-xl'>
        <div className=''><span>{icon}</span></div>
        <h4 className='text-2xl'>{heading}</h4>
        <p className='text-gray-500'>{paragraph}</p>
    </div>
  )
}

export default ServicesCard