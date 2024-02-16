/** @format */

import { Outlet } from "react-router-dom";
import { Navigation, TopHeader } from "~/components";

const LayoutPublic = () => {
  return (
    <main>
      <TopHeader />
      <Navigation />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutPublic;
