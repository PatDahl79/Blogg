import React, { useState, useRef } from 'react';
import Logo from './../assets/Logo-dark.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage the dropdown menu visibility
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState); // Toggle the dropdown menu visibility
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Close the dropdown menu
  };

  const handleTagClick = (tag) => {
    navigate(tag.path);
  };

  // Define the 'tags' array
  const tags = [
    { id: 1, name: 'General ADHD', path: 'general' },
    { id: 2, name: 'Men ADHD', path: 'men' },
    { id: 3, name: 'Women ADHD', path: 'women' },
    { id: 4, name: 'Kids ADHD', path: 'kids' },
    { id: 5, name: 'Author', path: 'author' },
    { id: 6, name: 'All Blogs', path: 'blogs' },
  ];

  return (
    <div className='container mx-auto flex justify-between py-5 text-center'>
      <img src={Logo} className="w-[100px] hover:font-bold cursor-pointer" onClick={() => navigate('/')} alt="Logo" />
      <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <span className="text-white cursor-pointer" onClick={toggleDropdown}>Blogs</span>
          {dropdownOpen && (   //Dropdown menu 
            <div 
              ref={dropdownRef} 
              className="absolute bg-white shadow-lg rounded-lg p-3 mt-1 w-48 z-10"
              onMouseLeave={closeDropdown} // Close the dropdown when the mouse leaves
            >
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id} onClick={() => handleTagClick(tag)} className="py-2 text-blue-500 cursor-pointer hover:text-black">{tag.name}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link to="/dashboard">My profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className='bg-gradient-to-r from-blue-500 to-purple-600'onClick={() => setIsNavShowing(!isNavShowing)}>{isNavShowing ? <AiOutlineClose/> : <FaBars/>}</button>
    </div>
  );
}

export default Navbar;
