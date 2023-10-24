import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addProductToCart } from "./../../../action/cart";

const Addtocart = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const _addProductToCart = (product, qty) => {
    dispatch(addProductToCart(product, qty));
  };
  return (
    <div className="mb-5 btn-addto">
      <MDBBtn
        rounded
        className="mx-2"
        color="danger"
        onClick={() => {
          _addProductToCart(product, 1);
          setTimeout(() => {
            window.location.href = "/cart";
          }, 500);
        }}
      >
        Add to cart
      </MDBBtn>
    </div>
  );
};

export default Addtocart;
