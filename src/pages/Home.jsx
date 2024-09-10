import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import FeaturedProducts from "../components/FeaturedProducts";
import FaqSection from "../components/FAQs";
import SpecialOffers from "../components/SpeacialOffer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <SpecialOffers />
      <FaqSection />
      <Testimonial />
    </div>
  );
};

export default Home;
