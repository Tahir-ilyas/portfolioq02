import { RocketLaunchIcon } from '@heroicons/react/20/solid'
import { CommandLineIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
     <p data-aos="fade-up"
     data-aos-duration="3000" className='heading'>
       My <span className='text-purple-400'> Services</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[88%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase *:font-semibold text-center p-[2rem]'>
          <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fea8]' />
          <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
          <p className='text-[12px] text-[#d3d2d2] font-normal'>
           My service is the part of an application that handles everything the user sees and interacts with. It focuses on:
          Displaying data from the backend using UI technologies like HTML, CSS, and JavaScript.
          Managing user interactions and client-side logic.
          Ensuring a responsive and engaging user experience.
           </p>
          </div>
        </div>
        <div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className='bg-[#FF0800] hover:scale-110 transform transition-all duration-300 uppercase :font-semibold text-center p-[2rem]'>
          <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fea8]' />
          <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
          <p className='text-[12px] text-[#d3d2d2] font-normal'>
           My service is the part of an application that handles everything the user sees and interacts with. It focuses on:
          Displaying data from the backend using UI technologies like HTML, CSS, and JavaScript.
          Managing user interactions and client-side logic.
          Ensuring a responsive and engaging user experience.
           </p>
          </div>
        </div>
          </div>
        <div>
        <div data-aos="zoom-out" data-aos-delay="600">
          <div className='bg-[#C71585] hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase *:font-semibold text-center p-[2rem]'>
          <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fea8]' />
          <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Fullstack</h1>
          <p className='text-[12px] text-[#d3d2d2] font-normal'>
           My service is the part of an application that handles everything the user sees and interacts with. It focuses on:
          Displaying data from the backend using UI technologies like HTML, CSS, and JavaScript.
          Managing user interactions and client-side logic.
          Ensuring a responsive and engaging user experience.
           </p>
          </div>
        </div>
        </div>
      </div>
      
      </div>
  )
}

export default Services