import React from 'react'
import { coreValue, ourMission, ourVision, ourVision2 } from './Content'
import Footer from '../Footer/Footer'
import GetUs from '../Welcome Page/GetUs'
import CounterUp from '../Counter Up/CounterUp'
import OurFacilities from './OurFacilities'

function About() {
  return (
   <>
       <div>
        <div>
          <h1 className='mt-[95px] text-2xl font-bold text-white text-center py-6 px-2 bg-red-500'>ABOUT</h1>
        </div>
        <div className='md:flex justify-center p-4'>
          <div className='md:w-8/12  p-4'>
            <h1 className='py-3 text-2xl font-bold text-gray-600'>WELCOME TO EDUCATION COURSE</h1>
            <p className='font-semibold text-gray-400 py-2'>Our Mission</p>
            <p className='text-gray-600'>{ourMission}</p>

            <p className='font-semibold text-gray-400 py-2 pt-6'>Our Vision</p>
            <p className='text-gray-600'>{ourVision}</p>
            <p className='text-gray-600 py-2'>{ourVision2}</p>

            <p className='font-semibold text-gray-400 py-2 pt-4'>Our Core Values of the Institution</p>
              {coreValue.map((value, index)=>(
                 <p className='text-gray-600' key={index}>{value}</p>
              ))}
          
          </div>
          <div className=' p-4'><GetUs/></div>
        </div>
        <CounterUp/>
        <OurFacilities/>
        <Footer/>
       </div>
   </>
  )
}

export default About