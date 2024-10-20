import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



function Header() {
    let[toggle, setToggle] = useState(false)
  return (
   <>
     <div>
        <nav className='px-4 py-6 bg-white shadow flex justify-between items-center z-[10] fixed top-0 w-full'>
            <h1 className='text-2xl font-bold text-gray-700 lg:hidden block'>IIC</h1>
            <h1 className='text-2xl font-bold text-gray-700 hidden lg:block'>ICON INSTITUTE OF COMPUTER</h1>
            <div>
                <ul className='hidden lg:flex items-center gap-10 font-semibold text-gray-700 '>
                    <li><NavLink to={'/'} className={({isActive})=> `${isActive ? "text-orange-700 " : "text-gray-700"}`}>Home</NavLink></li>
                    <li><NavLink to={'/about'} className={({isActive})=> `${isActive ? "text-orange-700 " : "text-gray-700"}`}>About</NavLink></li>
                    <li><NavLink to={'/course'} className={({isActive})=> `${isActive ? "text-orange-700 " : "text-gray-700"}`}>Course</NavLink></li>
                    <li><NavLink to={'/contact'} className={({isActive})=> `${isActive ? "text-orange-700 " : "text-gray-700"}`}>Contact</NavLink></li>
                    <li><Link to={'/student/zone'}>Zone</Link></li>
                </ul>
                {/* Responsive Navbar */}
                <ul className={`z-[10] lg:hidden  gap-12 font-semibold text-white fixed  bg-gray-700 w-full top-[73px] h-screen ${toggle ? "left-0" : "left-[100%]"} duration-300`} onClick={()=>setToggle(!toggle)}>
                    <li className='py-4 px-3 border-b'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='py-4 px-3 border-b'><NavLink to={'/about'}>About</NavLink></li>
                    <li className='py-4 px-3 border-b'><NavLink to={'/course'}>Course</NavLink></li>
                    <li className='py-4 px-3 border-b'><NavLink to={'/contact'}>Contact</NavLink></li>
                    <li className='py-4 px-3 border-b'><Link to={'/student/zone'}>Zone</Link></li>
                </ul>
            </div>
            <div className='flex items-center gap-2 justify-center'>
                    <span className='text-3xl text-gray-700'><FaUser/></span>
                    <button className='py-2 px-3 border border-gray-300 font-semibold  rounded text-gray-700'><NavLink to={'/user/login'}>Client Login</NavLink></button>
                    {toggle ?  <span className='text-2xl border border-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white lg:hidden block' onClick={()=>setToggle(!toggle)}><IoCloseSharp/></span> :  <span className='text-2xl border border-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white lg:hidden block' onClick={()=>setToggle(!toggle)}><GiHamburgerMenu/></span> }
                   
            </div>
        </nav>
     </div>
   
   </>
  )
}

export default Header