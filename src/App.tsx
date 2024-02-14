import { useState } from 'react'
import Navigation from './components/Navigation'
import EventCalendar from './events/EventCalendar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SideNav from './components/SideNav'
import Scheduled from './schedule/Schedule'
import Dashboard from './dashboard/Dashboard'
import ReviewerComp from './reviewer/ReviewerComp'
import Account from './account/Account'
import ExtPage from './extend-request/ExtPage'
import Student from './students/Student'
import Reviewer from './schedule/Reviewer'
import Chat from './chat/Chat'
import SignIn from './components/SignIn'
import Footer from './components/Footer'


function App() {
  let user:boolean=true
 

  return (
    <>
    <div className='  bg-gray-200'>

  

    {

user?<Navigation/>:   <SignIn/>
    }

 
    <BrowserRouter>
    
    <div className="max-w-7xl w-full  pt-28  mx-auto flex gap-8 ">       
       <div className=' border border-gray-200  rounded-lg w-2/12  bg-white h-fit'>
   

<SideNav/>
   
       </div>
       <div className=" rounded-md  w-full     ">


      
      <Routes>
     
      
     <Route path='/dashboard/' element={<Dashboard/>}></Route>
     <Route path='/reviews/' element={<Scheduled/>}></Route>
     <Route path='/schedule/doamin-reviewer/' element={<Reviewer/>}></Route>
     <Route path='/reviewers/' element={<ReviewerComp/>}></Route>
     <Route path='/account/' element={<Account/>}></Route>
     <Route path='/events/' element={<EventCalendar/>}></Route>
     <Route path='/cancelled-reviews/' element={<Scheduled/>}></Route>
     <Route path='/rescheduled-review/' element={<Scheduled/>}></Route>
     <Route path='/extend-requests/' element={<ExtPage/>}></Route>
     <Route path='/students/' element={<Student/>}></Route>
     <Route path='/chat/' element={<Chat/>}></Route>
    
   </Routes>
      
   </div>
    

      {/* <EventCalendar/> */}
      </div>

   
    
      </BrowserRouter>
      <Footer/>
      </div>

      </>
     
   
  )
}

export default App
