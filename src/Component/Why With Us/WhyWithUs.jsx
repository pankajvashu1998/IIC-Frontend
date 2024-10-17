import React from 'react'
import { content } from './Content'
function WhyWithUs() {
  return (
    <>
    
    <div>
        <div className='p-4   grid md:grid-cols-2 gap-10 py-[50px]'>
            <div className='p-4 '>
                <h1 className='text-[26px] font-bold text-gray-600 py-4'>Why With Us?</h1>
                <p className='font-semibold text-gray-700 py-3'>{content}</p>
                <div className='mt-[40px]'><button className='border py-3 px-5 bg-red-600 text-white rounded'>READ MORE</button></div>
            </div>
            <div className=''>
               <img src="/image/whyWithUs.jpg" alt="" className='w-full rounded'/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default WhyWithUs