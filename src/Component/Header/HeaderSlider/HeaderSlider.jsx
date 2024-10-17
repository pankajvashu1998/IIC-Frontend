import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeaderSlider() {
  return (
    <>
    <div className='w-full'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img src="/image/image3.webp "className='object-cover h-[400px] w-full brightness-50'/></SwiperSlide>
        <SwiperSlide><img src="/image/image1.500" className='object-cover h-[400px] w-full brightness-50'/></SwiperSlide>
        <SwiperSlide><img src="/image/image2.webp"className='object-cover h-[400px] w-full brightness-50'/></SwiperSlide>
        <SwiperSlide><img src="/image/image4.webp"className='object-cover h-[400px] w-full brightness-50'/></SwiperSlide>
        <SwiperSlide><img src="/image/image5.webp"className='object-cover h-[400px] w-full brightness-50'/></SwiperSlide>
        
      </Swiper>
    </div>
    
    </>
  )
}

export default HeaderSlider