import React from 'react'
import { welcome, welcome2 } from './Content'
import GetUs from './GetUs'

function Welcome() {
  return (
    <>
    
    <div>
        <div className='p-4   grid md:grid-cols-2 gap-10 py-[50px]'>
            <div className='p-4 '>
                <h1 className='text-[26px] font-bold text-gray-600 py-4'>WELCOME TO ICON INSTITUTE OF COMPUTER</h1>
                <p className='font-semibold text-gray-700 py-3'>{welcome}</p>
                <p className='font-semibold text-gray-700'>{welcome2}</p>
                <div className='mt-[40px]'><button className='border py-3 px-5 bg-red-600 text-white rounded'>READ MORE</button></div>
            </div>
            <div className=' flex justify-center'>
               <GetUs/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Welcome