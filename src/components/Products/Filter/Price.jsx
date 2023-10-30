import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductFilter } from "../../../action/product";

const Price = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.currentFilter);
  const currentFilter = filter.price;
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
      <h3>Price</h3>
      <ul>
        <li
          className={currentFilter.includes(0) ? "active" : ""}
          onClick={() => setFilter("price", 0)}
        >
          0
        </li>
        <li
          className={currentFilter.includes(100) ? "active" : ""}
          onClick={() => setFilter("price", 100)}
        >
          100
        </li>
        <li
          className={currentFilter.includes(200) ? "active" : ""}
          onClick={() => setFilter("price", 200)}
        >
          200
        </li>
        <li
          className={currentFilter.includes(300) ? "active" : ""}
          onClick={() => setFilter("price", 300)}
        >
          300
        </li>
      </ul>
    </div>
  );
};

export default Price;
