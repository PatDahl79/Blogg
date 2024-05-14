import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center mt-5 flex-col'>
        <hr />
        <div className='flex justify-between p-1 bg-gray-600 text-center items-center'>
            <div className=' text-[14px] '>
                <p>© 2024 Bloggi. All rights reserved.</p>
            </div>

            <div className='text-[16px]'>
                <ul className="flex justify-between gap-6 ">
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
