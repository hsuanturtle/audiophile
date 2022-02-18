import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const AmountButtons = () => {
  return (
    <div className="flex bg-light-grey w-2/5 justify-around items-center gap-2 h-4">
      <FaMinus className="text-dark-grey text-xs cursor-pointer hover:text-light-beige" />
      <p className="font-bold">1</p>
      <FaPlus className="text-dark-grey text-xs cursor-pointer hover:text-light-beige" />
    </div>
  );
};

export default AmountButtons;
