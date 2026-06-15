import React, { useState } from 'react'
import { MdHome, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaFlag, FaUserCircle, FaYoutube } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import {  MdDownload, MdSportsEsports } from "react-icons/md";
import { FaMusic, FaNewspaper } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { SiYoutubemusic, SiYoutubekids } from "react-icons/si";


const Sidebar = ({changebg , open}) => {
  const [active, setactive] = useState(true)
  

  return (
    <div   style={{ left: open ? "0" : "-50%" }} className={`left-0 fixed  top-14   w-28   md:w-60  h-[calc(100vh-56px)] overflow-y-auto   ${changebg ? "bg-black text-white" : "bg-white text-black"} `}>
{/* Side Icon or Text */}
<div className='flex   ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   mt-4 border-none hover:bg-neutral-500'>
  <MdHome className='text-3xl' />
  <span className='text-sm hidden md:block'>Home</span>
  </button>
</div>
<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <SiYoutubeshorts className='text-2xl' />
  <span className='text-sm hidden md:block '>Shorts</span>
  </button>
</div>
<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500 '>
  <MdSubscriptions className='text-3xl' />
  <span className='text-sm hidden md:block '>Subscription</span>
  </button>
</div>

      <hr className='border-spacing-1 mt-4 border-zinc-700'/>


  <h1 className=' text-xl px-4  py-3 '><pre>You {'>'} </pre></h1>

 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <FaUserCircle  className='text-3xl' />
  <span className='text-base hidden md:block '>Your channal</span>
  </button>
</div>
 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdHistory  className='text-3xl' />
  <span className='text-base hidden md:block'>History</span>
  </button>
</div>
 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdOutlinePlaylistPlay className='text-3xl' />
  <span className='text-base hidden md:block'>Playlists</span>
  </button>
</div>
 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdOutlineWatchLater  className='text-3xl' />
  <span className='text-base hidden md:block'>Watch later</span>
  </button>
</div>
 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdThumbUp  className='text-2xl' />
  <span className='text-base hidden md:block'>Liked videos</span>
  </button>
</div>
 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdVideoLibrary className='text-2xl' />
  <span className='text-base hidden md:block'>Your videos</span>
  </button>
</div>
 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdDownload  className='text-3xl' />
  <span className='text-base hidden md:block'>Download</span>
  </button>
</div>

  <hr className='border-spacing-1 mt-4 border-zinc-700'/>
   
 <h1 className=' text-xl px-4  py-2 '>Explore</h1>

<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <FaMusic className='text-xl' />
  <span className='text-base hidden md:block'>Music</span>
  </button>
</div>
<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <IoGameController  className='text-3xl' />
  <span className='text-base hidden md:block'>Gaming</span>
  </button>
</div>
<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <FaNewspaper className='text-2xl' />
  <span className='text-base hidden md:block'>News</span>
  </button>
</div>
<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <MdSportsEsports className='text-2xl' />
  <span className='text-base hidden md:block'>Sports</span>
  </button>
</div>

 <hr className='border-spacing-1 mt-4 border-zinc-700'/>

<h1 className=' text-lg font-medium px-4  py-2 '>More from YouTube</h1>

<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <FaYoutube className='text-red-600 text-2xl' />
  <span className='text-base hidden md:block'>YouTube Premium</span>
  </button>
</div>

<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <SiYoutubemusic className='text-red-600 text-2xl' />
  <span className='text-base hidden md:block'>YouTube Music</span>
  </button>
</div>

<div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500'>
  <SiYoutubekids className='text-red-600 text-2xl' />
  <span className='text-base hidden md:block'>YouTube Kids</span>
  </button>
</div>
 <hr className='border-spacing-1 mt-4 border-zinc-700'/>

 <div className='flex  ml-3 text-xl ' >
  <button className='flex items-center border rounded-md text-xl mt-3 gap-3 w-52 py-2  px-1   border-none  hover:bg-neutral-500 '>
  <FaFlag className=' text-2xl' />
  <span className='text-base hidden md:block'>Repeat History</span>
  </button>
</div>

 <hr className='border-spacing-1 mt-4 border-zinc-700'/>

 <p className='whitespace-pre-wrap break-words text-sm p-5  font-bold text-neutral-400'>About  Press  Copyright Contactus  Creators  Advertise Developers</p>
 <p className='whitespace-pre-wrap break-words text-sm py-1 px-4 font-bold  text-neutral-400'>Terms  Privacy  Policy &  Safety How YouTube works             Test new features </p>

 <p className='text-xs text-neutral-700 p-5'>© 2026 Google LLC</p>

    </div>
  )
}

export default Sidebar
