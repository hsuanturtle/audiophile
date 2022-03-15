import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { topFunction } from "../utils/helper";
import Aos from "aos";
import "aos/dist/aos.css";
const ProductList = ({ id, name, image, old, description, slug }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="w-10/12 m-auto mt-14 text-center ">
      <div className="m-auto lg:flex lg:items-center lg:gap-14 lg:min-h-80 lg:h-2/5">
        <img
          className="rounded-xl h-4/6 m-auto lg:hidden"
          src={image.mobile}
          alt={name}
        />
        <img
          className="hidden lg:block lg:h-50 lg:w-2/5 lg:rounded-xl "
          src={image.desktop}
          alt={name}
        />
        <div className="mt-8 flex flex-col gap-10 justify-center items-center lg:w-4/6">
          <h3 className="text-light-beige tracking-wide">
            {old ? "" : "NEW PRODUCT"}
          </h3>
          <h1 className="text-4xl font-bold md:text-6xl">
            {name.toUpperCase()}
          </h1>
          <p className="text-dark-grey md:text-xl">{description}</p>
          <Link
            to={`/products/${slug}`}
            onClick={() => topFunction()}
            className="m-auto w-6/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
