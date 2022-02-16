import React from "react";
import PageHeader from "../components/PageHeader";
import ProductList from "../components/ProductList";
import Category from "../components/Category";
import Intro from "../components/Intro";
const HeadPhonesPage = () => {
  return (
    <>
      <PageHeader title="HEADPHONES" />
      <ProductList />
      <Category />
      <Intro />
    </>
  );
};

export default HeadPhonesPage;
