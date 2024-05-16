import React, { useState } from 'react';
import { blogPosts } from '../Data/data';
import { useNavigate } from 'react-router-dom';

const uniqueAuthors = [...new Set(blogPosts.map(post => post.name))];

function AuthorPostsPage() {
    const navigate = useNavigate(); 
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    const handleAuthorClick = (authorName) => {
        setSelectedAuthor(prevAuthor => (prevAuthor === authorName ? null : authorName));
    };

    return (
        <div className='mt-10 mb-20 px-10'>
            <h1 className='contact flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>Author</h1>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
                {uniqueAuthors.map(authorName => {
                    const authorPosts = blogPosts.filter(post => post.name === authorName);
                    const authorImage = authorPosts[0].image; // Assuming each author has the same image in all posts

                    return (
                        <div key={authorName} className="m-4 cursor-pointer" onClick={() => handleAuthorClick(authorName)} style={{ cursor: 'pointer' }} >
                            <img src={authorImage} alt={authorName} className="w-full rounded-2xl object-cover h-[200px]" />
                            <h3 className="text-blue-500 justify-center mb-3">{authorName}</h3>
                            {selectedAuthor === authorName && authorPosts.map(post => (
                                <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigate(`/blogs/blogcard/${post.id}`)}>
                                    <p className='line-clamp-3 text-[14px] text-pink-400 mt-3'>Post ID: {post.id}</p>
                                    <h3 className="text-blue-500 mb-3 line-clamp-3 text-[18px]">{post.title}</h3>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default AuthorPostsPage;