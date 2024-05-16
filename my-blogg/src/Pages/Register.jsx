import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userData.password !== userData.password2) {
      setError("Passwords do not match");
    } else {
      // Handle registration logic here
      setError('');
      navigate('/dashboard'); // Redirect to dashboard after registration
    }
  };

  return (
    <div id='register' className='contact flex items-center justify-center md:w-80 md:flex-row md:justify-between md:mx-auto md:mt-24 lg:w-9/12'>
      <div>
        <h1 className='contact mb-5 flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text'>Sign Up</h1>

        <form onSubmit={submitHandler} className="contact-right flex flex-col gap-4 md:w-96">
          {error && <p className='form__error-message'>{error}</p>}
          <label htmlFor="name" className='text-gray-200'>Your Name</label>
          <input type="text" id="name" placeholder='Full Name' name="name" value={userData.name} onChange={changeInputHandler} className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />
          <label htmlFor="email" className='text-gray-200'>Your Email</label>
          <input type="email" id="email" placeholder='Email' name="email" value={userData.email} onChange={changeInputHandler} className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />
          <label htmlFor="password" className='text-gray-200'>Your Password</label>
          <input type="password" id="password" placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler} className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />
          <label htmlFor="password2" className='text-gray-200'>Confirm Password</label>
          <input type="password" id="password2" placeholder='Confirm Password' name="password2" value={userData.password2} onChange={changeInputHandler} className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />

          <button type='submit' className="contact-submit bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform">Register</button>
        </form>

        <small>Already have an account? <Link to="/login">Sign in</Link></small>

      </div>
    </div>
  );
};

export default Register;
