import React from "react";
import PageHeader from "../components/PageHeader";
import Category from "../components/Category";
import Intro from "../components/Intro";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
const SpeakerPage = () => {
  const display_products = useSelector((state) => state.products);
  return (
    <>
      <PageHeader title="SPEAKER" />
      {display_products.map((product, id) => {
        if (product.category === "speakers") {
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

export default SpeakerPage;
