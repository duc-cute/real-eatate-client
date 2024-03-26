/** @format */

import React from "react";
import { twMerge } from "tailwind-merge";

const SearchItem = ({ title, children, vertical }) => {
  return (
    <div
      className={twMerge(
        `flex flex-col relative items-center justify-center border-0  border-r-[1px] border-gray-300 ${
          vertical && "border-none"
        }`
      )}
    >
      <div
        className={twMerge(
          `h-[64px] w-full flex justify-between flex-col items-start px-3 ${
            vertical && "flex-row items-center"
          }`
        )}
      >
        <span
          className={`${
            vertical && "min-w-[120px]"
          } font-bold capitalize text-main-600 text-[14px]  text-nowrap`}
        >
          {title}
        </span>
        {children}
      </div>
    </div>
  );
};

export default SearchItem;
