import React from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'

function Home () {
  return (
    <div>
        {/*Navbar*/}
        <Navbar/>
        {/*Search*/}
        <Search/>
        {/*IntroPost*/}
        <IntroPost/>
        {/*Blogs*/}
        <Blogs/>
        {/*Footer*/}
        <Footer/>
    </div>
  )
}

export default Home;
