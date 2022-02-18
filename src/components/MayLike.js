import React from "react";
import { Link } from "react-router-dom";
import { topFunction } from "../utils/helper";
const MayLike = ({ others }) => {
  return (
    <div className="m-auto w-10/12 text-center mt-32 min-h-screen xl:min-h-80">
      <h1 className="font-bold text-2xl md:text-4xl">YOU MAY ALSO LIKE</h1>
      <div className="xl:flex xl:gap-10 ">
        {others.map((item, id) => {
          return (
            <div key={id} className="flex flex-col gap-6 mt-14">
              <img
                className="rounded-xl xl:hidden"
                src={item.image.mobile}
                alt={item.name}
              />
              <img
                className="hidden xl:block"
                src={item.image.desktop}
                alt={item.name}
              />
              <h1 className="font-bold text-2xl md:text-4xl">{item.name}</h1>
              <Link
                to={`/products/${item.slug}`}
                onClick={() => topFunction()}
                className="m-auto bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300 md:text-xl"
              >
                SEE PRODUCT
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MayLike;
