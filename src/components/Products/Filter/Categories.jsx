import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductFilter } from "../../../action/product";

const Categories = () => {
  const categories = useSelector((state) => state.product.filters.categories);
  const filter = useSelector((state) => state.product.currentFilter);
  const currentFilter = filter.categories;
  const dispatch = useDispatch();
  const setFilter = (key, value) => {
    dispatch(setProductFilter(key, value));
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 500,
        behavior: "smooth", // Smooth scrolling
      });
    } else {
      // For older browsers that don't support scroll behavior
      window.scrollTo(500, 0);
    }
  };

  return (
    <div className="p-3 shadow-2 mb-3">
      <h3>Categories</h3>
      <ul>
        {categories.length > 0 &&
          categories.map((cat, index) => (
            <li
              className={
                currentFilter.includes(
                  cat
                    .trim()
                    .toLowerCase()
                    .replace(/[^\w]+/g, "_")
                )
                  ? "active"
                  : ""
              }
              onClick={() =>
                setFilter(
                  "categories",
                  cat
                    .trim()
                    .toLowerCase()
                    .replace(/[^\w]+/g, "_")
                )
              }
              key={index}
            >
              {cat}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
