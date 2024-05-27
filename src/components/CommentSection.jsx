import React, { useState, useContext } from 'react';
import { MyContext } from '../context/myContext';
import { UserContext } from '../context/UserProvider';

const CommentSection = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const { addComment, comments } = useContext(MyContext);
  const { user } = useContext(UserContext);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const newComment = {
      postId,
      text: commentText,
      author: user.email,
      date: new Date(),
    };
    await addComment(newComment);
    setCommentText('');
  };

  const postComments = comments.filter(comment => comment.postId === postId);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Comments</h3>
      {postComments.map((comment) => (
        <div key={comment.id} className="p-2 mt-2 border rounded">
          <p className="text-gray-700">{comment.text}</p>
          <p className="text-sm text-gray-500">by {comment.author}</p>
        </div>
      ))}
      {user && (
        <form onSubmit={handleAddComment} className="mt-2">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="block w-full px-3 py-2 mb-2 border rounded-md"
          />
          <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded">
            Add Comment
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
