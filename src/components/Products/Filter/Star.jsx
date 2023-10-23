import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const Star = () => {
  //   const categories = useSelector((state) => state.product.filters.Star);
  return (
    <div className="p-3 shadow-2">
      <h3>Star</h3>
      <ul>
        <li>
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li>
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li>
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li>
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </li>
        <li>
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
