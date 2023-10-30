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
import { Link } from "react-router-dom";

const Grid = () => {
  const products = useSelector((state) => state.product.currentProductList);

  console.log(products);
  if (products.length === 0)
    return (
      <MDBContainer fluid className="">
        <MDBRow className="g-4 mt-5 ml-2"> There is no product!</MDBRow>
      </MDBContainer>
    );

  return (
    <MDBContainer fluid className="">
      <MDBRow className="g-4">
        {products.map((product) => (
          <MDBCol key={product.id} md="12" lg="4" className="mb-4 mb-lg-0 ">
            <MDBCard>
              <Link to={"/product/" + product.id}>
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
                  <MDBCardImage
                    src={product.image}
                    position="top"
                    alt="Laptop"
                  />
                </div>
              </Link>
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
                    {}
                    {[...Array(parseInt(product.rating.rate) - 1)].map(
                      (rate, index) => (
                        <MDBIcon key={index} fas icon="star" />
                      )
                    )}
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
