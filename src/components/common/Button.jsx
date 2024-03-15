/** @format */

import { twMerge } from "tailwind-merge";
import { CgSpinner } from "react-icons/cg";

const Button = ({
  children,
  className,
  type = "button",
  handleOnClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-transparent  flex items-center gap-2 justify-center border border-white text-white rounded-md px-4 py-3 ${
          className && className
        } ${disabled && "opacity-80"}`
      )}
      onClick={handleOnClick && handleOnClick}
      disabled={disabled}
    >
      {disabled && (
        <span className="animate-spin text-[16px]">
          <CgSpinner />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
