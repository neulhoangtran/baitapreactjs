import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

const Grid = () => {
  const products = useSelector((state) => state.product.productList);
  console.log(["products", products]);
  if (!products.length === 0) return;
  return (
    <MDBContainer fluid className="">
      <MDBRow className="g-4">
        {products.map((product) => (
          <MDBCol key={product.id} md="12" lg="4" className="mb-4 mb-lg-0 ">
            <MDBCard>
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">x4</p>
                </div>
              </div>
              <div className="image-box">
                <MDBCardImage src={product.image} position="top" alt="Laptop" />
              </div>
              <MDBCardBody>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0 product-name">{product.title}</h5>
                  <h5 className="text-dark mb-0">{"$" + product.price}</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Grid;
