'use client'
import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const AnimateOnScroll = ({children}) => {
    useEffect(()=>{
        Aos.init({
            duration:700,
            easing:'ease-in',
           once:true ,
           offset:100,
           delay:0,
           mirror:false
        })
    },[])
  return (
    <div>{children}</div>
  )
}

export default AnimateOnScroll