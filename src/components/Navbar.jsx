import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/websiteLogo.png'; // Ensure the correct path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="ECOMWARE Logo" className="h-10 w-auto transition-transform duration-300 transform hover:scale-110" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-gray-800">
            <ul className="flex flex-row space-x-8 text-lg font-medium">
              <li>
                <Link to="/" className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/products" className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200">Cart</Link>
              </li>
              <li>
                <Link to="/order-history" className="block px-4 py-2 hover:text-blue-600 transition-colors duration-200">Order History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="px-4 py-4 space-y-4 text-gray-800 text-lg font-medium">
            <li>
              <Link to="/" className="block hover:text-blue-600 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/products" className="block hover:text-blue-600 transition-colors duration-200">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="block hover:text-blue-600 transition-colors duration-200">Cart</Link>
            </li>
            <li>
              <Link to="/order-history" className="block hover:text-blue-600 transition-colors duration-200">Order History</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
