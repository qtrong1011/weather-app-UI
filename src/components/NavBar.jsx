import React, { useState } from 'react'
import WeatherLogo from '../assets/weather.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from "react-router-dom"


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=>setNav(!nav)
  return (
    <div className='w-[100%] flex justify-between items-center shadow-sm shadow-[#040c16] text-[#FAF1E4]'>
        <div>
            <img src={WeatherLogo} alt='Logo' style={
                {
                    width: '50px',
                    marginLeft: '10px',
                    marginTop : '10px'
                }
            }></img>
        </div>
        {/* Menu */}
        <ul className='md:flex hidden'>
            <li  className="text-2xl"><Link to={'/'}>Weather</Link></li>
            <li className='text-2xl'><Link to={'/about'}>About</Link></li>
            <li className='text-2xl'><Link to={'/references'}>Help</Link></li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer text-2xl px-2'>
            {
                !nav ? <FaBars/> : <FaTimes/>
            }
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden': 'absolute w-full h-screen bg-[#435334] top-0 left-0 flex flex-col justify-center items-center '}>
            <li onClick={handleClick} className='text-4xl py-6'><Link to={'/'}>Weather</Link></li>
            <li onClick={handleClick} className='text-4xl py-6'><Link to={'/about'}>About</Link></li>
            <li onClick={handleClick} className='text-4xl py-6'><Link to={'/references'}>References</Link></li>
        </ul>

    </div>
  )
}

export default NavBar