import React from 'react';
import banner from './../assets/pic/Anima1.png';
import { IoIosSearch } from 'react-icons/io';

function Search() {
  return (
    <div className="flex justify-center mt-5 flex-col px-4 md:px-8">
      <img src={banner} className="items-center w-full md:w-800" />
      <div className="bg-white shadow-lg rounded-lg p-3 mt-[-30px] mx-[15%] flex items-center">
        <IoIosSearch className="text-2xl text-gray-400" />
        <input type="text" placeholder="Search" className="outline-none ml-2" />
      </div>
      <div className="flex justify-center mt-5">
        <ul className="flex gap-10 md:gap-14">
          <li className="hover:font-bold cursor-pointer p-1 pb-2 rounded-lg md:rounded-full 
          cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-gray-500 transition-all duration-100 ease-in-out">
            All blogs
          </li>
          <li className="hover:font-bold cursor-pointer p-1 pb-2 rounded-lg md:rounded-full 
          cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-gray-500 transition-all duration-100 ease-in-out">
            React blog
          </li>
          <li className="hover:font-bold cursor-pointer p-1 pb-2 rounded-lg md:rounded-full 
          cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-gray-500 transition-all duration-100 ease-in-out">
            UX/UI blog
          </li>
          <li className="hover:font-bold cursor-pointer p-1 pb-2 rounded-lg md:rounded-full 
          cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-gray-500 transition-all duration-100 ease-in-out">
            Dev blog
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
