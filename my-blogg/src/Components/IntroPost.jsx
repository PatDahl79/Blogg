import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { blogPosts } from '../Data/data';



function IntroPost({post}) { 
  const navigate=useNavigate();  
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32">
        {blogPosts.map((post) => (
            <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigate('blog-detail/' + post.id)}>
                <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover h-[200px]" /> {/* Include the image */}
                <h2 className="text-blue-500 mb-3">{post.title}</h2>
                <p className='line-clamp-3 text-gray-400 mt-3'>{post.description}</p>
                <div className='mt-4'>
                <h3 className='font-bold text-[12px]'>Stockholm</h3>
                <h3 className='text-gray-500 text-[10px]'>24 Juni 2024</h3>
            </div>
            </div>
            
        ))}
    </div>
  )
}

export default IntroPost