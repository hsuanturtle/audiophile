import React from "react";
import headphones from "../assets/category/headphones.jpg";
import speakers from "../assets/category/speakers.jpg";
import earphones from "../assets/category/earphones.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="min-h-screen text-center mt-14 lg:flex lg:items-center lg:justify-center lg:h-50 lg:py-20">
      {/* HEADPHONE */}
      <div className="w-10/12 m-auto relative bg-grey h-40 rounded-xl mt-6 lg:w-1/4">
        <img
          className="rounded-xl h-4/6 m-auto"
          src={headphones}
          alt="headphones"
        />
        <div className="absolute top-60 inset-x-1/4">
          <h1 className="text-xl font-bold mb-6">HEADPHONES</h1>
          <Link
            to="/headphones"
            className="inline-flex items-center font-bold text-dark-grey hover:text-light-beige"
          >
            SHOP
            <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* EARPHONES */}
      <div className="w-10/12 m-auto relative bg-grey h-40 rounded-xl mt-6 lg:w-1/4">
        <img
          className="rounded-xl h-4/6 m-auto"
          src={earphones}
          alt="earphones"
        />
        <div className="absolute top-60 inset-x-1/4">
          <h1 className="text-xl font-bold mb-6">EARPHONES</h1>
          <Link
            to="/earphones"
            className="inline-flex items-center font-bold text-dark-grey hover:text-light-beige"
          >
            SHOP
            <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* SPEAKERS */}
      <div className="w-10/12 m-auto relative bg-grey h-40 rounded-xl mt-6 lg:w-1/4 lg:h-40">
        <img
          className="rounded-xl h-4/6 m-auto"
          src={speakers}
          alt="speakers"
        />
        <div className="absolute top-60 inset-x-1/4">
          <h1 className="text-xl font-bold mb-6">SPEAKERS</h1>
          <Link
            to="/speaker"
            className="inline-flex items-center font-bold text-dark-grey hover:text-light-beige"
          >
            SHOP
            <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
