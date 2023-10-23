import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Collection from "./pages/collection";
function routers() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/collection" element={<Collection />} />
      </Route>
    </Routes>
  );
}

export default routers;
