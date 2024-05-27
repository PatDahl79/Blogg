// src/pages/Home.jsx
import React, { useContext } from 'react';
import { MyContext } from '../context/myContext';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const { posts } = useContext(MyContext);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
