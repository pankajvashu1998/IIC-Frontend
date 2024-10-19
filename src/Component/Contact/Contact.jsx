import React from 'react'
import { address } from '../Footer/Content'
import Contact_Form from './Contact_Form'
import Footer from '../Footer/Footer'

function Contact() {
  return (
    <>
      <div>
        <div className='mt-[95px] bg-red-500 px-4 py-6'>
          <h1 className='text-center text-2xl font-bold text-white'>CONTACT US</h1>
        </div>
        <div className='p-4 grid md:grid-cols-2 gap-10'>
            <div className=' p-4'>
              <Contact_Form/>
            </div>

            <div className=' p-4 lg:flex justify-evenly '>
             <div className='text-center sm:text-left'>
                    <h1 className='text-2xl font-bold text-gray-700 py-2'>CONTACT INFO</h1>
                      {address.map((value, index)=>(
                        <p key={index} className='font-semibold py-2'>{value}</p>
                      ))}
             </div>
             <div className='border border-2 p-6  rounded-xl'>
                    <div className='border border-4 border-gray-300 shadow-xl overflow-hidden h-[200px] w-[200px] rounded-full mx-auto'><img src="/image/pankaj.jpg" className='w-full object-cover rounded-full' /></div>
                    <h1 className='text-center font-bold text-gray-700 underline'>PANKAJ KUMAR</h1>
                    <h1 className='text-center text-blue-600 font-semibold'>Full Stack Developer</h1>
             </div>
            </div>
        </div>
        <div className=' p-4 max-w-full h-[500px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.598075865771!2d85.26709017532316!3d25.78383600769016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed43e7a24805e1%3A0x87f4c88955505a7e!2sICON%20INSTITUTE%20OF%20COMPUTER!5e0!3m2!1sen!2sin!4v1729259772649!5m2!1sen!2sin" className='w-full min-h-full border'></iframe>
        </div>
        <Footer/>
      </div>
    
    </>
  )
}

export default Contact