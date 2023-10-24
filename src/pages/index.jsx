import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assests/css/style.css";
import { useLocation } from "react-router-dom";
import Homepage from "../components/Homepage";

const Index = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="page-wrapper">
      <Header />
      <div id="content">
        {location.pathname === "/" && <Homepage />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
