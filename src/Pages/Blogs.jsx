import React from 'react'
import { blogPosts } from '../Pages/AllBlogs';
import { useNavigate } from 'react-router-dom'

function Blogs () {
  const navigate=useNavigate();
  
  return (
    <div className='mt-10 mb-20 px-10'>
      <h1 className='contact flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>{post.id}</h1>
        
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
            {blogPosts.map((post) => (
            <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigate(`/blogs/blogcard/${post.id}`)}>
                <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover h-[200px]" />
                <h3 className="text-blue-500 mb-3">{post.title}</h3>
                <p>{post.description}</p>
                
                <div className='mt-4'>
                <h4 className='text-xs'>{post.name}</h4>
                <h4 className='text-xs'>{post.date}</h4>
              </div>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Blogs
