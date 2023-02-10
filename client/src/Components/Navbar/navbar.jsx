import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
    <header className="w-full flex justify-between items-center bg-gray-100 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] header" >
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link to="/create-post" className="font-inter font-medium bg-[#0000ff] text-white px-4 py-2 rounded-md no-underline">Create</Link>
    </header>
    </div>
  );
}

export default Navbar;
