import React from "react";
import { useSelector } from "react-redux";
const CheckoutProduct = () => {
  const productsInCart = useSelector((state) => state.cart.products);
  const shippingFee = useSelector((state) => state.checkout.shippingFee);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="flex flex-col gap-4">
      {productsInCart.map((product) => {
        return (
          <div
            key={product.id}
            className="flex gap-8 justify-around items-center"
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
            <div>
              <h3 className="font-bold text-dark-grey">
                X{product.quantityInCart}
              </h3>
            </div>
          </div>
        );
      })}
      <div className="m-auto w-10/12 flex justify-between">
        <h3 className="font-bold text-dark-grey">TOTAL</h3>
        <h3 className="font-bold text-xl">$ {totalPrice}</h3>
      </div>
      <div className="m-auto w-10/12 flex justify-between">
        <h3 className="font-bold text-dark-grey">SHIPPING</h3>
        <h3 className="font-bold text-xl">$ {shippingFee}</h3>
      </div>
      <div className="w-10/12 m-auto h-0.5 bg-dark-grey"></div>
      <div className="m-auto w-10/12 flex justify-between">
        <h3 className="font-bold text-dark-grey">GRAND TOTAL</h3>
        <h3 className="font-bold text-xl text-light-beige">
          $ {shippingFee + totalPrice}
        </h3>
      </div>
      <button className="text-center m-auto w-10/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300">
        CONTINUE & PAY
      </button>
    </div>
  );
};

export default CheckoutProduct;
