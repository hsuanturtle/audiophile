import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
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
    <div className="relative">
      <div className="overflow-y-auto fixed px-14 py-8 h-80 w-11/12 top-20 right-4 text-black bg-white z-20 rounded-xl shadow-4xl">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">
            CART <span className="ml-4">({totalProduct})</span>
          </h1>
          <button className="text-dark-grey" onClick={() => clearCart()}>
            Remove all
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {productsInCart.map((product) => {
            return (
              <div
                key={product.id}
                className="flex gap-8 justify-between items-center"
              >
                <img
                  className="h-24 rounded-xl"
                  src={product.image.mobile}
                  alt={product.name}
                />
                <div className="flex flex-col gap-2 w-2/5">
                  <h3 className="font-bold text-xl">{product.nickname}</h3>
                  <h3 className="font-bold text-dark-grey">${product.price}</h3>
                </div>
                <div className="w-full">
                  <div className="flex bg-light-grey w-3/5 m-auto justify-around items-center gap-2 h-4">
                    <button onClick={() => removeItems(product)}>
                      <FaMinus className="text-dark-grey text-xs cursor-pointer hover:text-light-beige" />
                    </button>
                    <p className="font-bold">{product.quantityInCart}</p>
                    <button onClick={() => addQuantityProductInCart(product)}>
                      <FaPlus className="text-dark-grey text-xs cursor-pointer hover:text-light-beige" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between mt-6 mb-10">
          <h1 className="text-dark-grey">TOTAL</h1>
          <h1 className="font-bold text-xl tracking-medium">${totalPrice}</h1>
        </div>

        {totalProduct !== 0 ? (
          <Link
            to="/"
            className="absolute text-center m-auto w-11/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
          >
            CHECKOUT
          </Link>
        ) : (
          <Link
            to="/checkout"
            className="absolute bottom-10 m-auto text-center w-11/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
          >
            GO SHOPPING
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
