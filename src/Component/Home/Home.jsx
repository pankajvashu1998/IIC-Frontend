import React from 'react'
import HeaderSlider from '../Header/HeaderSlider/HeaderSlider'
import FacilitiesSlider from '../Header/HeaderSlider/FacilitiesSlider'
import Welcome from '../Welcome Page/Welcome'
import CourseList from '../Course List/CourseList'
import WhyChoseUs from '../Why Chose Us/WhyChoseUs'
import CounterUp from '../Counter Up/CounterUp'
import TestimonialFeedBack from '../Testimonial/TestimonialFeedback'
import WhyWithUs from '../Why With Us/WhyWithUs'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <div>
         <div className='absolute w-full'><HeaderSlider/></div>
         <div className='mt-[95px]'><FacilitiesSlider/></div>
         <div className='mt-[150px]'><Welcome/></div>
         <div><CourseList/></div>
         <div><WhyChoseUs/></div>
         <div><TestimonialFeedBack/></div>
         <div><WhyWithUs/></div>
         <div><CounterUp/></div>
         <div><Footer/></div>
      </div>
    </>
  )
}

export default Home