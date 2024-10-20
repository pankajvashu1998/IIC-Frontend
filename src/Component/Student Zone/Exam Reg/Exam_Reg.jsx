import React from 'react'
import { examination } from '../../About/Content'

function Exam_Reg() {
  return (
   <>
       <div className='max-w-full p-4'>
        <div className=' bg-gray-200 p-4'>
              <h1 className='text-2xl font-semibold text-gray-600 underline'>Exam Registration Form</h1>
              <h1 className='py-3 font-semibold text-blue-600'>Fill this form to register for examination.</h1>
        </div>
        <div className=' border my-2 md:flex'>
            <div className='p-4 md:w-7/12 bg-gray-200'>
              <form action="">
                  <div className='grid md:grid-cols-2 gap-2'>
                    <div>
                      <label className='text-gray-600 font-semibold'>Enter Name</label>
                      <input type="text" placeholder='Name' className='border w-full py-3 px-2 rounded '/>
                    </div>
                    <div>
                      <label className='text-gray-600 font-semibold'>Enter Father's Name</label>
                      <input type="text" placeholder="Father's Name" className='border w-full  py-3 px-2 rounded'/>
                    </div>
                  </div>

                  <div>
                      <div className='my-4'>
                        <label className='text-gray-600 font-semibold'>Enter Valid Email Id</label>
                        <input type="email" placeholder='Email Id' className='border w-full  py-3 px-2 rounded'/>
                      </div>

                      <div className='my-4'>
                        <label className='text-gray-600 font-semibold'>Enter Mobile Number</label>
                        <input type="number" placeholder='Mobile No.' className='border w-full  py-3 px-2 rounded'/>
                      </div>

                      <div className='my-4'>
                        <label className='text-gray-600 font-semibold'>Enter Registration No.</label>
                        <input type="text" placeholder='Registration No.' className='border w-full  py-3 px-2 rounded'/>
                      </div>

                      <div className='my-4'>
                        <label className='text-gray-600 font-semibold'>Select Batch Time</label>
                        <input type="time" className='border w-full  py-3 px-2 rounded'/>
                      </div>
                  </div>

                  <div>
                    <button className='border   py-3 px-7 bg-blue-800 text-white font-bold rounded'>Submit</button>
                  </div>


              </form>
            </div>
            <div className='p-4 border w-full'>
              <h1 className='text-3xl font-bold text-gray-500'>ICON INSTITUTE OF COMPUTER</h1>
              <p className='py-4 text-gray-600'>{examination}</p>
              <div className='my-4 overflow-hidden'><img src="/image/examImage.jpg" alt="" className='w-full hover:scale-[1.08] duration-300 '/></div>
            </div>
        </div>
       </div>
   </>
  )
}

export default Exam_Reg