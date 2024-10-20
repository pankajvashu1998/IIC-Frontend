import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDownloading } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdChecklist } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import {NavLink} from "react-router-dom"
import { IoClose } from "react-icons/io5";
import { Outlet } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import Dashboard from './Dashboard/Dashboard';



function StudentZone() {
    let[toggle, setToggle]=useState(false)
  return (
   <>
         <div>
           <nav className='fixed top-0 w-full flex bg-blue-900 items-center justify-between'>
            <h1 className='text-2xl px-4 font-bold  text-white py-5 '>STUDENT ZONE</h1>
           {toggle ?  <span className='mx-4 text-2xl text-white p-2 cursor-pointer xl:hidden' onClick={()=>setToggle(!toggle)}><IoClose/></span> : <span className='mx-4 text-2xl text-white p-2 cursor-pointer xl:hidden' onClick={()=>setToggle(!toggle)}><GiHamburgerMenu/></span>}
           </nav>
           <div className='flex mt-[72px]'>
                    <div className='p-4 w-2/12 h-screen fixed left-0 bg-blue-800 hidden xl:block'>
                        <h1></h1>
                        <ul className='text-white font-semibold'>
                            <NavLink to={''} end >
                                <li className='py-3 w-full  bg-blue-600 rounded my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><IoHomeOutline/></span>
                                    <p>Dashboard</p>
                                </li>
                            </NavLink>
                            <NavLink to={'download'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b  my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><MdOutlineDownloading/></span>
                                    <p>Download</p>
                                </li>
                            </NavLink>
                            <NavLink to={'exam/registration'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><MdGroups/></span>
                                    <p>Exam Registration</p>
                                </li>
                            </NavLink>
                            <NavLink to={'result/view'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b  my-4 px-2  flex items-center gap-2'>
                                <span className='text-xl'><MdChecklist/></span>
                                <p>View Result</p>
                                 </li>
                            </NavLink>
                            <NavLink to={'gallery'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b my-4 px-2 flex items-center gap-2'>
                                    <span className='text-xl'><GrGallery/></span>
                                    <p>Gallery</p>
                                </li>
                            </NavLink>
                           <NavLink to={'online/test'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                            <li className='py-3 w-full border-b my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><RiComputerLine/></span>
                                    <p>Online Test</p>
                            </li>
                           </NavLink>
                        </ul>

                        {/* Responsive Sidebar */}

                    </div>

                    {/* Responsive Sidebar */}

                    <div className={`p-4 w-[240px] h-screen fixed left-0 bg-blue-800 xl:hidden block ${toggle ? 'left-0' : 'left-[100%]'}`} onClick={()=>setToggle(!toggle)}>
                        <ul className='text-white font-semibold'>
                            <NavLink to={''}>
                                <li className='py-3 w-full border-b my-4 px-2 flex items-center gap-2'>
                                    <span className='text-xl'><IoHomeOutline/></span>
                                    <p>Dashboard</p>
                                </li>
                            </NavLink>
                            <NavLink to={'download'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b my-4 px-2 flex items-center gap-2'>
                                    <span className='text-xl'><MdOutlineDownloading/></span>
                                    <p>Download</p>
                                </li>
                            </NavLink>
                            <NavLink to={'exam/registration'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><MdGroups/></span>
                                    <p>Exam Registration</p>
                                </li>
                            </NavLink>
                            <NavLink to={'result/view'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b my-4 px-2  flex items-center gap-2'>
                                <span className='text-xl'><MdChecklist/></span>
                                <p>View Result</p>
                                 </li>
                            </NavLink>
                            <NavLink to={'gallery'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                                <li className='py-3 w-full border-b my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><GrGallery/></span>
                                    <p>Gallery</p>
                                </li>
                            </NavLink>
                           <NavLink to={'online/test'} className={({isActive})=> `${isActive ? "text-yellow-300 " : ""}`}>
                            <li className='py-3 w-full border-b my-4 px-2  flex items-center gap-2'>
                                    <span className='text-xl'><RiComputerLine/></span>
                                    <p>Online Test</p>
                            </li>
                           </NavLink>
                        </ul>

                        {/* Responsive Sidebar */}

                    </div>

                    <div className=' border w-full xl:ml-[270px] '>
                        <Outlet/>
                    </div>
           </div>
         </div>
   
   </>
  )
}

export default StudentZone