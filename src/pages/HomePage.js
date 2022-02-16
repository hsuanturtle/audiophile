import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FeaturedProducts from "../components/FeaturedProducts";
import Intro from "../components/Intro";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Category />
      <FeaturedProducts />
      <Intro />
    </main>
  );
};

export default HomePage;
