import React from 'react'

const Banner = ({heading,paragraph}) => {
  return (
    <>
    <div className='h-[40vh] flex flex-col items-center justify-end  '>
        <h2 className='text-5xl font-bold text-center'>{heading}</h2>
        <p  className='mt-6 text-center whitespace-pre-line'>{paragraph}</p>
    </div>
    </>
    
  )
}

export default Banner