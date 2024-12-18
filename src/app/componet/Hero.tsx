import React from 'react'



import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url('/image/banner.jpg')]  bg-cover bg-center">
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
         
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-purple-400">TAHIR!</span>
          </h1>
          <p data-aos="zoom-in-right" className='mt-[2rem] text-[20px] text-[#ffffff92] text-justify '> Dedicated and results-driven Full Stack MERN
            Developer with hands-on experience in building  scalable web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in creating responsive user interfaces, developing efficient server-side logic,and managing robust databases.
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button data-aos="fade-up-right" data-aos-duration="3000"  className='px-[2rem] hover:bg-purple-400 transition-all duration-200 py-[1rem] text-[18px]
            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
            <p>Download Cv</p>
            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
            </button>
            <button data-aos="fade-up-right" data-aos-duration="3000"  className='flex items-center space-x-2'>
              <PlayCircleIcon  className='w-[4rem] h-[4rem] hover:text-purple-400 transition-all duration-200 text-[#55e6a5]'/>
            <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
            </button>
          </div>
        </div>
        <div data-aos="zoom-in-left" className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <img src="/image/tahir.jpg" alt="user" layout="fill" className="object-cover rounded-full" />

        </div>

      </div>

    </div>
  )
}

export default Hero