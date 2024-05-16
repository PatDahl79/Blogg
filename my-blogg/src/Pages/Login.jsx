import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './context/userContext'; 

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userData.email === 'example@example.com' && userData.password === 'password') {
      setCurrentUser({ email: userData.email }); 
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div id='login' className='contact flex items-center justify-center md:w-80 md:flex-row md:justify-between md:mx-auto md:mt-24 lg:w-9/12'>
      <div>
        <h1 className='contact mb-5 flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text'>Login</h1>

        <form onSubmit={submitHandler} className="contact-right flex flex-col gap-4 md:w-96">
          {error && <p className='form__error-message'>{error}</p>}
          <label htmlFor="email" className='text-gray-200'>Your Email</label>
          <input type="email" id="email" placeholder='Email' name="email" value={userData.email} onChange={changeInputHandler} className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />
          <label htmlFor="password" className='text-gray-200'>Your Password</label>
          <input type="password" id="password" placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler} className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500' />

          <button type='submit' className="contact-submit bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform">Login</button>
        </form>

        <small>You don't have an account yet? <Link to="/register">Register</Link></small>

      </div>
    </div>
  );
};

export default Login;
