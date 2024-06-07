// src/context/myState.jsx
import React, { useState, useEffect } from 'react';
import MyContext from './myContext';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../fireba/firebaseConfig';

const MyState = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(fireDB, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    };

    const fetchComments = async () => {
      const commentsCollection = collection(fireDB, 'comments');
      const commentsSnapshot = await getDocs(commentsCollection);
      const commentsList = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsList);
    };

    fetchPosts();
    fetchComments();
  }, []);

  const addPost = async (post) => {
    const docRef = await addDoc(collection(fireDB, 'posts'), post);
    setPosts([...posts, { id: docRef.id, ...post }]);
  };

  const updatePost = async (id, updatedPost) => {
    const postDoc = doc(fireDB, 'posts', id);
    await updateDoc(postDoc, updatedPost);
    setPosts(posts.map(post => (post.id === id ? { id, ...updatedPost } : post)));
  };

  const deletePost = async (id) => {
    const postDoc = doc(fireDB, 'posts', id);
    await deleteDoc(postDoc);
    setPosts(posts.filter(post => post.id !== id));
  };

  const addComment = async (comment) => {
    const docRef = await addDoc(collection(fireDB, 'comments'), comment);
    setComments([...comments, { id: docRef.id, ...comment }]);
  };

  return (
    <MyContext.Provider value={{ posts, addPost, updatePost, deletePost, comments, addComment }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
