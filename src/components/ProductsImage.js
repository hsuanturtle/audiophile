import React from "react";

const ProductsImage = ({ name, gallery }) => {
  return (
    <div className="w-10/12 m-auto flex flex-col gap-4 mt-32 lg:flex-row lg:justify-center lg:items-center">
      <div className="flex flex-col gap-8">
        <img className="rounded-xl" src={gallery.first.mobile} alt={name} />
        <img className="rounded-xl" src={gallery.second.mobile} alt={name} />
      </div>
      <img
        className="rounded-xl lg:w-3/6"
        src={gallery.third.mobile}
        alt={name}
      />
    </div>
  );
};

export default ProductsImage;
