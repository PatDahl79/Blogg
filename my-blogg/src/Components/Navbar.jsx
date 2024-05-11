import React from 'react'
import Logo from './../assets/Logo-dark.png'
import { FaYoutube } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate();
  const handleClick = (path) => {navigate(path); };// Navigate to the specified path when the item is clicked

  return (
    <div className="flex justify-between items-center">
      <img src={Logo} className='w-[100px] hover:font-bold cursor-pointer' onClick={()=>navigate('/')} />
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('/')}>Home</li>
        <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('about')} >About</li>
        <li className='hover:font-bold cursor-pointer'onClick={()=>navigate('blogs')} >Blogs</li>
        <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('contact')} >Contact</li>
      </ul>
      <button className='bg-blue-500 rounded-full text-white flex items-center'>Subscribe <FaYoutube className='ml-3' /> </button>
    </div>
  )
}

export default Navbar
