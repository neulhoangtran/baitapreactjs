import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.product.filters.categories);
  console.log(["categories", categories]);
  return (
    <div className="p-3 shadow-2 mb-3">
      <h3>Categories</h3>
      <ul>
        {categories.length > 0 &&
          categories.map((cat, index) => <li key={index}>{cat}</li>)}
      </ul>
    </div>
  );
};

export default Categories;
