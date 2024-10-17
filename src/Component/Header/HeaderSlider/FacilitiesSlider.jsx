import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function FacilitiesSlider() {
  return (
    <>
      <div className='relative '>
      <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <h1 className='text-3xl font-bold text-white py-4 px-3 mt-[50px] '>THE BEST LEARNING CENTER</h1>
                        <h1 className='text-5xl font-bold text-white px-3'>WE CAN LEARN ANYTHING</h1>
                        <button className=' bg-red-600 text-white font-semibold px-5 py-3 mx-3 mt-9 rounded hover:bg-blue-600'>READ MORE</button>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h1 className='text-3xl font-bold text-white py-4 px-3 mt-[50px]'>ICON INSTITUTE OF COMPUTER</h1>
                        <h1 className='text-5xl font-bold text-white px-3'>EDUCATION AND TRAINING</h1>
                        <button className=' bg-red-600 text-white font-semibold px-5 py-3 mx-3 mt-9 rounded hover:bg-blue-600'>LEARN MORE</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='text-3xl font-bold text-white py-4 px-3 mt-[50px]'>COMPLETE DIGITAL</h1>
                        <h1 className='text-5xl font-bold text-white px-3'>LEARN FROM BEST STUDY MATERIAL</h1>
                        <button className=' bg-red-600 text-white font-semibold px-5 py-3 mx-3 mt-9 rounded hover:bg-blue-600'>JOIN TODAY</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='text-3xl font-bold text-white py-4 px-3 mt-[50px]'>WELL EQUIPPED</h1>
                        <h1 className='text-5xl font-bold text-white px-3'>UP TO DATE COMPUTER LAB</h1>
                        <button className=' bg-red-600 text-white font-semibold px-5 py-3 mx-3 mt-9 rounded hover:bg-blue-600'>VISIT TODAY</button>
                    </SwiperSlide>
                    
                    
        
      </Swiper>
      </div>


    </>
  )
}

export default FacilitiesSlider