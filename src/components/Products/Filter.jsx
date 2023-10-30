import React from "react";
import { useSelector } from "react-redux";
import Categories from "./Filter/Categories";
import Price from "./Filter/Price";
import Star from "./Filter/Star";

const Filter = () => {
  const filters = useSelector((state) => state.product.filters);
  if (!filters.length === 0) return;
  return (
    <div className="filter-bar my-5">
      <Categories />
      <Price />
      <Star />
    </div>
  );
};

export default Filter;
