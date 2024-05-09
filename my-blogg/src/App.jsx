import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="blogs" element={<Blogs/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
    </Routes>
      
      
    </>
  )
}

export default App
