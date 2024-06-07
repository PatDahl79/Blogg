import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/myContext';

const CategoryPage = ({ category }) => {
  const { posts } = useContext(MyContext);
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = posts.filter(post => post.category === category);
    setCategoryPosts(filteredPosts);
  }, [posts, category]);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold"
      style={{ color: mode === 'dark' ? 'white' : 'black' }}>Category: {category}</h2>
        <div className="flex flex-wrap justify-center -m-4 mb-5">
          {categoryPosts.map(post => (
            <div key={post.id} className="p-4 md:w-1/3">
              
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.date}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CategoryPage;
