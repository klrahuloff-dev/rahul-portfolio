import React, { useState } from 'react'
import logoimage from "../assets/logoimage.png"
import { navMenu } from '../assets/asstes.js'
import { FaArrowRight } from 'react-icons/fa6'
import { Menu } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='fixed w-full py-4 z-50 backdrop-blur-2xl'>
            <div className='max-w-7xl mx-auto px-6 font-bold'>
                <div className='flex items-center justify-between'>
                    {/*logo */}
                    <div>
                        <img src={logoimage} className='w-40' />
                    </div>
                    {/*menu */}
                    <div className='hidden md:flex space-x-8 border border-red-700 rounded-full px-10 py-4 '>
                        {navMenu.map((item, index) => (
                            <a key={index} href={`#${item}`} >{item}</a>
                        ))}
                    </div>
                    {/*button */}
                    <div className='hidden md:block'>
                        <button className='px-8 py-3 border border-red-700 rounded-full flex items-center gap-2 cursor-pointer  hover:bg-red-700 text-black hover:translate-y-1 transition duration-300'>
                            Resume
                            <FaArrowRight className=' text-sm ' />
                        </button>
                    </div>
                    {/*mobile button */}
                    <button className='md:hidden p-2' onClick={() => setOpen((prev) => !prev)}>
                        <Menu />
                    </button>
                </div>
            </div>
            {/*mobile menu */}
            {open && (
                <div className='md :hidden flex flex-col space-y-6 rounded-lg text-black font-bold bg-red-400  px-10 py-6 '>
                    {navMenu.map((item, index) => (
                        <a key={index} href={`#${item}`} >{item}</a>
                    ))}
                    <button className="px-3 py-2 bg-white text-black border flex items-center justify-center gap-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                        Resume
                         <FaArrowRight className=' text-sm ' />
                    </button>
                </div>

            )}



        </div>
    )
}

export default Navbar