import React, { useState, useContext } from 'react';
import { MyContext } from '../context/myContext';
import { UserContext } from '../context/UserProvider';
import { storage } from '../Common/firebase';

const CreatePost = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('General'); // Default category
  const { addPost } = useContext(MyContext);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    let imageURL = '';
    if (image) {
      const imageRef = storage.ref().child(`images/${image.name}`);
      await imageRef.put(image);
      imageURL = await imageRef.getDownloadURL();
    }

    // Create new post object
    const newPost = {
      author: user.email,
      title,
      content,
      image: imageURL,
      category,
      date: new Date().toISOString(),
    };

    // Add post to database
    await addPost(newPost);

    // Clear form fields
    setAuthor('');
    setTitle('');
    setContent('');
    setImage(null);
    setCategory('General');
  };

  return (
    <div className="max-w-md mt-10 mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="block w-full px-3 py-2 mb-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-3 py-2 mb-2 border rounded-md"
          required
        />
        <label htmlFor="category" className="block mb-2">
          Category:
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full px-3 py-2 border rounded-md"
          >
            <option value="General">General</option>
            <option value="Men ADHD">Men ADHD</option>
            <option value="Women ADHD">Women ADHD</option>
            <option value="Kids ADHD">Kids ADHD</option>
          </select>
        </label>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full px-3 py-2 mb-2 border rounded-md"
          required
        />
        
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="block w-full px-3 py-2 mb-2 border rounded-md"
        />
        
        <button type="submit" className="justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
