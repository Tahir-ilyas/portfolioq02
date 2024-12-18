import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react'

interface props {
    name:"string";
    role:"string";
    image:"string"
}

const ClientReviews = ({ name, role, image}:props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <img 
        src={image} 
        alt={name} 
        width={100} 
        height={100} 
        objectfit="contain" 
        className='mx-auto mb-[2rem] rounded-full' />
        <div className='flex items-center mx-auto'>
        <StarIcon className='w-[2rem] h-[2rem] text-purple-500'/>
        <StarIcon className='w-[2rem] h-[2rem] text-purple-500'/>
        <StarIcon className='w-[2rem] h-[2rem] text-purple-500'/>
        <StarIcon className='w-[2rem] h-[2rem] text-purple-500'/>
        <StarIcon className='w-[2rem] h-[2rem] text-purple-500'/>
        </div>
        <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
        <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>
        <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque! Quidem modi quam repellat vitae aut debitis nostrum placeat odit ea sit, qui natus excepturi? Quidem ex alias totam itaque.</p>
    </div>
  )
}

export default ClientReviews