import React from 'react'
import Logo from './../assets/Logo/Logo-dark.png'
import { FaYoutube } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} className='w-[100px]' />
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About</li>
        <li className='hover:font-bold cursor-pointer'>Blogs</li>
        <li className='hover:font-bold cursor-pointer'>Contact</li>
      </ul>
      <button className='bg-blue-500 rounded-full text-white flex items-center'>Subscribe <FaYoutube className='ml-3' /> </button>
    </div>
  )
}

export default Navbar
