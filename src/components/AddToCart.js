import React, { useCallback } from "react";
import AmountButtons from "./AmountButtons";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART } from "../utils/actions";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = useCallback((product) => {
    dispatch({ type: ADD_TO_CART, payload: { product } }, [dispatch]);
  });

  return (
    <div className="w-10/12 m-auto mt-6 flex justify-center gap-4 flex-col md:flex-row md:justify-around lg:flex-col">
      <AmountButtons />
      <button
        onClick={() => addToCart(product)}
        className="m-auto w:6/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300 md:w-7/12"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
