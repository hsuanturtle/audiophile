import React from "react";
import { Link } from "react-router-dom";
import { topFunction } from "../utils/helper";
const MayLike = ({ others }) => {
  return (
    <div className="m-auto w-10/12 text-center mt-32 min-h-screen">
      <h1 className="font-bold text-2xl">YOU MAY ALSO LIKE</h1>
      {others.map((item) => {
        return (
          <div className="flex flex-col gap-6 mt-14">
            <img
              className="rounded-xl"
              src={item.image.mobile}
              alt={item.name}
            />
            <h1 className="font-bold text-2xl">{item.name}</h1>
            <Link
              to={`/products/${item.slug}`}
              onClick={() => topFunction()}
              className="m-auto bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
            >
              SEE PRODUCT
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MayLike;
