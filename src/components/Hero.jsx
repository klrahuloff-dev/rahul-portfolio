import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import heroimage from "../assets/heroimage.png"

const Hero = () => {
  return (
    <div id='home' className='min-h-screen flex items-center pt-16'>
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/*left side */}
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
              <span className='text-red-700'>Java</span>
              <br/>
              <span>FullStack Developer </span>
            </h1>
            <p className='text-xl text-zinc-900 mb-6'>
             Crafting modern web applications with clean code and creative thinking
            </p>
            <div className='flex flex-col md:flex-row items-center gap-4'>
              <button className='flex items-center gap-2 px-10 py-4 bg-white border border-black text-black rounded-full hover:bg-black hover:text-white cursor-pointer transition-all duration-300'>
                View My Works
                <FaArrowRight/>
              </button>
              <button className='flex items-center gap-2 px-10 py-4 bg-white border border-red-700 text-black rounded-full hover:bg-red-700 hover:text-white cursor-pointer transition-all duration-300'>
                Contact Me
                <FaArrowRight/>
                </button>
            </div>
          </div>
          {/*Right side */}
          <div className='flex justify-center'>
            <div className='relative w-72 h-72 sm:w-80 sm:h-96 floating'>
              <div className='absolute inset-0 rounded-2xl overflow-x-hidden border-2 border-black '>
                <img src={heroimage} className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero