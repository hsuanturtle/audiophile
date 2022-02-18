import React from "react";
import introImg from "../assets/shared/mobile/image-best-gear.jpg";
import introImgDesktop from "../assets/shared/desktop/image-best-gear.jpg";
const Intro = () => {
  return (
    <div className="w-10/12 m-auto mt-14 min-h-screen text-center lg:flex lg:min-h-80 lg:items-center lg:justify-center lg:mt-10 lg:gap-40">
      <div>
        <img
          className="rounded-lg lg:hidden"
          src={introImg}
          alt="A man with headphone"
        />
        <img
          className="rounded-lg hidden lg:block lg:h- lg:w-50"
          src={introImgDesktop}
          alt="A man with a headphone"
        />
      </div>
      <div className="mt-14 mb-14 lg:w-5/12">
        <h1 className="text-4xl font-bold md:text-6xl">
          BRINGING YOU THE <span className="text-light-beige">BEST</span> AUDIO
          GEAR
        </h1>

        <p className="mt-14 text-dark-grey md:text-xl">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones,speakers, and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy you the protable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default Intro;
