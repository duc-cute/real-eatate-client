/** @format */

import { twMerge } from "tailwind-merge";

const Button = ({ children, className, type = "button", handleOnClick }) => {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-transparent border border-white text-white rounded-md px-4 py-3 ${
          className && className
        }`
      )}
      onClick={handleOnClick && handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
