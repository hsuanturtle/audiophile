import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { topFunction } from "../utils/helper";
const Footer = () => {
  return (
    <div className="min-h-80 bg-light-dark text-white text-center mt-4 lg:min-h-50">
      <div className="bg-light-beige h-1 w-2/5 m-auto"></div>
      <h1 className="text-4xl font-bold mt-10">audiophile</h1>
      <div className="mt-10 tracking-medium">
        <Link
          className="flex flex-col hover:text-light-beige py-4 lg:inline-flex lg:px-8"
          to="/"
          onClick={() => topFunction()}
        >
          HOME
        </Link>
        <Link
          className="flex flex-col hover:text-light-beige py-4 lg:inline-flex lg:px-8"
          to="/headphones"
          onClick={() => topFunction()}
        >
          HEADPHONES
        </Link>
        <Link
          className="flex flex-col hover:text-light-beige py-4 lg:inline-flex lg:px-8"
          to="/speaker"
          onClick={() => topFunction()}
        >
          SPEAKERS
        </Link>
        <Link
          className="flex flex-col hover:text-light-beige py-4 lg:inline-flex lg:px-8"
          to="/earphones"
          onClick={() => topFunction()}
        >
          EARPHONES
        </Link>
      </div>
      <div className="w-8/12 m-auto">
        <p className="text-dark-grey mt-20">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
      </div>
      <div>
        <p className="mt-20 text-dark-grey font-bold">
          Copyright 2022. All Rights Reserved.
        </p>
      </div>
      <div className="m-auto mt-6 text-white py-4">
        <Link className="inline-flex px-4" to="/">
          <FaFacebook />
        </Link>
        <Link className="inline-flex px-4" to="/">
          <FaInstagram />
        </Link>
        <Link className="inline-flex px-4" to="/">
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
