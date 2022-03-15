import React, { useEffect } from "react";
import headphones from "../assets/category/headphones.jpg";
import speakers from "../assets/category/speakers.jpg";
import earphones from "../assets/category/earphones.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { topFunction } from "../utils/helper";
import Aos from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="min-h-screen m-auto text-center mt-14 lg:flex lg:items-center lg:justify-center xl:min-h-50 lg:py-20 "
    >
      {/* HEADPHONE */}
      <div className="w-10/12 m-auto relative bg-grey h-40 rounded-xl mt-6 lg:w-1/4 xl:h-50 ">
        <img
          className="rounded-xl h-4/6 m-auto"
          src={headphones}
          alt="headphones"
        />
        <div className="absolute lg:top-60 inset-x-1/4 2xl:top-80">
          <h1 className="text-xl font-bold mb-6 md:text-2xl">HEADPHONES</h1>
          <Link
            to="/headphones"
            onClick={() => topFunction()}
            className="inline-flex items-center font-bold text-dark-grey hover:text-light-beige md:text-xl"
          >
            SHOP
            <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* EARPHONES */}
      <div className="w-10/12 m-auto relative bg-grey h-40 rounded-xl mt-6 lg:w-1/4 xl:h-50">
        <img
          className="rounded-xl h-4/6 m-auto"
          src={earphones}
          alt="earphones"
        />
        <div className="absolute lg:top-60 inset-x-1/4 2xl:top-80">
          <h1 className="text-xl font-bold mb-6 md:text-2xl">EARPHONES</h1>
          <Link
            to="/earphones"
            onClick={() => topFunction()}
            className="inline-flex items-center font-bold text-dark-grey hover:text-light-beige md:text-xl"
          >
            SHOP
            <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* SPEAKERS */}
      <div className="w-10/12 m-auto relative bg-grey h-40 rounded-xl mt-6 lg:w-1/4 xl:h-50 ">
        <img
          className="rounded-xl h-4/6 m-auto"
          src={speakers}
          alt="speakers"
        />
        <div className="absolute lg:top-60 inset-x-1/4 2xl:top-80">
          <h1 className="text-xl font-bold mb-6 md:text-2xl">SPEAKERS</h1>
          <Link
            to="/speaker"
            onClick={() => topFunction()}
            className="inline-flex items-center font-bold text-dark-grey hover:text-light-beige md:text-xl"
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
