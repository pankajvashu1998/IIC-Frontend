import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { BiHide, BiShow } from "react-icons/bi";

function Login() {
  let[showPass, setShowPass] = useState(false)
  return (
   <>
     <div>
      <div>
        <video autoPlay muted loop className='min-w-[100%] min-h-[100%] fixed top-0 left-0 object-cover z-[-5] overflow-clip'>
          <source src='/image/background.mp4'/>
        </video>
      </div>
      <div className='mt-[95px] p-4 flex items-center justify-center h-[100%] w-full'>
          <div className='w-[400px] border p-4 m-auto bg-white rounded-xl mt-[120px]'>
            <h1 className='text-center text-2xl py-4 font-bold text-gray-600 underline'>Client Login</h1>
              <form action="" className='p-4'>
                <div className='flex items-center'>
                  <span className='absolute text-gray-600'><FaUser/></span>
                  <input type="text" placeholder='Username' className='border-b w-full py-3 px-6 outline-0'/>
                </div>
                <div className='my-5 flex items-center'>
                 <span className='absolute text-gray-600'> <FaLock/></span>
                  <input type={`${showPass ? 'text' :'password'}`} placeholder='Password' className='border-b w-full py-3 px-6 outline-0'/>
                  <span className='text-2xl text-gray-500 cursor-pointer' onClick={()=>setShowPass(!showPass)}>{showPass ? <BiHide/> : <BiShow/>}</span>
                </div>
                <div className='my-5'>
                  <input type="submit" value={'Login'} className='border py-3 px-7 bg-blue-600 text-white font-bold cursor-pointer'/>
                </div>
              </form>
          </div>
      </div>
     </div>
   
   </>
  )
}

export default Login