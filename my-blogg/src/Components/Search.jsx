import React from 'react';
import banner from './../assets/Anima1.png';
import { IoIosSearch } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../Data/data';

function Search() {
    const navigate = useNavigate();

    const tags = [
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
            name: 'Women ADHD',
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
      
    return (
        <div className="justify-center mt-5 flex-col px-4 md:px-8">

            <img src={banner} className="items-center w-full md:w-4/5 max-w-[800px] mx-auto mb-8" alt="Banner" />

            <div className="bg-white shadow-lg rounded-lg p-3 mt-[-30px] mx-[15%] flex items-center">
                <IoIosSearch className="text-2xl text-gray-400" />
                <input type="text" placeholder="Search" className="outline-none ml-2" />
            </div>
          
            {/* Categ Tag list */}
            <div className='flex gap-10 justify-center mt-5'>
                {tags.map((item) => (
                    <Link key={item.id} to={item.path} className="p-1 pb-2 rounded-lg md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:text-blue-500 hover:font-bold transition-all duration-100 ease-in-out bg-transparent">
                        <li className='line-clamp-1'>{item.name}</li>
                    </Link>
                ))}               
            </div>

            <h2 className='flex items-center justify-center font-bold mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>The latest posts</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32">
                {blogPosts.slice(-9).reverse().map((post) => (
                    <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigate(`/blogs/blogcard/${post.id}`)}>
                        <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover h-[200px]" />
                        <h3 className="text-blue-500 mb-3">{post.title}</h3>
                        <p className='line-clamp-3 text-gray-400 mt-3'>{post.description}</p>
                        
                        <div className='mt-4'>
                            <h3 className='font-bold text-[14px] mt-5'>{post.name}</h3>
                            <h3 className='font-bold text-[12px] mb-5'>{post.date}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
