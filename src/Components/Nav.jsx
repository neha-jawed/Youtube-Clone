import React, { useState } from 'react'

import { FiMenu, FiSearch, FiPlus } from "react-icons/fi";
import { MdKeyboardVoice, MdNotifications } from "react-icons/md";

import { FaMoon, FaSun, FaYoutube } from 'react-icons/fa';
const Nav = ({changebg , setchangebg ,open , setOpen}) => {



  return (
    <>
    <div className={` flex w-full h-14 fixed ${changebg ? "bg-black text-white" : "bg-white text-black"}` }>

{/* left nav */}

        <div className='flex items-center   px-6 py-5 text-2xl'>
        <FiMenu onClick={() => setOpen(!open)} />
    <FaYoutube className='ml-0 md:ml-5 text-red-500 ' />
        <h1 className='font-light flex  '>YouTube <sup className='text-xs text-zinc-400 '>PK</sup>  </h1>
        </div>
{/* Centre nav */}

 <div className="flex items-center   ml-0 md:ml-60 w-full md:w-[40%]">
    <input
      type="text"
      placeholder="Search"
      className="w-28 md:w-full text-white bg-zinc-950 px-4 py-2 border border-gray-900 rounded-l-full outline-none"
    />
    <button className="bg-neutral-800 mr-2  border border-gray-900 px-4 py-2 rounded-r-full flex items-center justify-center ">
      <FiSearch className="text-2xl text-white " />
    </button>

    <button className="bg-neutral-800   border border-gray-900 px-2 py-2 rounded-full flex items-center justify-center ">
      <MdKeyboardVoice className="text-2xl text-white" />
    </button>
  </div>

{/* right nav */}
<div className='flex items-center mt-3 ml-0 md:ml-56'>

{/* Change icon Dark to Ligth */}
  {changebg ? (
   <FaMoon onClick={()=> setchangebg (!changebg)}
    className=' mr-6 cursor-pointer hidden md:block'/> )
   : (
   <FaSun onClick={()=> setchangebg (!changebg)}
    className='mr-6 cursor-pointer hidden md:block' />) }

  
    <button className=" md:gap-2    border border-gray-900 px-2 py-2 rounded-full flex items-center justify-center ">
      <FiPlus className="text-2xl   " />
      <h1 className='hidden md:block'>Create</h1>
    </button>

    <button className="md:ml-3 ml-0 flex items-center justify-center ">
      <MdNotifications className="text-2xl " />
    </button>

      <img className='  w-14 ml-7 rounded-full' src={"/logo.png"} alt="logo" />
    </div>



    </div>
    </>
  )
}

export default Nav
