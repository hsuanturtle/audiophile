import React from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import Intro from "../components/Intro";
import AddToCart from "../components/AddToCart";
import ProductsImage from "../components/ProductsImage";
import MayLike from "../components/MayLike";
import { topFunction } from "../utils/helper";
const SingleProductPage = ({
  name,
  id,
  image,
  old,
  description,
  price,
  features,
  includes,
  gallery,
  others,
}) => {
  const navigate = useNavigate();

  // GO BACK TO PREVIOUS PAGE
  const BackHandler = () => {
    navigate(-1);
    topFunction();
  };

  return (
    <div className="min-h-screen w-10/12 m-auto">
      {/* PAGEHERO */}
      <button onClick={() => BackHandler()} className="mt-6 text-dark-grey">
        Go Back
      </button>

      {/* PRODUCT'S DETAILS */}
      <div className="h-2/5 mt-6 m-auto">
        <img
          className="m-auto w-10/12 h-2/5 rounded-xl"
          src={image.mobile}
          alt={name}
        />
      </div>
      <div className="w-10/12 m-auto mt-8 flex flex-col gap-8">
        <h3 className="text-light-beige tracking-wide">
          {old ? "" : "NEW PRODUCT"}
        </h3>
        <h1 className="text-4xl font-bold md:text-6xl ">
          {name.toUpperCase()}
        </h1>
        <p className="text-dark-grey  md:text-xl">{description}</p>
        <p className="font-bold tracking-medium text-xl">${price}</p>
      </div>

      {/* AMOUNTBUTTONS AND ADD TO CART */}
      <AddToCart />

      {/* FEATURES */}
      <div className="w-10/12 m-auto mt-20">
        <h1 className=" font-bold text-2xl">FEATURES</h1>
        <p className="mt-6 text-dark-grey leading-relaxed">{features}</p>
      </div>
      {/* PRODUCT'S BONUS */}
      <div className="w-10/12 m-auto mt-20">
        <h1 className=" font-bold text-2xl">IN THE BOX</h1>
        {includes.map((include) => {
          return (
            <div className="flex gap-6 mt-4">
              <h3 className="text-light-beige">{include.quantity}x</h3>
              <h3>{include.item}</h3>
            </div>
          );
        })}
      </div>
      <ProductsImage name={name} gallery={gallery} />
      <MayLike others={others} />
      <Category />
      <Intro />
    </div>
  );
};

export default SingleProductPage;
