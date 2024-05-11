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
            <h2>Men Posts</h2>
            {menPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            <h2>Women Posts</h2>
            {womenPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            <h2>Kids Posts</h2>
            {kidsPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            <h2>General Posts</h2>
            {generalPosts.map(post => (
                <div key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))}

            <h2>Author</h2>
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
