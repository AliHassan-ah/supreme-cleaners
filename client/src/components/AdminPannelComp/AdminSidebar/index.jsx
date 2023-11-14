import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
// import NavLinks from "./navLinks";

// import "./AdminSidebar.scss";
const AdminSidebar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white">
      <Link to="/" className={`font-bold w-full`}>
        <div className="w-full md:w-full flex items-center justify-center gap-2 pb-[12px]">
          <span>
            <img src={logo} width="80px" />
          </span>
          <span className="text-black text-[14px] font-medium">
            Supreme Cleaners
          </span>
        </div>
      </Link>
      <div className="flex grow flex-col justify-between space-x-2  md:space-x-0">
        <div className="pb-[10px] navItems flex flex-row flex-wrap justify-between space-x-2 md:flex-col md:space-x-0 pt-[20px]">
          <NavLinks />
        </div>
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <LogoutIcon className="w-6" /> */}
            <div className="hidden md:block logOut text-[#B01212]">
              {" "}
              Log out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSidebar;
