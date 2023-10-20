import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen bg-emerald-300 text-neutral-50'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2'>
               <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#284339]'>About</p>
               </div>
               <div>

               </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I am PR Things, please take look around.</p>
                </div>
                <div>
                    <p>I am Passionate about building and designing web applications.</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About