import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../Data/data'; // Import the blogPosts array
import Loader from './Loader';

function BlogCard() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Find the blog post with the matching id
        const selectedPost = blogPosts.find(post => post.id === parseInt(id));
        setPost(selectedPost);
    }, [id]);

    if (!post) { return <Loader/>;}

    return (
        <div className='flex-colum items-center m-5 px-6 md:px-20 lg:px-56 mb-20'>
            <div>
                <img src={post.image} alt={post.title} />
            </div>
            
            <div>
                <h2 className="text-blue-600 mt-5 mb-5 ">{post.title}</h2>
                <p>{post.description}</p>
                <h4 className='mt-5 text-xs'>{post.name}</h4>
                <h4 className='text-xs'>{post.date}</h4>
            </div>

        </div>
    );
}

export default BlogCard;
