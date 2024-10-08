import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

function CommanLayout() {
  return (
    <div className="w-screen overflow-hidden h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default CommanLayout;
