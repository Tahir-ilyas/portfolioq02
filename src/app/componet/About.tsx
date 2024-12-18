import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div data-aos="fade-up"
     data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-2 w-[80%] max-auto gap-[3rem] items-center'>
      <div>
        <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem] ml-40 '>ABOUT ME
        </h1>
        <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem]
        font-bold text-white ml-40'>
          Innovating <span className='text-purple-400'>Outlook</span>
        </h2>
        <div 
          className='mb-[3rem] flex items-center md:space-x-10'>
        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm ml-40'></span>
        <p className='text-[20px] text-slate-300 w-[100%] text-justify'>I design and develop scalable, user-centric web applications that seamlessly blend functionality with creativity. With expertise in both front-end and back-end technologies, I thrive on building solutions that transform ideas into impactful digital experiences, keeping performance, security, and usability at the forefront of my work.</p>
        </div>
        <button className='px-[2rem] hover:bg-purple-400 transition-all duration-200 py-[1rem] text-[18px]
            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-1 ml-40'>
            <p>Download Cv</p>
            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
            </button>
      </div>
      <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative '>
        <img src="/image/Tahir.jpeg" alt="user" layout="fill" objectfit="contain" className='relative z-[11] w-[100%] h-[100%] object-contain ml-40' />
        <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-1rem] right-[-11rem] '></div>
      </div>
      </div>
    </div>
  )
}

export default About