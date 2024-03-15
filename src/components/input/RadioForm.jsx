/** @format */

import React from "react";
import { twMerge } from "tailwind-merge";

const RadioForm = ({
  id,
  label,
  register,
  validate,
  errors,
  disabled = false,
  options,
  col,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className=" text-sm font-medium text-gray-900">{label}</label>
      <div
        className={twMerge(`flex justify-between  gap-1 ${col && "flex-col"}`)}
      >
        {options?.map((el, index) => (
          <div key={index} className="flex items-center gap-1">
            <input
              id={el?.code}
              type="radio"
              value={el?.code}
              name={id}
              disabled={disabled}
              {...register(id, validate)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              htmlFor={el?.code}
              className="ms-2 text-sm font-medium text-gray-900 capitalize"
            >
              {el?.value}
            </label>
          </div>
        ))}
        {errors[id] && (
          <small className="text-[12px] text-error italic  ">
            {errors[id]?.message}
          </small>
        )}
      </div>
    </div>
  );
};

export default RadioForm;
