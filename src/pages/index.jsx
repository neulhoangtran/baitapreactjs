import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assests/css/style.css";
const Index = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
