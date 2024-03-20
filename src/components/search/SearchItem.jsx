/** @format */

import React from "react";
import { SelectForm } from "..";

const SearchItem = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center border-0  border-r-[1px] border-gray-300 ">
      <div className="h-[64px] w-full flex justify-center flex-col items-start px-3">
        <span className="font-bold capitalize text-main-600 text-[14px] px-3">
          {title}
        </span>
        {children}
      </div>
    </div>
  );
};

export default SearchItem;
