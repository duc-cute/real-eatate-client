/** @format */

import { Outlet } from "react-router-dom";
import { Navigation, TopHeader } from "~/components";
import withRouter from "~/hocs/withRouter";

const LayoutPublic = ({ location }) => {
  return (
    <main>
      <TopHeader />
      <Navigation />
      <div className={location.pathname === "/" ? "pt-0" : "pt-[170px]"}>
        <Outlet />
      </div>
    </main>
  );
};

export default withRouter(LayoutPublic);
