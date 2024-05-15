import React, { useState } from 'react';
import Logo from './../assets/Logo-dark.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage the dropdown menu visibility


  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState); // Toggle the dropdown menu visibility
  };

  const tags = [
    { id: 1, name: 'General ADHD', path: 'general' },
    { id: 2, name: 'Men ADHD', path: 'men' },
    { id: 3, name: 'Women ADHD', path: 'women' },
    { id: 4, name: 'Kids ADHD', path: 'kids' },
    { id: 5, name: 'Author', path: 'author' },
    { id: 6, name: 'All Blogs', path: 'postslists' },
  ];

  const handleTagClick = (tag) => {
    navigate(tag.path);
  };

  return (
    <div className='container mx-auto flex justify-between py-5 text-center'>
      <img src={Logo} className="w-[100px] hover:font-bold cursor-pointer" onClick={() => navigate('/')} alt="Logo" />
      <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer" onClick={() => navigate('/')}>Home</li>
        <li className="relative" onClick={toggleDropdown}>
        Blogs
          {dropdownOpen && (   //Dropdown menu 
            <div className="absolute bg-gray-400 shadow-lg rounded-lg p-3 mt-1 w-48 z-10">
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id} onClick={() => handleTagClick(tag)} className="py-2 cursor-pointer hover:text-black">{tag.name}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="hover:font-bold cursor-pointer" onClick={() => navigate('dashboard')}>My profile</li>
        <li className="hover:font-bold cursor-pointer" onClick={() => navigate('login')}>Login</li>
        <li className="hover:font-bold cursor-pointer" onClick={() => navigate('contact')}>Contact</li>
      </ul>
    </div>
  );
}
export default Navbar;
