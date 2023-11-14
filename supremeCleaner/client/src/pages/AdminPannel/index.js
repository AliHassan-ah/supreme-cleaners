import React from "react";
import AdminSidebar from "../../components/AdminPannelComp/AdminSidebar";
const AdminPannel = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#F6F6F3]">
      <div className="w-full flex-none md:w-64">{/* <AdminSidebar /> */}</div>
      <div>hello</div>
    </div>
  );
};

export default AdminPannel;
