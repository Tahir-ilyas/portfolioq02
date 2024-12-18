import React from 'react'
import ReviewSlider from './ReviewSlider'


const Reviews = () => {
  return (
 
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 data-aos="flip-left" data-aos-delay="1500" className='heading'>
            Client <span className='text-purple-400'>Reviews</span>
        </h1>
        <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
        <ReviewSlider />
        </div>
    </div>
  );
};

export default Reviews