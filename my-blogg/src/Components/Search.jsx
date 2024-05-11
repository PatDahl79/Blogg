import React, { useEffect, useState } from 'react'
import banner from './../assets/Anima1.png';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Search({selectedTag}) {
    const tags=[
        {
            id: 1,
            name: 'General ADHD',
            path: 'general'
        },
        {
            id: 2,
            name: 'Men ADHD',
            path: 'men'
        },
        {
            id: 3,
            name: 'Wemen ADHD',
            path: 'women'
        },
        {
            id: 4,
            name: 'Kids ADHD',
            path: 'kids'
        },
        {
            id: 5,
            name: 'Author',
            path: 'author'
        }
    ]
  
    const [activeIndex,setActiveIndex]=useState(0);

    return (
    <div className="flex justify-center mt-5 flex-col px-4 md:px-8">
      <img src={banner} className="items-center w-full md:w-4/5 max-w-[800px] mx-auto mb-8" alt="Banner" />
      <div className="bg-white shadow-lg rounded-lg p-3 mt-[-30px] mx-[15%] flex items-center">
        <IoIosSearch className="text-2xl text-gray-400" />
        <input type="text" placeholder="Search" className="outline-none ml-2" />
      </div>
      
      <div className='flex gap-10 justify-center mt-5'>
            {tags.map((item,index)=>(
                <Link key={item.id} to={item.path} onClick={()=>{setActiveIndex(index);selectedTag(item.name)}} 
                // Link handler each tag that sets the activeIndex state and calls the selectedTag function when clicked.
                    className={`${index==activeIndex?  //The activeIndex state is used to apply a different background color to the active tag.
                    'bg-pink-200':null} p-1 pb-2 rounded-lg md:rounded-full cursor-pointer md:px-4
                    hover:scale-110 hover:border-[1px] hover:text-blue-500 hover:font-bold border-pink-500 transition-all duration-100 ease-in-out`}>
                    <li className='line-clamp-1'>{item.name}</li>
                </Link>
            ))}               
       </div>
    
    </div>
  );
}

export default Search;
