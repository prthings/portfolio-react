import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logo1.png'
import {Link} from 'react-scroll'

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
                <li>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>Work</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handletoggle} className='md:hidden z-10'>
            {!nav?<FaBars className='text-black'/>:<FaTimes className='text-white'/>}
        </div>
        {/* Mobile Menu list */}
        <ul className={!nav? 'hidden': 'flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#388d7f] text-white'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handletoggle} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handletoggle} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handletoggle} to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handletoggle} to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handletoggle} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        {/* Social icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar