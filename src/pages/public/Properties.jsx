/** @format */

import React, { Fragment, useEffect, useState } from "react";
import propertyBg from "~/assets/room.png";
import { BreadCrumb, PropertyCard, SelectForm } from "~/components";
import optionsIcon from "~/assets/ListBullets.png";
import { HiChevronDown } from "react-icons/hi2";
import { apiGetProperties } from "~/apis/property";
import { useForm } from "react-hook-form";
import { fieldFilter, optionsSort } from "~/ultils/constant";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [modeFilter, setModeFilter] = useState("all");
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const fetchProperties = async () => {
    const res = await apiGetProperties();
    if (res.success) {
      setProperties(res.property);
    }
  };
  console.log("wat", watch("sort"));
  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <div className="bg-white w-full ">
      <div className="relative h-[275px]">
        <img src={propertyBg} alt="banner" className="w-full h-full" />
        <div className="text-white absolute  z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
          <h2 className="leading-[72px] font-medium  text-[50px]">
            Propertice
          </h2>
          <div className="flex text-center w-full justify-center">
            <BreadCrumb />
          </div>
        </div>
      </div>
      <div className="w-main mx-auto ">
        <div className="flex w-full justify-between items-center text-[#1B1D1F] h-6 mt-20 text-[14px]">
          <div className="flex items-center gap-3">
            <img
              className="w-[24px] h-[24px] object-cover"
              src={optionsIcon}
              alt="options"
            />
            <span className="flex items-center gap-1 font-medium  text-main-700">
              Sort by:{" "}
              <SelectForm
                register={register}
                errors={errors}
                placeholder={"Default Order"}
                id={"sort"}
                options={optionsSort}
              />
            </span>
          </div>
          <ul className="font-medium text-[14px] text-main-900 flex gap-5">
            {fieldFilter.map((field) => (
              <li
                className={`cursor-pointer ${
                  modeFilter === field.value ? "font-bold" : ""
                } `}
                key={field.id}
                onClick={() => setModeFilter(field.value)}
              >
                {field.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5 bg-[#f6f7fa] shadow-2xl">
          {properties.length > 0 &&
            properties.map((property) => (
              <Fragment key={property.id}>
                <PropertyCard property={property} />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
