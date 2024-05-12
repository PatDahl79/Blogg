import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../Data/data'; // Import the blogPosts array

function BlogCard() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Find the blog post with the matching id
        const selectedPost = blogPosts.find(post => post.id === parseInt(id));
        setPost(selectedPost);
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex-colum items-center px-6 md:px-20 lg:px-56 mt-10 mb-20'>
            <img src={post.image} alt={post.title} className="w-500 rounded-2xl object-cover h-[200px]" />

            <div>
                <h2 className="text-blue-600 mt-5 mb-5 ">{post.title}</h2>
                <p>{post.description}</p>
                <h3 className='font-bold text-[14px] mt-5'>{post.name}</h3>
                <h3 className='font-bold text-[12px] mb-5'>{post.date}</h3>
            </div>

        </div>
    );
}

export default BlogCard;
