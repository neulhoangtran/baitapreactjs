import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductFilter } from "../../../action/product";

const Star = () => {
  //   const categories = useSelector((state) => state.product.filters.Star);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.currentFilter);
  const currentFilter = filter.rating;

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
    <div className="p-3 shadow-2">
      <h3>Star</h3>
      <ul>
        <li
          className={currentFilter.includes(1) ? "active" : ""}
          onClick={() => setFilter("rating", 1)}
        >
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li
          className={currentFilter.includes(2) ? "active" : ""}
          onClick={() => setFilter("rating", 2)}
        >
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li
          className={currentFilter.includes(3) ? "active" : ""}
          onClick={() => setFilter("rating", 3)}
        >
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li
          className={currentFilter.includes(4) ? "active" : ""}
          onClick={() => setFilter("rating", 4)}
        >
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li
          className={currentFilter.includes(5) ? "active" : ""}
          onClick={() => setFilter("rating", 5)}
        >
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Star;
