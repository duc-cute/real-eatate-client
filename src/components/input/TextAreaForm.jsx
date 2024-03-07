/** @format */

import React from "react";

const TextAreaForm = ({
  register,
  validate,
  errors,
  id,
  label,
  disabled,
  placeholder,
}) => {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block mb-[6px] text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <textarea
        id={id}
        {...register(id, validate)}
        rows="4"
        className="block p-2.5 w-full text-sm outline-none text-gray-900  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-main-500 "
        placeholder={placeholder}
      ></textarea>
      {errors[id] && (
        <small className="text-[12px] text-error italic  ">
          {errors[id]?.message}
        </small>
      )}
    </div>
  );
};

export default TextAreaForm;
