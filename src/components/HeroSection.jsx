import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/websiteLogo.png';
import hero from '../assets/hero2.jpg'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})`  }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">ECOMWARE</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-8">
          Discover the best products at unbeatable prices!
        </p>
        
        <Link to="/products" className="px-8 py-4 bg-yellow-500 text-black rounded-md text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
