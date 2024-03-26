/** @format */

import { memo, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navigation, TopHeader } from "~/components";

const LayoutPublic = () => {
  const location = useLocation();
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
      <Footer />
    </main>
  );
};

export default memo(LayoutPublic);
