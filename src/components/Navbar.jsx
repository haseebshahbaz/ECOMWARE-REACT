import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/websiteLogo.png'; // Make sure to replace with the correct path

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          
          <Link to="/"><img src={logo} alt="ECOMWARE Logo" className="h-10" /> </Link>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-4 text-blue-600">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
          <li><Link to="/cart" className="hover:text-blue-400">Cart</Link></li>
          <li><Link to="/order-history" className="hover:text-blue-400">Order History</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
