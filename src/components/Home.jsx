import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#008080]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white '>Hi My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#284339]'>PR THINGS</h1>
            <h2 className='text-6xl sm:text-7xl font-bold text-[#284339]'>I am Full Stack Developer</h2>
            <p className='py-4 max-w-[700px] text-[#f1f5f9]'>I'm a full stack developer specializing in building responsive design and developing full stack web applications. </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#284339] hover:border-[#284339] rounded'>View Projects <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2' /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Home