/** @format */

import React, { Fragment, useEffect, useRef, useState } from "react";
import propertyBg from "~/assets/room.png";
import {
  BreadCrumb,
  Pagination,
  PropertyCard,
  Search,
  SelectForm,
  SelectLib,
} from "~/components";
import { CiBoxList } from "react-icons/ci";
import { IoMdOptions } from "react-icons/io";
import { apiGetProperties } from "~/apis/property";
import { useForm } from "react-hook-form";
import { fieldFilter, optionsSort } from "~/ultils/constant";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppStore } from "~/store/useAppStore";
const Properties = () => {
  const [properties, setProperties] = useState("");
  const [modeFilter, setModeFilter] = useState("all");
  const [searchParams] = useSearchParams();
  const bodyRef = useRef();
  const { setModal } = useAppStore();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const sort = watch("sort");
  const fetchProperties = async (params) => {
    const res = await apiGetProperties({ limit: 12, ...params });
    if (res.success) {
      setProperties(res?.property);
    }
  };

  useEffect(() => {
    let params = Object.fromEntries(searchParams);
    if (sort) params.sort = sort;
    if (modeFilter !== "all") params.listingType = modeFilter;

    fetchProperties(params);
  }, [searchParams, sort, modeFilter]);

  useEffect(() => {
    let params = Object.keys(Object.fromEntries(searchParams));

    if (params.length > 0)
      bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams]);

  return (
    <div className="bg-white w-full ">
      <div className="relative h-[275px]" ref={bodyRef}>
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
      <div className="w-main mx-auto px-[50px]">
        <div className="flex w-full justify-between items-center text-[#1B1D1F] h-6 mt-20 text-[14px]">
          <div className="flex items-center gap-3">
            <span
              className="text-[26px] flex items-center gap-3 text-[#333]"
              onClick={() =>
                setModal({
                  isShowModal: true,
                  contentModal: <Search vertical={true} />,
                })
              }
            >
              <CiBoxList />
            </span>
            <div className="flex items-center gap-3 text-[16px] text-nowrap font-semibold  text-main-500">
              Sort by:
              <SelectLib
                id={"sort"}
                placeholder={"Default Order"}
                register={register}
                options={optionsSort.map((option) => ({
                  ...option,
                  id: option.value,
                }))}
                isClearable={true}
                setValue={setValue}
              />
            </div>
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
        <div className="grid grid-cols-3 mt-10 gap-5 bg-[#fcfdff] shadow-xl p-5 rounded-lg">
          {properties?.rows?.length > 0 &&
            properties?.rows.map((property) => (
              <Fragment key={property.id}>
                <PropertyCard property={property} />
              </Fragment>
            ))}
        </div>
        <div className="flex justify-center mt-14 mb-10">
          <Pagination total={properties.count} sibling={0} />
        </div>
      </div>
    </div>
  );
};

export default Properties;
