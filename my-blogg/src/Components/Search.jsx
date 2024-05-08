import React, { useState } from 'react';
import banner from './../assets/pic/Anima1.png';
import { IoIosSearch } from 'react-icons/io';

function Search() {
    const tags=[
        {
            name: 'All blogs',
        },
        {
            name: 'React blog',
        },
        {
            name: 'UX/UI blog',
        },
        {
            name: 'Dev blog',
        }
    ]
  
  
    const [activeIndex,setActiveIndex]=useState(0);
    return (
    <div className="flex justify-center mt-5 flex-col px-4 md:px-8">
      <img src={banner} className="items-center w-full md:w-800" />
      <div className="bg-white shadow-lg rounded-lg p-3 mt-[-30px] mx-[15%] flex items-center">
        <IoIosSearch className="text-2xl text-gray-400" />
        <input type="text" placeholder="Search" className="outline-none ml-2" />
      </div>
      
      <div className='flex gap-10 justify-center
       mt-5'>
            {tags.map((item,index)=>(
                <ul key={item.id} onClick={()=>{setActiveIndex(index);selectedTag(item.name)}} 
                    className={`${index==activeIndex?
                    'bg-pink-200':null} p-1 pb-2 rounded-lg md:rounded-full cursor-pointer md:px-4
                    hover:scale-110 hover:border-[1px] hover:font-bold border-pink-500 transition-all duration-100 ease-in-out`}>
                    <li className='line-clamp-1'>{item.name}</li>
                </ul>
            ))}
       </div>
    
    </div>
  );
}

export default Search;
