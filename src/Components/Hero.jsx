import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Video from './Video'
import { useNavigate } from 'react-router-dom'
const Hero = ({changebg}) => {
  const navigate = useNavigate();
  return (
    <div className={`mb-96  md:ml-64 ml-28   flex gap-7 flex-wrap mt-36 ${changebg ? "bg-black text-white" : "bg-white text-black"}  `}>
      {/* Card 1 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg '>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded ' src={'/travel.png'} alt="" />

        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-pink-500' />
          <h1 className='  font-bold text-lg '>Pakistan Travel Guide 2026 | Must Visit Places!</h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Travel bro</h4>
        <h4 className='ml-9 text-neutral-400'>2.4M views &bull; 1 month ago </h4>
      </div>

      {/* Card 2 */}
      <div className='leading-7 hover:bg-[#216fe42c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/gaming.png'} alt="" />

        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-purple-500' />
          <h1 className='  font-bold text-lg '>Free Fire Battle Ground 🔥 | Live in Hindi. </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Game Play</h4>
        <h4 className='ml-9 text-neutral-400'>1M views &bull; 1 year ago </h4>
      </div>

      {/* Card 3 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/vlog.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-red-500' />
          <h1 className='  font-bold text-lg '>Spend The Day With Me 🦋 | Daily Vlog.   </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>CIA RODRIGUEZ </h4>
        <h4 className='ml-9 text-neutral-400'>105k views &bull; 3 week ago </h4>
      </div>

      {/* Card 4 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/food.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-blue-500' />
          <h1 className='  font-bold text-lg '>Spicy Noodle recipe 😋 🔥 | Must try. </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Food Fusion</h4>
        <h4 className='ml-9 text-neutral-400'>15k views &bull; 5 hour ago </h4>
      </div>
      {/* Card 5 */}

      <div className='leading-7 hover:bg-[#38e4212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/math.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-green-500' />
          <h1 className='  font-bold text-lg  '>All Calculation Tricks in One Video | Master <br />  Addition, Subtraction,  Multiplication,<br />  Square/Cube Root.</h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Educational Hub</h4>
        <h4 className='ml-9 text-neutral-400'>5M views &bull; 8 month ago </h4>
      </div>
      {/* Card 6 */}

      <div className='leading-7 hover:bg-[#215fe42c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/coding.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-pink-500' />
          <h1 className='  font-bold text-lg '>FULL STACK WEB DEVELOPMENT COURSE.</h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Code bro</h4>
        <h4 className='ml-9 text-neutral-400'>1.1M views &bull; 2 year  ago </h4>

      </div>
       {/* Card 7 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}}  className='w-full h-56 object-cover rounded' src={'/pihu.PNG'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-pink-600' />
          <h1 className='  font-bold text-lg '>ROOM MEIN KYA MILA | Ep 811 | Surprise <br /> Room Check | Aayu and Pihu Show.</h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Aayu Pihu show</h4>
        <h4 className='ml-9 text-neutral-400'>3.2M views &bull; 2 week  ago </h4>

      </div>
       {/* Card 8 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/painting.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-blue-200' />
          <h1 className='  font-bold text-lg '>Cute & Asthetic Painting Ideas ✨🌷 .</h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Painting With Myself</h4>
        <h4 className='ml-9 text-neutral-400'>10k views &bull; 1 hour  ago </h4>

      </div>
       {/* Card 9 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/makeup.PNG'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-purple-200' />
          <h1 className='  font-bold text-lg '>Most Relaxing Makeup 💄 | ASMR videos.</h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Lily Lifestyle</h4>
        <h4 className='ml-9 text-neutral-400'>102k views &bull; 20 mint  ago </h4>

      </div>
       {/* Card 10 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg' >
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/ramadan.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-red-700' />
          <h1 className='  font-bold text-lg '>Ramadan Mubarak to all of the Muslims.   </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Islamic Soul</h4>
        <h4 className='ml-9 text-neutral-400'>179k views &bull; 1 year  ago </h4>

      </div>
       {/* Card 11 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/cartoon.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-pink-600' />
          <h1 className='  font-bold text-lg '>Animals Stories in English | Improve your <br /> English. </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>English Stories</h4>
        <h4 className='ml-9 text-neutral-400'>10M views &bull; 12 days  ago </h4>

      </div>
       {/* Card 12 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/portfolio.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-sky-700' />
          <h1 className='  font-bold text-lg '>Create A Portfolio Website Using HTML , CSS <br /> & JavaScript. </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Full Stack</h4>
        <h4 className='ml-9 text-neutral-400'>1.9M views &bull; 6 week  ago </h4>

      </div>
       {/* Card 13 */}
      <div className='leading-7 hover:bg-[#e483212c] transition duration-300 rounded-lg'>
        <img onClick={()=>{navigate ('/video')}} className='w-full h-56 object-cover rounded' src={'/vlog2.png'} alt="" />
        <div className='flex items-start mt-5 gap-2  '>
          <FaUserCircle className=' text-3xl text-amber-500' />
          <h1 className='  font-bold text-lg '>A Day In My Life 🌷 | Daily Vlog . </h1>
        </div>

        <h4 className='ml-9 text-neutral-400'>Diana Vlogs</h4>
        <h4 className='ml-9 text-neutral-400'>1k views &bull; 1 days  ago </h4>

      </div>

    </div>
  )
}

export default Hero
