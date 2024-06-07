import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/myContext';
import { storage } from '../Common/firebase';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { getPostById, updatePost } = useContext(MyContext);
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('General'); // Default category

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostById(postId);
      setPost(fetchedPost);
      setTitle(fetchedPost.title);
      setContent(fetchedPost.content);
      setCategory(fetchedPost.category);
    };

    fetchPost();
  }, [postId, getPostById]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload new image to Firebase Storage if a new image is selected
    let imageURL = post.image;
    if (image) {
      const imageRef = storage.ref().child(`images/${image.name}`);
      await imageRef.put(image);
      imageURL = await imageRef.getDownloadURL();
    }

    // Create updated post object
    const updatedPost = {
      ...post,
      title,
      content,
      image: imageURL,
      category,
      date: new Date().toISOString(),
    };

    // Update post in the database
    await updatePost(postId, updatedPost);

    // Redirect to the post details page or another appropriate page
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="max-w-md mt-10 mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Edit Blog</h2>
      {post ? (
        <form onSubmit={handleSubmit}>
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
            Update Blog
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPost;
