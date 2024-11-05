import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 px-60 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <h2>FIXED METER</h2>
      </div>

      <nav className="h-8 flex gap-10 mx-10 font-semibold text-lg">
        <div className="hover:border-b-2 border-red-500 transition duration-200">
          <Link to="/">Home</Link>
        </div>
        <div className="hover:border-b-2 border-red-500 transition duration-200">
          <Link to="/about">About</Link>
        </div>
        <div className="hover:border-b-2 border-red-500 transition duration-200">
          <Link to="/services">Service</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
