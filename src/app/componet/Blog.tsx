import { ChatBubbleLeftRightIcon } from '@heroicons/react/16/solid'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Blog = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
    <h1 data-aos="flip-right" data-aos-delay="1800" className='heading'>
    My <span className='text-purple-400'>Blog</span>
    </h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
    <div>
        <div data-aos="zoom-in-right" data-aos-delay="2500"  className='w-[100%] relative h-[250px]'>
        <img 
        src='/image/blog.jpg'
        alt='blog'
        layout="fill"
        className='object-cover'     
        />
         </div>
         <div data-aos="zoom-in-right" data-aos-delay="2500" className='w-[90%] text-center mx-auto bg-[#09010a] relative p-[2rem] mt-[-1rem]'>
            <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-17px mx-auto'>
                September 05,2024
            </div>
        <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
        <div className='flex items-center space-x-3'>
            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
        <p className='text-white'>By Hassan</p>
        </div>
        <div className='flex items-center space-x-3'>
        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
        <p className='text-white'>Comments(6)</p>
        </div>
        </div>
        <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next js Fullstack Development</p>
         </div>
    </div>
     <div>
        <div data-aos="zoom-in-up" data-aos-delay="3000" className='w-[100%] relative h-[250px]'>
        <img 
        src='/image/blog1.jpg'
        alt='blog'
        layout="fill"
        className='object-cover'     
        />
         </div>
         <div data-aos="zoom-in-up" data-aos-delay="3000" className='w-[90%] text-center mx-auto bg-[#09010a] relative p-[2rem] mt-[-1rem]'>
            <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-17px mx-auto'>
                September 10,2024
            </div>
        <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
        <div className='flex items-center space-x-3'>
            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
        <p className='text-white'>By Shahmeer</p>
        </div>
        <div className='flex items-center space-x-3'>
        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
        <p className='text-white'>Comments(4)</p>
        </div>
        </div>
        <p className='mt-[1rem] text-white text-[18px] font-semibold'>React New Fetures</p>
         </div>
    </div>
     <div>
        <div data-aos="zoom-in-left" data-aos-delay="1500" className='w-[100%] relative h-[250px]'>
        <img 
        src='/image/artificiblo.jpg'
        alt='blog'
        layout="fill"
        className='object-cover'     
        />
         </div>
         <div data-aos="zoom-in-left" data-aos-delay="1500" className='w-[90%] text-center mx-auto bg-[#09010a] relative p-[2rem] mt-[-1rem]'>
            <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-17px mx-auto'>
                September 12,2024
            </div>
        <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
        <div className='flex items-center space-x-3'>
            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
        <p className='text-white'>By Ayeisha </p>
        </div>
        <div className='flex items-center space-x-3'>
        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
        <p className='text-white'>Comments(8)</p>
        </div>
        </div>
        <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next js New Fetures</p>
         </div>
    </div>
   
    </div>
    </div>
  )
}

export default Blog