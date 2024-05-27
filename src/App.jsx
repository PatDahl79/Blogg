import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GeneralAdhd from './Pages/GeneralAdhd';
import MenAdhd from './Pages/MenAdhd';
import KidsAdhd from './Pages/KidsAdhd';
import WomenPostsPage from './Pages/WomenPostsPage';
import BlogCard from './Components/BlogCard';
import DeletePost from './Pages/DeletePost';
import EditPost from './Pages/EditPost';
import CreatePost from './Pages/CreatePost';
import UserProfile from './Pages/UserProfile';
import CreateProfile from './Pages/CreateProfile';
import AuthorPostsPage from './Pages/AuthorPostsPage';
import Dashboard from './Pages/Dashboard';
import MyState from './context/myState';
import AllBlogs from './Pages/AllBlogs';

function App() {
  return (
    <MyState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general" element={<GeneralAdhd />} />
        <Route path="/men" element={<MenAdhd />} />
        <Route path="/women" element={<WomenPostsPage />} />
        <Route path="/kids" element={<KidsAdhd />} />
        <Route path="/author" element={<AuthorPostsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/blogs/blogcard/:id" element={<BlogCard />} />
        <Route path="/editpost" element={<EditPost />} />
        <Route path="/deletepost" element={<DeletePost />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/createprofile" element={<CreateProfile />} />
      </Routes>
      <Footer />
    </MyState>
  );
}

export default App;
