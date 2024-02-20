/** @format */

import React from "react";

const InputForm = ({
  label,
  type = "text",
  placeholder,
  disabled = false,
  style,
  id,
  errors,
  register,
  defaultValue,
  validate,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, validate)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main-500 block w-full p-2 "
        placeholder={placeholder}
      />
      {errors[id] && (
        <small className="text-[12px] text-error italic  ">
          {errors[id]?.message}
        </small>
      )}
    </div>
  );
};

export default InputForm;
