import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import GeneralAdhd from './Pages/GeneralAdhd'
import MenAdhd from './Pages/MenAdhd'
import KidsAdhd from './Pages/KidsAdhd'
import WomenPostsPage from './Pages/WomenPostsPage';
import BlogCard from './Components/BlogCard';
import Search from './Components/Search';
import DeletePost from './Pages/DeletePost'
import EditPost from './Pages/EditPost';
import CreatePost from './Pages/CreatePost';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import UserProfile from './Pages/UserProfile';
import CreateProfile from './Pages/CreateProfile';
import AuthorPostsPage from './Pages/AuthorPostsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/general" element={<GeneralAdhd/>}></Route>
      <Route path="/men" element={<MenAdhd/>}></Route>
      <Route path="/women" element={<WomenPostsPage/>}></Route>
      <Route path="/kids" element={<KidsAdhd/>}></Route>
      <Route path="/author" element={<AuthorPostsPage/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/blogs/blogcard/:id" element={<BlogCard/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/editpost" element={<EditPost/>}></Route>
      <Route path="/deletepost" element={<DeletePost/>}></Route>
      <Route path="/createpost" element={<CreatePost/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/userprofile" element={<UserProfile/>}></Route>
      <Route path="/createprofile" element={<CreateProfile/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
