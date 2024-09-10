import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import FaqSection from "../components/FAQs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <FaqSection />
    </div>
  );
};

export default Home;
