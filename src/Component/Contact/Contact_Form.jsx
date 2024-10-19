import React from 'react'

function Contact_Form() {
  return (
    <>
        <div>
            <div className='w-full'>
                <h1 className='text-2xl font-bold text-gray-700 py-2'>GET IN TOUCH</h1>
                <form action="">
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div><input type="text" placeholder='Full Name' className='border w-full py-2 px-2'/></div>
                        <div><input type="text" placeholder='Mobile No.' className='border w-full py-2 px-2'/></div>
                    </div>
                    <div className='my-4'><input type="text" placeholder='Email Address' className='border w-full py-2 px-2' /></div>
                    <div className='my-4'><textarea name="" rows={3} maxLength={200} placeholder='Write Your Questions'  className='border w-full py-2 px-2'></textarea></div>
                    <div className='my-4'><input type="submit" className='border py-2 px-7 bg-red-600 text-white font-bold rounded' /></div>
                </form>
            </div>
        </div>
    
    </>
  )
}

export default Contact_Form