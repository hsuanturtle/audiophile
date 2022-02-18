import React from "react";

const ProductsImage = ({ name, gallery }) => {
  return (
    <div className="w-10/12 m-auto flex flex-col gap-4 mt-32">
      <img className="rounded-xl" src={gallery.first.mobile} alt={name} />
      <img className="rounded-xl" src={gallery.second.mobile} alt={name} />
      <img className="rounded-xl" src={gallery.third.mobile} alt={name} />
    </div>
  );
};

export default ProductsImage;
