import React from 'react'
import logoimage from "../assets/logoimage.png"
import { FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='py-12 border-t-2 border-t-black'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='mb-6 md:mb-0'>
                    <img src={logoimage} className='w-32'/>
                </div>
                <div className='flex space-x-6 md-6 md:mb-0'>
                    <a href='https://www.linkedin.com/in/rahul-kl-'>  <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer