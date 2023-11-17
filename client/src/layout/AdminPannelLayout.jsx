import React from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/cartContext";
import AdminSidebar from "../components/AdminPannelComp/AdminSidebar";
const AdminPannel = () => {
  return (
    <div>
      <CartProvider>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <AdminSidebar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-[#f9f9f9]">
            <Outlet />
          </div>
        </div>
      </CartProvider>
    </div>
  );
};

export default AdminPannel;
