/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "~/components";

const LayoutAdmin = () => {
  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-2 bg-main-200 h-full max-h-screen overflow-y-auto">
        <SideBar />
      </aside>
      <div className="col-span-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
