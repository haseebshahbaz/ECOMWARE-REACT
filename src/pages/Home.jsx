import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Testimonial />
    </div>
  );
};

export default Home;
