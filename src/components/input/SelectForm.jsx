/** @format */

import React from "react";
import { HiChevronDown } from "react-icons/hi2";
const SelectForm = ({
  label,
  placeholder,
  disabled = false,
  style,
  id,
  errors,
  register,
  defaultValue,
  validate,
  options,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-[6px] text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-3 ">
        <select
          id={id}
          disabled={disabled}
          {...register(id, validate)}
          className="block py-2.5 px-2 font-normal w-full text-[16px] text-main-800 bg-transparent  appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          {...register(id, validate)}
        >
          <option value={""}>{placeholder}</option>
          {options?.map((el, index) => (
            <option key={index} value={el.value}>
              {el?.label}
            </option>
          ))}
        </select>
        <span className="text-main-800">
          <HiChevronDown />
        </span>
      </div>
      {errors[id] && (
        <small className="text-[12px] text-error italic  ">
          {errors[id]?.message}
        </small>
      )}
    </div>
  );
};

export default SelectForm;
