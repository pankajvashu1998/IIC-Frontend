import React from 'react'
import { card } from './Content'

function WhyChoseUs() {
  return (
    <>
    <div className='p-4'>
        <div className='w-full py-10'>
                <h1 className='text-center text-2xl font-bold text-gray-700 pt-8'>WHY CHOSE US</h1>
                <div className='border border-gray-400 w-[140px] mx-auto mt-1'></div>
                <div className='border border-gray-400 w-[100px] mx-auto mt-1'></div>
                <div className='max-w-[540px] p-4 mx-auto my-[60px] text-center font-semibold text-gray-700'>In ICON, learners are able to study and experience each procedure in a rich variety of ways to optimize their learning.</div>
                <div className='p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                        {card.map((value, index)=>(
                            <div key={index} className='p-10 border text-center shadow-xl bg-white'>
                                <h1 className='text-2xl font-semibold py-4 text-gray-700'>{value.title}</h1>
                                <p className='font-semibold text-gray-700'>{value.body}</p>
                                <div className='my-4'><button className='font-semibold hover:text-red-600'>READ MORE...</button></div>
                            </div>
                        ))}
                </div>
        </div>
    </div>
    </>
  )
}

export default WhyChoseUs