import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { blogPosts } from '../Data/data.jsx';

function Blogs () {
  return (
    <div>
        <Navbar/>
        <h1>Blogs</h1>
            <div>
                {/* Map over the blogPosts array and render each blog post */}
                {blogPosts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        {/* Add more content as needed */}
                    </div>
                ))}
            </div>
        <Footer/>
    </div>
  )
}

export default Blogs
