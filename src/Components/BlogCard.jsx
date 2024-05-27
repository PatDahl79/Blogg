import React, { useContext } from 'react';
import { MyContext } from '../context/myContext';
import { UserContext } from '../context/UserProvider';
import CommentSection from './CommentSection';

const BlogCard = ({ post }) => {
  const { deletePost } = useContext(MyContext);
  const { user } = useContext(UserContext);

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="p-4 mb-4 bg-white shadow-md">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-700">by {post.author}</p>
      <p>{post.content}</p>
      {user && user.email === post.author && (
        <button onClick={handleDelete} className="px-4 py-2 mt-2 font-bold text-white bg-red-500 rounded">
          Delete
        </button>
      )}
      <CommentSection postId={post.id} />
    </div>
  );
};

export default BlogCard;
