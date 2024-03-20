/** @format */

import React from "react";
import { Button, SearchItem, SelectForm } from "..";
import { useForm } from "react-hook-form";

const Search = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const options = [{ id: 1, title: "Ha noi", value: "Ha noi" }];
  return (
    <div className="grid grid-cols-4 w-[60%] shadow-xl py-6 rounded-lg translate-y-[-50%] bg-white">
      <SearchItem title={"locations"}>
        <SelectForm
          errors={errors}
          id={"location"}
          options={options}
          validate={{ required: "Choose item!" }}
          register={register}
          placeholder={"Select your City"}
        />
      </SearchItem>
      <SearchItem title={"locations"}>
        <SelectForm
          errors={errors}
          id={"location"}
          options={options}
          validate={{ required: "Choose item!" }}
          register={register}
          placeholder={"Select your City"}
        />
      </SearchItem>
      <SearchItem title={"locations"}>
        <SelectForm
          errors={errors}
          id={"location"}
          options={options}
          validate={{ required: "Choose item!" }}
          register={register}
          placeholder={"Select your City"}
        />
      </SearchItem>

      <div className="flex justify-center  items-center">
        <Button className={`text-white bg-main-600 w-[102px] h-12`}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
