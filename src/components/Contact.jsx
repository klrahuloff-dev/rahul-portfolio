import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='Contact' className='py-10'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get In
                     <span className='text-red-800'> Touch</span></h1>
            </div>
            <div className='max-w-3xl mx-auto'>
                <form className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <input type='text'
                            className='px-4 py-3 w-full border border-black rounded outline-none'
                            placeholder='Enter Name'/>
                        </div>
                        <div>
                            <input type='email'
                            className='px-4 py-3 w-full border border-black rounded outline-none'
                            placeholder='Enter Email'/>
                        </div>
                    </div>
                    <div>
                        <input type='text'
                        className='px-4 py-3 w-full border border-black rounded outline-none'
                        placeholder='Enter subject'/>
                    </div>
                    <div>
                        <textarea type='textarea'
                        className='px-4 py-3 w-full h-40 border border-black rounded outline-none'
                        placeholder='Message'/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='flex items-center gap-2 px-8 py-4 bg-red-800 text-taupe-50 text-center cursor-pointer hover:bg-red-900 transition rounded-full'>
                            Send Message
                            <FaArrowRight className='text-sm'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact