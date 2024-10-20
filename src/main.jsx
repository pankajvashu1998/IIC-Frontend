import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from 'react-router-dom'
import Root from './Root'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Course from './Component/Course/Course'
import Login from './Component/Login/Login'
import StudentZone from './Component/Student Zone/StudentZone'
import Download from './Component/Student Zone/Download/Download'
import Exam_Reg from './Component/Student Zone/Exam Reg/Exam_Reg'
import Gallery from './Component/Student Zone/Gallery/Gallery'
import OnlilneTest from './Component/Student Zone/Online Test/OnlilneTest'
import View_Result from './Component/Student Zone/View Result/View_Result'
import Dashboard from './Component/Student Zone/Dashboard/Dashboard'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='course' element={<Course/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/login' element={<Login/>}/>
    </Route>
    <Route path='/student/zone' element={<StudentZone/>}>
      <Route path='/student/zone' element={<Dashboard/>}/>
      <Route path='download' element={<Download/>}/>
      <Route path='exam/registration' element={<Exam_Reg/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='online/test' element={<OnlilneTest/>}/>
      <Route path='result/view' element={<View_Result/>}/>
    
    </Route>
    
    </>
    
    
  ),
 
  
  
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
