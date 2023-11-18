import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/cartContext";

const Layout = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Layout;
