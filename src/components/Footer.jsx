import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MyShop. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
          <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="https://twitter.com/myshop" className="hover:text-gray-400">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
