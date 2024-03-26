/** @format */

import React, { memo } from "react";
import { InputForm } from "..";
import { twMerge } from "tailwind-merge";

const InputRange = ({ register, errors, vertical }) => {
  console.log("ver", vertical);
  return (
    <div
      className={twMerge(
        `flex gap-2 items-center ${
          vertical
            ? "relative translate-x-0 right-0"
            : "absolute right-[50%] translate-x-[50%] mt-2 px-3 top-full py-4 shadow-md rounded-md"
        } min-w-[280px]  bg-white `
      )}
    >
      <InputForm
        id={"start"}
        register={register}
        errors={errors}
        placeholder={"Min"}
        style="border-[#ccc] placeholder:text-[#808080] rounded-md  bg-white"
      />
      <InputForm
        id={"end"}
        register={register}
        errors={errors}
        placeholder={"Max"}
        style="border-[#ccc] placeholder:text-[#808080] rounded-md  bg-white"
      />
    </div>
  );
};

export default memo(InputRange);
