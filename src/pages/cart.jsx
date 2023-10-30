import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInCart } from "../action/cart";
import CartEmpty from "../components/Cart/CartEmpty";
import CartItem from "../components/Cart/CartItem";
import CartSideBar from "../components/Cart/CartSideBar";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log(["items", items]);
  useEffect(() => {
    dispatch(getProductsInCart());
  }, [dispatch]);

  if (!items.length) return <CartEmpty />;

  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice += item.price * item.qty;
  });

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <CartItem items={items} />

                  <CartSideBar totalPrice={totalPrice} shipping={20} />
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
