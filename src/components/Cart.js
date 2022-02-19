import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  REMOVE_CART_ITEMS,
  ADD_QUANTITY_PRODUCT_IN_CART,
  CLEAR_CART,
} from "../utils/actions";
const Cart = () => {
  const productsInCart = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalProduct = useSelector((state) => state.cart.totalProduct);

  const dispatch = useDispatch();
  const clearCart = useCallback(() => {
    dispatch({ type: CLEAR_CART });
  }, [dispatch]);
  const addQuantityProductInCart = useCallback(
    (product) => {
      dispatch({ type: ADD_QUANTITY_PRODUCT_IN_CART, payload: { product } });
    },
    [dispatch]
  );
  const removeItems = useCallback(
    (product) => {
      dispatch({ type: REMOVE_CART_ITEMS, payload: { product } });
    },
    [dispatch]
  );

  return (
    <div className="relative min-h-80 w-sreen bg-dark">
      <div className="absolute h-60 w-96 top-20 right-14 text-black bg-white z-10 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">
            CART <span className="ml-4">({totalProduct})</span>
          </h1>
          <button className="text-dark-grey" onClick={() => clearCart()}>
            Remove all
          </button>
        </div>
        <div className="mt-10">
          {productsInCart.map((product) => {
            return (
              <div key={product.id} className="flex">
                <img
                  className="h-24 rounded-xl"
                  src={product.image.mobile}
                  alt={product.name}
                />
                <div>
                  <h3>{product.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          to="/"
          className="m-auto w:6/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;
