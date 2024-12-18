import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface props {
  openNav: () => void;
}

const Nav = ({openNav}:props) => {
  return (
    <div className='w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                HI
                <span className='text-purple-300 '>TAHIR</span>
            </h1>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='nav-link'>HOME</div>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='nav-link'>SERVICESS</div>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='nav-link'>ABOUT</div>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='nav-link'>PROJECT</div>
            <div data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1500" className='nav-link'>BLOG</div>
            <div data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1500" className='nav-link'>CONTACT</div>
            <div onClick={openNav}>
            <Bars3Icon className='w-[2rem] md:hidden  h-[2rem] cursor-pointer text-purple-300' />
            </div>
        </div>
    </div>
  )
}

export default Nav
