/** @format */

import React, { memo } from "react";
import usePaginate from "~/hooks/usePaginate";
import PaginaItem from "./PaginaItem";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { Button } from "..";

const Pagination = ({ total, limit = 12, sibling = 1 }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  let currentPage = +searchParams.get("page") || 1;
  const paginateArr = usePaginate({
    total,
    currentPage,
    limit,
    sibling,
  });
  const handleNeighbo = (flag) => {
    if (flag === "prev") {
      if (currentPage === 1) return;
      navigate({
        pathname: location.pathname,
        search: createSearchParams({ page: currentPage - 1 }).toString(),
      });
    }
    if (flag === "next") {
      if (currentPage === Math.ceil(total / limit)) return;
      navigate({
        pathname: location.pathname,
        search: createSearchParams({ page: currentPage + 1 }).toString(),
      });
    }
  };
  return (
    <ul className="inline-flex -space-x-px  gap-3">
      <li>
        <Button
          handleOnClick={() => handleNeighbo("prev")}
          className={`${
            currentPage === 1
              ? "bg-main-100 text-gray-500 cursor-not-allowed"
              : "bg-main-500 text-white"
          } 
          px-0 flex  justify-center text-[16px] font-semibold w-[40px] h-[40px] `}
        >
          <GrLinkPrevious />
        </Button>
      </li>
      {paginateArr?.map((el, index) => (
        <li key={index}>
          <PaginaItem page={currentPage || 1}>{el}</PaginaItem>
        </li>
      ))}
      <li>
        <Button
          handleOnClick={() => handleNeighbo("next")}
          className={`${
            currentPage === Math.ceil(total / limit)
              ? "bg-main-100  text-gray-500 cursor-not-allowed"
              : "bg-main-500 text-white"
          } 
          px-0 flex select-none  justify-center text-[16px] font-semibold w-[40px] h-[40px] `}
        >
          <GrLinkNext />
        </Button>
      </li>
    </ul>
  );
};

export default memo(Pagination);
