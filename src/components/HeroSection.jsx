import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png'; // Replace with your actual image

const HeroSection = () => {
  return (
    <section className="text-gray-700 body-font bg-blue-600">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Content Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
            Elevate Your Shopping Experience
            <br className="hidden lg:inline-block" />
            with Premium Products
          </h1>
          <p className="mb-8 leading-relaxed text-white text-lg ">
            Discover the finest selection of quality goods at unbeatable prices. Join us today and enjoy an unmatched shopping experience.
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <button className="transition-transform duration-300 transform hover:scale-110 ml-4 inline-flex text-blue-600 bg-white border-2 border-blue-600 py-2 px-8 focus:outline-none hover: rounded-full text-lg shadow-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src={heroImage} // Ensure this path is correct
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
