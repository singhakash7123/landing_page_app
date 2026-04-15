'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = ({children}) => {
    useEffect(()=>{
        const lenis = new Lenis({
            duration:1.2,
             easing: (t) =>  1 - Math.pow(1-t, 3),
             smoothTouch:true,
             smoothWheel:true ,
             
        })

        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return ()=>{
            lenis.destroy()
        }

    },[])
  return (
    <>{children}</>
  )
}

export default SmoothScroll