import React from "react";
import PageHeader from "../components/PageHeader";
import ProductList from "../components/ProductList";
import Category from "../components/Category";
import Intro from "../components/Intro";
import { useSelector } from "react-redux";

const HeadPhonesPage = () => {
  //USESLECTOR
  const display_products = useSelector((state) => state.products);

  return (
    <>
      <PageHeader title="HEADPHONES" />
      {display_products.map((product) => {
        if (product.category === "headphones") {
          return <ProductList key={product.id} {...product} />;
        } else {
          return " ";
        }
      })}
      <Category />
      <Intro />
    </>
  );
};

export default HeadPhonesPage;
