import React from "react";
import AmountButtons from "./AmountButtons";
const AddToCart = () => {
  return (
    <div className="w-10/12 m-auto mt-6 flex justify-around">
      <AmountButtons />
      <button className="m-auto w-6/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300">
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
