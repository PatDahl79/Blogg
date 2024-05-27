// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <Link to="/">Home</Link>
          <Link to="/allblogs" className="ml-4">All Blogs</Link>
        </div>
        <div className="text-white">
          {user ? <span>{user.email}</span> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
