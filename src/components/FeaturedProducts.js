import React from "react";
import { Link } from "react-router-dom";
import imageSpeakerMobile from "../assets/home/mobile/image-speaker-zx9.png";
import imageSpeakerMobile2 from "../assets/home/mobile/image-speaker-zx7.jpg";
import imageEarphonesMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import imageSpeakerDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import imageSpeakerDesktop2 from "../assets/home/desktop/image-speaker-zx7.jpg";
import circles from "../assets/home/desktop/pattern-circles.svg";
import { topFunction } from "../utils/helper";
const FeaturedProducts = () => {
  return (
    <div className="min-h-screen mt-10 text-center lg:mt-2">
      {/* SPEAKER ZX9 */}
      <div className="bg-light-beige min-h-80 w-10/12 m-auto py-10 rounded-xl relative lg:inline-flex">
        <img
          className="m-auto py-10 h-72 lg:hidden"
          src={imageSpeakerMobile}
          alt="zx9 Speaker"
        />
        <img
          className="hidden lg:m-auto lg:py-10 lg:h-50 lg:block lg:z-10"
          src={imageSpeakerDesktop}
          alt="zx9 speaker"
        />
        <img className="h-50 absolute " src={circles} alt="circles" />
        <div className="w-7/12 m-auto">
          <h1 className="text-white text-4xl font-bold">ZX9 SPEAKER</h1>
          <p className="mb-8 mt-8 text-lg text-white leading-relaxed">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            to="/products/zx9-speaker"
            onClick={() => topFunction()}
            className="mt-4 bg-black hover:bg-light-dark ease-linear duration-300 px-8 py-4 text-white pointer-cursor"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      {/* SPEAKER ZX7 */}
      <div className="w-10/12 m-auto mt-6 relative">
        <img
          className="rounded-xl lg:hidden"
          src={imageSpeakerMobile2}
          alt="speaker zx7"
        />
        <img
          className="hidden lg:block lg:rounded-xl lg:h-50"
          src={imageSpeakerDesktop2}
          alt="speaker zx7"
        />
        <div className="absolute top-1/3 left-10 lg:left-54">
          <h1 className="text-4xl font-bold mb-10">ZX7 SPEAKER</h1>
          <Link
            to="/products/zx7-speaker"
            onClick={() => topFunction()}
            className="mt-4 bg-transparent text-black border-2 hover:bg-black hover:text-white ease-linear duration-300 px-8 py-4 text-white"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      {/* EARPHONES YX1 */}
      <div className="lg:inline-flex lg:w-10/12">
        <div className="w-10/12 m-auto mt-6 lg:w-2/4">
          <img
            className="rounded-xl lg:h-40"
            src={imageEarphonesMobile}
            alt="yx1 earphones"
          />
        </div>
        <div className="w-10/12 h-64 m-auto mt-6 rounded-xl bg-light-grey py-16 lg:h-40 lg:w-3/4 2xl:py-24">
          <h1 className="text-3xl font-bold mb-10">YX1 EARPHONES</h1>
          <Link
            to="/products/yx1-earphones"
            onClick={() => topFunction()}
            className="mt-4 bg-transparent text-black border-2 hover:bg-black hover:text-white ease-linear duration-300 px-8 py-4 text-white"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
