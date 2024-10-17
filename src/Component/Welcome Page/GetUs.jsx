import React from 'react'

function GetUs() {
  return (
    <>
    <div className='p-4'>
        <div className='max-w-[400px] rounded p-6 bg-gray-100 mx-auto'>
        <h1 className='text-[24px] font-bold text-gray-600 py-2'>GET US TO CALL YOU BACK</h1>
            <form>
                <div>
                    <input type="text" placeholder='Full Name' className='border w-full py-3 px-2'/>
                </div>
                <div className='my-4'>
                    <input type="text" placeholder='Course Of Interest' className='border w-full py-3 px-2'/>
                </div>
                <div className='my-4'>
                    <input type="number" placeholder='Phone Number' className='border w-full py-3 px-2'/>
                </div>
                <div className='my-4'>
                    <input type="email" placeholder='Email' className='border w-full py-3 px-2'/>
                </div>

                <div className='my-4'>
                    <input type="submit" value={'Submit'} className='border py-3 px-5 bg-red-600 text-white rounded cursor-pointer'/>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default GetUs