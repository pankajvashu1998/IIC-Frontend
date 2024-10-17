import React from 'react'
import { about, address, onlineService } from './Content'

function Footer() {
  return (
   <>
       <div>
            <div className='p-4 py-6 bg-gray-800 mt-[30px] w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                  <div className=' p-4'>
                    <h1 className='text-2xl font-bold text-white  py-4'>ABOUT US</h1>
                    <p className='text-white font-semibold'>{about}</p>
                  </div>
                  <div className=' p-4'>
                  <h1 className='text-2xl font-bold text-white py-4'>ONLINE SERVICES</h1>
                  {onlineService.map((value, index)=>(
                    <p className='text-white font-semibold' key={index}>{value}</p>
                  ))}
                  </div>
                  <div className=' p-4'>
                  <h1 className='text-2xl font-bold text-white py-4'>CONTACT US</h1>
                  {address.map((value, index)=>(
                    <p className='text-white font-semibold' key={index}>{value}</p>
                  ))}
                  </div>
                  <div className='border p-4'></div>
            </div>
       </div>
   </>
  )
}

export default Footer