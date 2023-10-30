import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProductToCart } from "../../action/cart";

const CartItem = (props) => {
  const { items } = props;
  const dispatch = useDispatch();

  const removeItemInCart = (id) => {
    dispatch(removeProductToCart(id));
  };
  return (
    <MDBCol lg="7">
      <MDBTypography tag="h5">
        <Link to="/collection" className="text-body">
          <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue shopping
        </Link>
      </MDBTypography>

      <hr />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="mb-1">Shopping cart</p>
          <p className="mb-0">You have {items.length} items in your cart</p>
        </div>
      </div>
      {items.map((item) => (
        <MDBCard key={item.id} className="mb-3">
          <MDBCardBody>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <MDBCardImage
                    src={item.image}
                    fluid
                    className="rounded-3"
                    style={{ width: "65px" }}
                    alt="Shopping item"
                  />
                </div>
                <div className="ms-3">
                  <MDBTypography tag="h5">{item.title}</MDBTypography>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <div style={{ width: "50px" }}>
                  <MDBTypography tag="h5" className="fw-normal mb-0">
                    {item.qty}
                  </MDBTypography>
                </div>
                <div style={{ width: "80px" }}>
                  <MDBTypography tag="h5" className="mb-0">
                    {"$" + item.price}
                  </MDBTypography>
                </div>
                <a
                  onClick={() => removeItemInCart(item.id)}
                  href="#!"
                  style={{ color: "#cecece" }}
                >
                  <MDBIcon fas icon="trash-alt" />
                </a>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
    </MDBCol>
  );
};

export default CartItem;
