import React from 'react'

function View_Result() {
  return (
    <>
        <div className='p-4'>
              <div className='p-4 w-full bg-gray-200 md:flex justify-between'>
                  <div><h1 className='text-2xl font-bold text-gray-600 underline pb-3'>Results</h1></div>
                  <div>
                    <form className='flex items-center'>
                    <input type="text" placeholder='Enter Reg. No.' className='border px-2 py-2 mx-1 rounded w-full'/>
                    <input type="text" placeholder='Enter Name' className='border px-2 py-2 mx-1 rounded w-full'/>
                    <button className='bg-yellow-600 rounded text-white font-semibold px-2 py-2 mx-1'>Search</button>
                    </form>
                  </div>
              </div>
        </div>
    </>
  )
}

export default View_Result