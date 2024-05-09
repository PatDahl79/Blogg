import React from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Footer from '../Components/Footer'
import Blogslists from '../Components/Blogslists'

function Home () {
  return (
    <div>
        <Navbar/>
        <Search/>
        <IntroPost/>
        <Blogslists/>
        <Footer/>
    </div>
  )
}

export default Home;
