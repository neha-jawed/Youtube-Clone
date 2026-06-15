import React from 'react'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Video from './Components/Video'
import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [changebg, setchangebg] = useState(true);
  function getTheme() {
    return changebg ? "bg-black text-white" : "bg-white text-black";
  }

  return (
    <div className={`w-full min-h-screen flex flex-col ${getTheme()}`}>

        <Nav open={open} setOpen={setOpen} changebg={changebg} setchangebg={setchangebg} />

{!location.pathname.startsWith("/hero/video") && <Sidebar open={open} setOpen={setOpen} changebg={changebg} />}
  <Routes>
    <Route path='/' element={<Hero  changebg={changebg} />} />
    <Route path='/video' element={<Video changebg={changebg} />} />
  </Routes>

        {/* <Sidebar changebg={changebg} /> */}
      
      </div>



  )
}

export default App
