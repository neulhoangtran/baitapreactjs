import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Related from "./Detail/Related";
import Tabs from "./Detail/Tabs";
import Addtocart from "./Detail/Addtocart";

function Product() {
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  } else {
    // For older browsers that don't support scroll behavior
    window.scrollTo(0, 0);
  }
  const products = useSelector((state) => state.product.productList);

  const params = useParams();

  if (!params.productId)
    return <div className="container mt-5">Not Found Product!</div>;
  let product = products.filter(
    (_product) => _product.id === parseInt(params.productId)
  );

  if (product.length <= 0)
    return <div className="container mt-5">Not Found Product!</div>;
  product = product[0];
  return (
    <div className="container">
      <div className="product-info mt-5 mb-5 row">
        <div className="col-image col-6">
          <img src={product.image} alt="" />
        </div>

        <div className="col-info col-6">
          <div className="inner p-5">
            <h2 className="name  mb-3">{product.title}</h2>
            <div className="rating  mb-2">
              <div className="ms-auto text-warning">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
              </div>
            </div>
            <div className="price  mb-2">{"$" + product.price}</div>
            <div className="description mb-2">{product.description}</div>
            <div className="social mb-5">
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#"
              >
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
            </div>
            <Addtocart id={product.id} />
          </div>
        </div>
      </div>

      <Tabs />
      <Related />
    </div>
  );
}

export default Product;
