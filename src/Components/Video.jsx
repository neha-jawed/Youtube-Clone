import React from 'react'
import { FaThumbsDown, FaThumbsUp, FaUserCircle } from 'react-icons/fa'

const Video = ({ changebg }) => {
  return (
    <div className={` min-h-screen  ${changebg ? "bg-black text-white" : "bg-white text-black "}`}>

<div className='md:flex  '>
{/* Rigth Video */}

<div className='ml-10  flex-[2]  '>
      <video className='md:w-11/12 w-[500px]  rounded-2xl  mt-28' src={'/video.mp4'} controls ></video>

      <h1 className='lg:text-2xl  font-bold'>Serenity of Nature: Flowing Water & Green Escape</h1>

      <div className=' mt-5 gap-2  flex  items-start   '>
        <FaUserCircle className='  text-3xl ' />
        <div >
          <h1 className='text-xl  '>UnKown</h1>
          <h3 className='text-sm text-neutral-400'>1.24M subscriber </h3>
        </div>
        <button className='border active:scale-95 rounded-3xl px-4 py-2 font-medium ml-6  bg-white text-black '>Subscribe</button>
      </div>
      {/* Decsription */}
      <div className='font-medium bg-neutral-900 w-8/12 mt-5 rounded-3xl p-3'>
        <h3 className='inline'>2M views  1 year ago </h3>
        <p className='ml-3 inline'>#Funny #viral </p>
        <h3>Serenity of Nature: Flowing Water & Green Escape</h3>
        <p className='text-blue-600'>#funny #viral</p>
        <p>....more</p>
      </div>
</div>


{/* Left Suggestion */}
<div className='w-full md:w-[380px] lg:w-[450px] flex flex-col gap-4 mt-6 md:mt-28 px-3 md:px-0'>

  {/* Card 1 */}
  <div className='flex flex-col md:flex-row gap-2'>
    <img className='w-full md:w-44 lg:w-56 h-44 md:h-28 object-cover rounded flex-shrink-0' src={'/travel.png'} alt="" />
    <div className='flex gap-1 min-w-0'>
      <FaUserCircle className='text-2xl text-pink-500 mt-1 flex-shrink-0' />
      <div className='min-w-0'>
        <h1 className='font-bold text-sm leading-snug line-clamp-2'>Pakistan Travel Guide 2026 | Must Visit Places!</h1>
        <h4 className='text-neutral-400 text-xs mt-1'>Travel bro</h4>
        <h4 className='text-neutral-400 text-xs'>2.4M views &bull; 1 month ago</h4>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className='flex flex-col md:flex-row gap-2'>
    <img className='w-full md:w-44 lg:w-56 h-44 md:h-28 object-cover rounded flex-shrink-0' src={'/gaming.png'} alt="" />
    <div className='flex gap-1 min-w-0'>
      <FaUserCircle className='text-2xl text-purple-500 mt-1 flex-shrink-0' />
      <div className='min-w-0'>
        <h1 className='font-bold text-sm leading-snug line-clamp-2'>Free Fire Battle Ground 🔥 | Live in Hindi.</h1>
        <h4 className='text-neutral-400 text-xs mt-1'>Game Play</h4>
        <h4 className='text-neutral-400 text-xs'>1M views &bull; 1 year ago</h4>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className='flex flex-col md:flex-row gap-2'>
    <img className='w-full md:w-44 lg:w-56 h-44 md:h-28 object-cover rounded flex-shrink-0' src={'/vlog.png'} alt="" />
    <div className='flex gap-1 min-w-0'>
      <FaUserCircle className='text-2xl text-red-500 mt-1 flex-shrink-0' />
      <div className='min-w-0'>
        <h1 className='font-bold text-sm leading-snug line-clamp-2'>Spend The Day With Me 🦋 | Daily Vlog.</h1>
        <h4 className='text-neutral-400 text-xs mt-1'>CIA RODRIGUEZ</h4>
        <h4 className='text-neutral-400 text-xs'>105k views &bull; 3 week ago</h4>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className='flex flex-col md:flex-row gap-2'>
    <img className='w-full md:w-44 lg:w-56 h-44 md:h-28 object-cover rounded flex-shrink-0' src={'/food.png'} alt="" />
    <div className='flex gap-1 min-w-0'>
      <FaUserCircle className='text-2xl text-blue-500 mt-1 flex-shrink-0' />
      <div className='min-w-0'>
        <h1 className='font-bold text-sm leading-snug line-clamp-2'>Spicy Noodle recipe 😋 🔥 | Must try.</h1>
        <h4 className='text-neutral-400 text-xs mt-1'>Food Fusion</h4>
        <h4 className='text-neutral-400 text-xs'>15k views &bull; 5 hour ago</h4>
      </div>
    </div>
  </div>

  {/* Card 5 */}
  <div className='flex flex-col md:flex-row gap-2'>
    <img className='w-full md:w-44 lg:w-56 h-44 md:h-28 object-cover rounded flex-shrink-0' src={'/painting.png'} alt="" />
    <div className='flex gap-1 min-w-0'>
      <FaUserCircle className='text-2xl text-blue-300 mt-1 flex-shrink-0' />
      <div className='min-w-0'>
        <h1 className='font-bold text-sm leading-snug line-clamp-2'>Cute & Asthetic Painting Ideas ✨🌷.</h1>
        <h4 className='text-neutral-400 text-xs mt-1'>Painting With Myself</h4>
        <h4 className='text-neutral-400 text-xs'>10k views &bull; 1 hour ago</h4>
      </div>
    </div>
  </div>

</div>
</div>
  

   {/* Comment Seaction*/}
<div className='ml-10 hidden md:block'>
      <h1 className='mt-6 text-2xl font-medium '>173 Comments </h1>

      <div className='mt-5'>
        <img className='w-12  inline rounded-full' src={'/logo.png'} alt="" />
        <input
          className='ml-3 bg-transparent border-b-2 border-neutral-800 w-7/12 focus:border-b-white outline-none transition-all duration-300'
          type="text"
          placeholder='Add a comment...' />
      </div>


      {/* People  Commemts */}
      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-pink-400' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@AliRaz_12345</h3>
            <p className='text-neutral-400 text-sm'>1 month ago</p>
          </div>

          <p className="mt-1">
            Very beautiful view I like it 😍
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >3</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-purple-400' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@Sanibajiii009</h3>
            <p className='text-neutral-400 text-sm'>5 week ago</p>
          </div>

          <p className="mt-1">
            This Place is awesome . where is this place?
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >223</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-blue-400' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@alexxii_</h3>
            <p className='text-neutral-400 text-sm'>1 year ago</p>
          </div>

          <p className="mt-1">
            ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >3</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-red-400' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@jpffg600</h3>
            <p className='text-neutral-400 text-sm'>11 month ago</p>
          </div>

          <p className="mt-1">
            I am going to see this place 😅.Who is come with me🧐
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >1</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-amber-900' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@islamicsoul10</h3>
            <p className='text-neutral-400 text-sm'>5 month ago</p>
          </div>

          <p className="mt-1">
            Just Looking Like a Wow 😅🥰😝
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >22</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-yellow-400' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@aligan000_12345</h3>
            <p className='text-neutral-400 text-sm'>1 week ago</p>
          </div>

          <p className="mt-1">
            Today is my Birthday🎂😁
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >223</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-pink-400' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@zain_5</h3>
            <p className='text-neutral-400 text-sm'>20 mint ago</p>
          </div>

          <p className="mt-1">
            ☺️☺️😍😚💫⭐
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >7</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>



      <div className='mt-8 flex items-start gap-2'>
        <FaUserCircle className='text-3xl text-pink-200' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@divaagirll</h3>
            <p className='text-neutral-400 text-sm'>70 mint ago</p>
          </div>

          <p className="mt-1">
            Bohot piyaaari jaga hhh ❤️
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >10</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>




      <div className='mt-8 flex items-start gap-2 mb-20'>
        <FaUserCircle className='text-3xl' />
        <div className="flex flex-col">

          <div className="flex gap-2 items-center">
            <h3 className='font-medium'>@desh12345</h3>
            <p className='text-neutral-400 text-sm'>15 hour ago</p>
          </div>

          <p className="mt-1">
            Nice Camera
          </p>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <FaThumbsUp />
            <p >1</p>
            <FaThumbsDown />
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>
</div>


    </div>




  )
}

export default Video
