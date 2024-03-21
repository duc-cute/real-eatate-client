/** @format */

import React from "react";
import { Button } from "..";
import withRouter from "~/hocs/withRouter";
import { createSearchParams, useSearchParams } from "react-router-dom";

const PaginaItem = ({ children, location, navigate, page }) => {
  const [params] = useSearchParams();

  const handlePagination = () => {
    if (Number(children)) {
      navigate({
        pathname: location.pathname,
        search: createSearchParams({ page: children }).toString(),
      });
    }
  };

  return (
    <Button
      handleOnClick={handlePagination}
      className={`${
        !Number(children) ? "items-end pb-2 cursor-default " : "items-center"
      }  ${
        +page === children
          ? "bg-main-500 text-white "
          : "bg-main-100 text-main-600 "
      }    px-0 flex  justify-center text-[14px] font-semibold w-[40px] h-[40px] `}
    >
      {children}
    </Button>
  );
};

export default withRouter(PaginaItem);
