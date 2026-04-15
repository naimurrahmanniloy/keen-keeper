import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
