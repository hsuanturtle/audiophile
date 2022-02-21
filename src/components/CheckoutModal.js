import React, { useCallback } from "react";
import check from "../assets/icon-checkout.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { topFunction } from "../utils/helper";
import { DISPLAY_CHECKOUT_MODAL } from "../utils/actions";
const CheckoutModal = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const productsInCart = useSelector((state) => state.cart.products);
  const backHandler = () => {
    document.body.style.overflow = "scroll";
    topFunction();
  };
  return (
    <div className="relative z-20 bg-black">
      <div className="text-center fixed top-0 left-4 w-11/12 rounded-xl z-30 h-80 bg-white shadow-5xl">
        <div className=" p-8 flex flex-col gap-4">
          <img className="h-16" src={check} alt="check" />
          <h1 className="font-bold text-4xl">THANK YOU FOR YOUR ORDER</h1>
          <p className="text-dark-grey text-lg">
            You will receive an email information shortly
          </p>
          <div className="bg-grey rounded-xl h-20 overflow-y-auto py-2">
            {productsInCart.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex w-10/12 gap-8 justify-around items-center"
                >
                  <img
                    className="h-24 rounded-xl"
                    src={product.image.mobile}
                    alt={product.name}
                  />
                  <div className="flex flex-col gap-2 w-2/5">
                    <h3 className="font-bold text-xl">{product.nickname}</h3>
                    <h3 className="font-bold text-dark-grey">
                      ${product.price}
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-grey">
                      X{product.quantityInCart}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-black rounded-xl py-4">
            <h3 className="text-grey">GRAND TOTAL</h3>
            <h3 className="text-white font-bold text-xl">$ {totalPrice}</h3>
          </div>
          <Link
            to="/"
            className="absolute bottom-10 m-auto text-center w-10/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
            onClick={backHandler}
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
