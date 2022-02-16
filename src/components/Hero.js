import React from "react";
import imageMobile from "../assets/home/mobile/image-header.jpg";
import imageDesktop from "../assets/home/desktop/image-hero.jpg";
import imageTablet from "../assets/home/tablet/image-header.jpg";
const Hero = () => {
  return (
    <div className="w-screen max-w-full h-80 relative lg:min-h-screen">
      <img
        className="block w-screen h-full md:hidden"
        src={imageMobile}
        alt="headphone"
      />
      <img
        className="hidden lg:block w-screen"
        src={imageDesktop}
        alt="headphone"
      />
      <img
        className="hidden md:block w-screen lg:hidden"
        src={imageTablet}
        alt="headphone"
      />
      <div className="text-center absolute top-2/4 left-2/4 translate-x-500 translate-y-500 text-grey w-11/12 lg:left-1/4 lg:w-1/3 xl:h-auto lg:h-4/5">
        <h3 className="tracking-wide mb-6 ">NEW PRODUCT</h3>
        <h1 className="m-auto text-5xl xl:text-6xl">XX99 MARK II</h1>
        <h1 className="m-auto text-5xl xl:text-6xl">HEADPHONES</h1>
        <p className="mt-6 tracking-wildest leading-loose lg:tracking-medium">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <button className="mt-14 bg-light-beige px-8 py-4 font-bold hover:bg-vanilla ease-linear duration-300">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Hero;
