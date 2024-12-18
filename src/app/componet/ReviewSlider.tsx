import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviews from './ClientReviews';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const ReviewSlider = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'
>
  <ClientReviews image="/image/hassan.jpeg" 
  name="Muhammad Hassan" 
  role="Web Developer" />
   <ClientReviews image="/image/person1.jpg" 
  name="Muhammad Asif" 
  role="React.js Developer" />
   <ClientReviews image="/image/person.jpg" 
  name="Muhammad Sharjeel" 
  role="Backend Developer" />
   <ClientReviews image="/image/person.jpg" 
  name="Muhammad Ahsan" 
  role="Next.js Developer" />
</Carousel>
  )
}

export default ReviewSlider