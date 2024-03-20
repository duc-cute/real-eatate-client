/** @format */

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation, TopHeader } from "~/components";
import withRouter from "~/hocs/withRouter";

const LayoutPublic = ({ location }) => {
  const [isStickyHeader, setIsStickyHeader] = useState(false);

  const stickyHeaderFuc = () => {
    if (window.scrollY >= 85) setIsStickyHeader(true);
    else setIsStickyHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFuc);

    return () => {
      window.removeEventListener("scroll", stickyHeaderFuc);
    };
  }, [isStickyHeader]);
  return (
    <main>
      <TopHeader isStickyHeader={isStickyHeader} />
      <Navigation isStickyHeader={isStickyHeader} />
      <div className={location.pathname === "/" ? "pt-0" : "pt-[170px]"}>
        <Outlet />
      </div>
    </main>
  );
};

export default withRouter(LayoutPublic);
