import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Blogs from './Components/Blogs'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import GeneralAdhd from './Pages/GeneralAdhd'
import MenAdhd from './Pages/MenAdhd'
import KidsAdhd from './Pages/KidsAdhd'
import WomenPostsPage from './Pages/WomenPostsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/general" element={<GeneralAdhd/>}></Route>
      <Route path="/men" element={<MenAdhd/>}></Route>
      <Route path="/women" element={<WomenPostsPage/>}></Route>
      <Route path="/kids" element={<KidsAdhd/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
