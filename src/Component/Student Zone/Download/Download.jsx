import React from 'react'
import { pdfFile } from './Content'

function Download() {
  return (
    <>
        <div className='p-4'>
            <div className='max-w-full p-4 bg-gray-200 mb-2'>
              <h1 className='text-2xl font-bold text-gray-600 underline'>Downloads</h1>
              <p className='py-4  font-semibold'>Download all PDF</p>
            </div>
            <div className='p-4 max-w-full'>
              <ul>
                {pdfFile.map((value,index)=>(
                  <li className='flex justify-between py-[10px] border-b border-b-2' key={index}>
                    <p className='text-gray-600'>{value.subject}</p>
                     <a href={value.pdf} className='text-blue-700 font-semibold'>Download</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </>
  )
}

export default Download