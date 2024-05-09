import React from 'react';
import { FaEnvelope, FaHome } from 'react-icons/fa';

function Contact() {
  const onSubmit = (event) => {
    event.preventDefault(); // Förhindra standardformulärssubmissionen
    event.target.reset();
  };

  return (
    <div id='contact' className='contact flex items-center justify-center gap-6 md:w-80 md:flex-row md:justify-between md:mx-auto md:mt-24 lg:w-9/12'>
      <div className="contact-title">
        <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>Get in touch</h1>
      </div>
      <div className="contact-section flex flex-col md:flex-row md:gap-20">
        <div className="contact-left">
          <h1 className='text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>Ask anything</h1>
          <p className='text-lg'>Feel free to send the message about anything and anytime.</p>
          <div className="contact-details flex flex-col md:flex-row md:gap-4">
            <div className="contact-detail flex items-center gap-2">
              <FaEnvelope className='text-2xl' />
              <p>info@bloggi.com</p>
            </div>
            <div className="contact-detail flex items-center gap-2">
              <FaHome className='text-2xl' />
              <p>Stockholm, SWEDEN</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-4 md:w-96">
          <label htmlFor="name" className='text-gray-400'>Your Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />
          <label htmlFor="email" className='text-gray-400'>Your Email</label>
          <input type="email" id="email" placeholder='Enter your email' name='email' className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />
          <label htmlFor="message" className='text-gray-400'>Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder='Enter your message' className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500'></textarea>
          <button type='submit' className="contact-submit bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
