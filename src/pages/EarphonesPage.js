import React from "react";
import PageHeader from "../components/PageHeader";
import Category from "../components/Category";
import Intro from "../components/Intro";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
const EarphonesPage = () => {
  const display_products = useSelector((state) => state.products);
  return (
    <>
      <PageHeader title="EARPHONES" />
      {display_products.map((product, id) => {
        if (product.category === "earphones") {
          return <ProductList key={id} {...product} />;
        } else {
          return " ";
        }
      })}
      <Category />
      <Intro />
    </>
  );
};

export default EarphonesPage;
