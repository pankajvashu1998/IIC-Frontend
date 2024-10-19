import React from 'react'
import GetUs from '../Welcome Page/GetUs'
import { courseList } from './Course_List'
import Footer from '../Footer/Footer'

function Course() {
  return (
   <>
    <div>
      <div className='mt-[95px]'>
        <h1 className='bg-red-500 px-4 py-6 text-center text-2xl text-white font-bold'>OUR COURSES</h1>
      </div>
      <div className='max-w-[1320px] mx-auto  p-4 my-[50px] lg:flex gap-5 '>
        <div className='border lg:w-8/12 my-2'>
        <div><img src="/image/courseImage.jpg" className='w-full' /></div>
        <div className='mt-2 overflow-auto'>
          <table className='w-full'>
            <thead>
                  <tr className='text-gray-700 bg-gray-300'>
                    <th className='py-3 px-2'>S.NO</th>
                    <th className='py-3 px-2'>Course Name</th>
                    <th className='py-3 px-2'>Duration</th>
                    <th className='py-3 px-2'>Eligibility</th>
                  </tr>
            </thead>
            <tbody>
                  {courseList.map((value, index)=>(
                    <tr key={index}>
                      <td className='text-center py-2 border px-2 text-gray-700 font-semibold'>{index+1}</td>
                      <td className=' py-2 border px-2 text-gray-700 font-semibold'>{value.course}</td>
                      <td className=' py-2 border text-center px-2 text-gray-700 font-semibold'>{value.duration}</td>
                      <td className=' py-2 border text-center px-2 text-gray-700 font-semibold'>{value.eligibility}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        </div>
        <div className=' my-2'>
          <GetUs/>
        </div>
      </div>
      <Footer/>
    </div>
   
   </>
  )
}

export default Course