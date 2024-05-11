import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center mt-5 flex-col px-2 md:px-8"'>
        <hr />
        <div className='flex justify-between bg-gray-600 text-center'>
            <div className='text-[14px] p-10'>
                <p>© 2024 Bloggi. All rights reserved.</p>
            </div>

            <div className='text-[14px] p-10'>
                <ul className="flex justify-between gap-6  text-white items-center">
                <li>Term of Services</li>
                <li>Privacy Policy</li>
                <li><a href="/blogs" >Blogs</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
