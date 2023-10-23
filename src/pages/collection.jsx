import React from "react";
import Grid from "../components/Products/Grid";
import Filter from "../components/Products/Filter";
import Banner from "../components/Banner";
import Sortby from "../components/Products/Filter/Sortby";

const Collection = () => {
  return (
    <>
      <Banner />
      <div className="container p-2">
        <div className="row">
          <div className="col-left col-3">
            <Filter />
          </div>
          <div className="col-left col-9 my-5">
            <Sortby />
            <Grid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
