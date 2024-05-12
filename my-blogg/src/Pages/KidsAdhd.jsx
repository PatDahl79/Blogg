import React from 'react'
import { blogPosts } from '../Data/data';
import { useNavigate } from 'react-router-dom'


const kidsPosts = blogPosts.filter(post => post.category === 'kids');

function KidsAdhd ({ blogPosts }) {
  const navigate=useNavigate();

  return (
    <div className='mt-10 mb-20 px-10'>
      <h1 className='contact flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>ADHD-kids Posts</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
        {kidsPosts.map(post => (
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


export default KidsAdhd
