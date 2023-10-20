import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logo1.png'

function Navbar() {
    const [nav, setNav]=useState(false)
    const handletoggle=()=>setNav(!nav)
  return (
    <div className='fixed w-full h[60px] flex justify-between items-center px-4 bg-[#f3f3f3] text-black text-lg z-20'>
        <div>
            <img src={logo} alt="Logo for Portfolio" style={{width:'100px'}} />
        </div>
        {/* Menu Bar */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handletoggle} className='md:hidden z-10'>
            {!nav?<FaBars className='text-black'/>:<FaTimes className='text-white'/>}
        </div>
        {/* Mobile Menu list */}
        <ul className={!nav? 'hidden': 'flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#388d7f] text-white'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/* Social icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar