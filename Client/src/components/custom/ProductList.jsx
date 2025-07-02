import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div
      className="w-[93vw] grid sm:grip-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto
         gap-5 place-content-center my-10"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
