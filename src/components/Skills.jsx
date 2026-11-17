import React from 'react'
import { skillsData } from '../assets/asstes.js'

const Skills = () => {
  return (
    <div id='skills' className='py-10'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-12 sm:mb-16 px-4'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-6'>
                    Technical
                    <span className='inline-block border-3 ml-2 sm:ml-4 border-black text-red-700  px-3 sm:px-6 py-1 sm:py-2 rounded-full'>Skills</span>
                </h2>
                <p className='text-xl mb-6 font-medium  max-w-3xl mx-auto'>Mastering the tools that power modern web experiences</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                {
                    skillsData.map((skill,index)=>(
                        <div key={index} className='p-6 border bg-red-50 border-red-700 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-red-800 hover:border-r-4 hover:border-r-red-800 hover:translate-y-1 transition-all duration-300'>
                            <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-black bg-red-50 mb-4'>
                                <skill.icon className='w-8 h-8 text-red-800'/>
                            </div>
                            <h3 className='text-xl mb-2 font-bold text-black'>{skill.title}</h3>
                            <p className='text-sm leading-relaxed text-black'>{skill.technologies.join(', ')}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills