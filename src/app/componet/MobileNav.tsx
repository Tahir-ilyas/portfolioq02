import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface props {
    nav:boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:props) => {
    const navAnimation = nav? "translate-x-0": "translate-x-[100%]"
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a] `}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center '>
            <div className='nav-link-mobile '>Home</div>
            <div className='nav-link-mobile'>Servicess</div>
            <div className='nav-link-mobile'>ABOUT</div>
            <div className='nav-link-mobile'>PROJECT</div>
            <div className='nav-link-mobile'>BLOG</div>
            <div className='nav-link-mobile'>CONTACT</div>
        </div>
        <div onClick={closeNav} className='absolute z-[100000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-purple-400'>
            <XMarkIcon />
        </div>
        
    </div>
  )
}

export default MobileNav