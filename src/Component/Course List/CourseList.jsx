import React from 'react'
import { courseList } from './List'

function CourseList() {
    
  return (
    <>
        <div className='px-4 py-10 bg-gray-300'>
                <div className='max-w-[1170px]  p-4 mx-auto'>
                    <h1 className='text-center py-3 text-2xl font-bold text-gray-700'>OUR COURSES</h1>
                    <p className='text-gray-600 font-semibold text-center pb-10'>We are ready with all type of IT Professional Course.</p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {courseList.map((value, index)=>(
                            <div key={index} className='flex  flex-col'>
                                <div className='overflow-hidden'><img src={value.image} alt="" className='hover:scale-[1.08] duration-300 w-full'/></div>
                                <div className='bg-white'> <h1 className='text-2xl font-semibold p-4 text-gray-700 hover:text-red-600'>{value.title}</h1></div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center my-10'><button className='border border-red-600 border px-3 py-3 font-semibold text-red-700'>VIEW ALL COURSES</button></div>
                    
                </div>
        </div>
    </>
  )
}

export default CourseList
