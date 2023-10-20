import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mango.png'
import aws from '../assets/aws.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import linux from '../assets/linux.png'

const Skills = () => {
  return (
    <div name='skills' className=' bg-purple-500 text-black-50'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#284339]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6 ' src={html} alt="HTML" />
                <p className='my-4'>HTML</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={css} alt="CSS" />
                <p className='my-4'>CSS</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={js} alt="Javascript" />
                <p className='my-4'>Javascript</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={react} alt="React" />
                <p className='my-4'>React.js</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={node} alt="Node.js" />
                <p className='my-4'>Node.js</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={mongo} alt="Mongodb" />
                <p className='my-4'>MongoDB</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={aws} alt="Aws" />
                <p className='my-4'>AWS</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={github} alt="Github" />
                <p className='my-4'>Github</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={tailwind} alt="Tailwind" />
                <p className='my-4'>Tailwind</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={linux} alt="Linux" />
                <p className='my-4'>Linux</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={tailwind} alt="Tailwind" />
                <p className='my-4'>Tailwind</p>
                </div>
                <div className='bg-white shadow-md shadow-[#452e2e] hover:scale-110 duration-500 rounded'>
                <img className='w-20 mx-auto pt-6' src={tailwind} alt="Tailwind" />
                <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills