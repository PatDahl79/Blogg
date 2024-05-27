// src/pages/CreatePost.jsx
import React, { useState, useContext } from 'react';
import { MyContext } from '../context/myContext';
import { UserContext } from '../context/UserProvider';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(MyContext);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      author: user.email,
      date: new Date(),
      category: 'General',
    };
    await addPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-3 py-2 mb-2 border rounded-md"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full px-3 py-2 mb-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
