import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'; // Ensure the correct path to Firebase configuration
import logo from '../assets/websiteLogo.png'; // Ensure the correct path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <header className=" shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="ECOMWARE Logo" className="h-10 w-auto hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
          <Link to="/cart" className="hover:text-blue-500 transition-colors">Cart</Link>
          <Link to="/order-history" className="hover:text-blue-500 transition-colors">Order History</Link>

          {!user ? (
            <>
              <Link to="/signin" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Login</Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Sign Up</Link>
            </>
          ) : (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 border-t">
          <ul className="space-y-4 px-6 py-4">
            <li><Link to="/" className="block hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link to="/products" className="block hover:text-blue-500 transition-colors">Products</Link></li>
            <li><Link to="/cart" className="block hover:text-blue-500 transition-colors">Cart</Link></li>
            <li><Link to="/order-history" className="block hover:text-blue-500 transition-colors">Order History</Link></li>
            
            {!user ? (
              <>
                <li><Link to="/signin" className="block hover:text-blue-500 transition-colors">Login</Link></li>
                <li><Link to="/signup" className="block px-4 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600 transition-colors">Sign Up</Link></li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 bg-red-500 text-white rounded-md text-center hover:bg-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
