/** @format */

import React from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ title, children, style }) => {
  return (
    <div
      className={twMerge(
        `flex items-center max-h-title-admin justify-between px-3 border-b border-[#ccc] pt-2 pb-3 ${style}`
      )}
    >
      <h1 className="font-bold text-2xl">{title}</h1>
      {children}
    </div>
  );
};

export default Title;
