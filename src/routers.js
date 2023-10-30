import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Collection from "./pages/collection";
import Product from "./components/Product";
import Cart from "./pages/cart";
// import Test from "./pages/test";
function routers() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Route>
    </Routes>
  );
}

export default routers;
