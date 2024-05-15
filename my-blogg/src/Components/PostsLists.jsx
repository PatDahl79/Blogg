import React from 'react';
import { blogPosts } from '../Data/data';

const menPosts = blogPosts.filter(post => post.category === 'men');
const womenPosts = blogPosts.filter(post => post.category === 'women');
const kidsPosts = blogPosts.filter(post => post.category === 'kids');
const generalPosts = blogPosts.filter(post => post.category === 'general');
const namePosts = blogPosts.filter(post => post.category === 'author');

function PostsLists () {
    return (
        <div>
            {menPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            {womenPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            {kidsPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            {generalPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            {namePosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

        </div>
    );

}

export default PostsLists
