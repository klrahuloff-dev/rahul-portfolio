import React from 'react'
import { profileData } from '../assets/asstes.js'
import { FaCode } from 'react-icons/fa6'
import heroimage from "../assets/heroimage.png"
const About = () => {
    return (
        <div id='About' className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='order-1  py-4 rounded-lg px-6'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            <span className='text-red-700'>About</span>
                            <span> Me</span>
                        </h2>
                        <p className='mb-2 leading-8 font-medium'>Hi, I'm Rahul, a B.Tech Information Technology graduate passionate about software development. I specialize in building responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS.

                            I also explore backend technologies like Node.js, Express.js, and MongoDB to expand my full-stack development skills.

                            I enjoy turning ideas into functional applications, learning new technologies, and solving real-world problems through code. My goal is to continuously grow as a developer and build impactful digital solutions.
                        </p>
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-6'>
                            {profileData.map((data, index) => (
                                <div key={index} className='w-full h-55 sm:w-50 p-6 border border-red-400 rounded hover:border-red-600 cursor-pointer hover:border-b-4 hover:border-b-red-800 hover:border-r-red-800 transition duration-300 hover:-translate-y-1'>
                                    <FaCode className='text-3xl mb-4' />
                                    <h1 className='text-xl font-bold mb-4'>{data.title}</h1>
                                    <p>{data.technologies.join(', ')}</p>
                                </div>
                            ))}
                        </div>
                        <button className='px-8 py-4 bg-red-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-red-900'>Download Resume</button>
                    </div>

                    <div className='order-1 lg:order-2 flex justify-center'>
                        <div className='relative w-72 h-72 sm:w-80 sm:h-96 floating'>
                            <div className='absolute inset-0 rounded-2xl overflow-x-hidden border-2 border-black '>
                                <img src={heroimage} className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About