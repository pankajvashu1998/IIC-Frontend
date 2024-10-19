import React from 'react'
import { examination, onlineAdmission, studyMaterial } from './Content'

function OurFacilities() {
  return (
    <>
    
    <div className='p-4'>
        <div className='w-full py-10'>
                <h1 className='text-center text-2xl font-bold text-gray-700 pt-8'>OUR FACILITIES</h1>
                <div className='border border-gray-400 w-[140px] mx-auto mt-1'></div>
                <div className='border border-gray-400 w-[100px] mx-auto mt-1'></div>
                <div className='max-w-[540px] p-4 mx-auto my-[60px] text-center font-semibold text-gray-700'>In ICON, learners are able to study and experience each procedure in a rich variety of ways to optimize their learning.</div>
                <div className='p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                       <div className=' p-7'>
                        <div className='overflow-hidden'><img src="/image/onlineExam.jpeg" alt=""  className=' w-full hover:scale-[1.08] duration-300'/></div>
                        <h1 className='text-xl font-semibold hover:text-red-500 py-4 '>ONLINE EXAMINATION</h1>
                        <p className='text-gray-600'>{examination}</p>
                       </div>
                       <div className=' p-7'>
                        <div className='overflow-hidden'><img src="/image/studyMeterial.jpg" alt="" className=' w-full hover:scale-[1.08] duration-300' /></div>
                        <h1 className='text-xl font-semibold hover:text-red-500 py-4 '>COMPLETE STUDY MATERIAL</h1>
                        <p className='text-gray-600'>{studyMaterial}</p>
                       </div>
                       <div className=' p-7'>
                        <div className='overflow-hidden'><img src="/image/onlineAdmission.jpg" alt="" className=' w-full hover:scale-[1.08] duration-300' /></div>
                        <h1 className='text-xl font-semibold hover:text-red-500 py-4'>ONLINE ADMISSION</h1>
                        <p className='text-gray-600'>{onlineAdmission}</p>
                       </div>
                </div>
        </div>
    </div>
    
    
    </>
  )
}

export default OurFacilities