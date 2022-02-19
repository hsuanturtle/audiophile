import React, { useCallback } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  MINUS_ADD_TO_CART_AMOUNT,
  ADD_ADD_TO_CART_AMOUNT,
} from "../utils/actions";
const AmountButtons = () => {
  const amount = useSelector((state) => state.addCartQuantity);
  console.log(amount);
  const dispatch = useDispatch();
  const minusAmount = useCallback(() => {
    dispatch({ type: MINUS_ADD_TO_CART_AMOUNT }, [dispatch]);
  });
  const addAmount = useCallback(() => {
    dispatch({ type: ADD_ADD_TO_CART_AMOUNT }, [dispatch]);
  });

  return (
    <div className="flex bg-light-grey w-3/5 m-auto justify-around items-center gap-2 h-4">
      <button onClick={() => minusAmount()}>
        <FaMinus className="text-dark-grey text-xs cursor-pointer hover:text-light-beige" />
      </button>
      <p className="font-bold">{amount}</p>
      <button onClick={() => addAmount()}>
        <FaPlus className="text-dark-grey text-xs cursor-pointer hover:text-light-beige" />
      </button>
    </div>
  );
};

export default AmountButtons;
