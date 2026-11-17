import React from 'react'
import { projectData } from '../assets/asstes.js'

const Cards = () => {
  return (
    <div id='cards' className='py-10'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
            
            <div className='mb-16 text-center'>
                <h2 className='text-4xl sm:text-5xl font-bold text-black-400 mb-6'>
                    Featured
                    <span className='text-red-700'> Projects</span>
                </h2>
                <p className='text-xl max-w-3xl m-auto'>Showcasing my journey of learning, building, and experimenting with technologies to transform ideas into impactful digital solutions</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto'>
                {projectData.map((project,index)=>(
                    <div key={index} className='group rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer  border-3 hover:-translate-y-1 duration-300'>
                        <div className='relative flex items-center justify-center'>
                            <img src={project.image} className='group-hover:opacity-100 '/>
                        </div>
                        <div className='p-4'>
                            <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                            <p className='text-slate-900 text-sm'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {project.tech.map((language,index)=>(
                                    <span key={index} className='px-4 py-1 bg-red-700 text-white text-xs font-semibold rounded-full mt-6'>
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cards