/** @format */

import React, { memo, useState } from "react";
import { Button, InputForm, InputRange, SearchItem, SelectLib } from "..";
import { useForm } from "react-hook-form";
import { usePropertyStore } from "~/store/usePropertyStore";
import { createSearchParams, useNavigate } from "react-router-dom";
import path from "~/ultils/path";
import { FaChevronDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useAppStore } from "~/store/useAppStore";

const Search = ({ vertical = false }) => {
  const [showRange, setShowRange] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const { propertyType } = usePropertyStore();
  const { setModal } = useAppStore();
  const handleSearch = (data) => {
    const { propertyType, start, end, address } = data;
    let params = {};
    if (address) params.address = address;

    if (start) params.start = start;
    if (end) params.end = end;
    if (propertyType) params.propertyTypeId = propertyType;

    navigate({
      pathname: `${path.PROPERTIES}`,
      search: createSearchParams(params).toString(),
    });
    if (vertical)
      setModal({
        isShowModal: false,
        contentModal: null,
      });
  };
  return (
    <form
      className={twMerge(
        `grid  py-6 px-3  shadow-xl  rounded-lg  bg-white  ${
          vertical
            ? "grid-cols-1 min-w-[500px] gap-2 pt-3"
            : "grid-cols-4  translate-y-[-50%] w-[70%] "
        } `
      )}
    >
      <SearchItem vertical={vertical} title={"locations"}>
        <InputForm
          register={register}
          errors={errors}
          id={"address"}
          placeholder={"Select location"}
          style="border-[#ccc] placeholder:text-[#808080]  rounded-md w-full bg-white text-sm h-[38px]"
        />
      </SearchItem>
      <SearchItem vertical={vertical} title={"Property Type"}>
        <SelectLib
          options={propertyType.map((option) => ({
            ...option,
            label: option.name,
          }))}
          register={register}
          id={"propertyType"}
          setValue={setValue}
          placeholder={
            <span className="text-sm text-[#808080] font-normal">
              Select property type
            </span>
          }
          isClearable={true}
        />
      </SearchItem>
      <SearchItem vertical={vertical} title={"Rent range"}>
        {!vertical && (
          <Button
            className={`border-[#ccc] text-sm py-1 justify-between min-h-[38px] rounded-md  bg-white w-full text-[#808080]`}
            handleOnClick={() => setShowRange((prev) => !prev)}
          >
            Select range
            <FaChevronDown color="#ccc" />
          </Button>
        )}
        {(showRange || vertical) && (
          <InputRange vertical={vertical} errors={errors} register={register} />
        )}
      </SearchItem>

      <div className={`flex justify-center  items-end ${vertical && "mx-3"}`}>
        <Button
          type="submit"
          handleOnClick={handleSubmit(handleSearch)}
          className={`text-white bg-main-600 w-[102px] h-12 ${
            vertical && "w-full "
          }`}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default memo(Search);
