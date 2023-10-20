import React from 'react'
// import workimg from '../assets/one.png'
import data from './data/info.json'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full bg-lime-400'>
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#284339]'>Work</p>
            <p className='py-6'>My Recent Works</p>
            </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Box of Items */}
            <div  style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#a1cebd] group container rounded-md flex justify-center items-center mx-auto card-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Linkiee 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://prthings.github.io/linkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Demo</button>
                        </a>
                        <a href="https://github.com/prthingslinkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Github</button>
                        </a>
                    </div>
                </div>
            </div>

            <div  style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#a1cebd] group container rounded-md flex justify-center items-center mx-auto card-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Linkiee 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://prthings.github.io/linkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Demo</button>
                        </a>
                        <a href="https://github.com/prthingslinkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Github</button>
                        </a>
                    </div>
                </div>
            </div>

            <div  style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#a1cebd] group container rounded-md flex justify-center items-center mx-auto card-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Linkiee 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://prthings.github.io/linkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Demo</button>
                        </a>
                        <a href="https://github.com/prthingslinkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Github</button>
                        </a>
                    </div>
                </div>
            </div>

            <div  style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#a1cebd] group container rounded-md flex justify-center items-center mx-auto card-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Linkiee 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://prthings.github.io/linkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Demo</button>
                        </a>
                        <a href="https://github.com/prthingslinkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Github</button>
                        </a>
                    </div>
                </div>
            </div>
            <div  style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#a1cebd] group container rounded-md flex justify-center items-center mx-auto card-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Linkiee 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://prthings.github.io/linkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Demo</button>
                        </a>
                        <a href="https://github.com/prthingslinkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Github</button>
                        </a>
                    </div>
                </div>
            </div>
            <div  style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#a1cebd] group container rounded-md flex justify-center items-center mx-auto card-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Linkiee 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://prthings.github.io/linkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Demo</button>
                        </a>
                        <a href="https://github.com/prthingslinkiee/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-emerald-600'>Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Work