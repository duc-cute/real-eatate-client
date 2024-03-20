/** @format */

import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
const BreadCrumb = () => {
  const routes = [
    { path: "/", breadcrumb: "Home" },
    { path: "/properties", breadcrumb: "Properties" },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }, index, self) => (
        <Link
          key={match.pathname}
          to={match.pathname}
          className="flex items-center  text-[14px] "
        >
          <span
            className={`${
              index === self.length - 1 && "font-medium"
            } capitalize leading-5`}
          >
            {breadcrumb}
          </span>
          {index !== self.length - 1 && <span>&nbsp;/&nbsp; </span>}
        </Link>
      ))}
    </>
  );
};

export default BreadCrumb;
