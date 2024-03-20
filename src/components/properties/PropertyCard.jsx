/** @format */

import React from "react";
// import imgtest from "~/assets/cardtest.png";
import { formatMoney } from "~/ultils/helper";
import bath from "~/assets/Bathtub.svg";
import acreageImg from "~/assets/ArrowsOut.svg";
// import avatar from "~/assets/avatarPro.svg";
import empty from "~/assets/emptyPro.jpg";
import { HiPlus, HiOutlineHeart } from "react-icons/hi2";
import { RxShare1 } from "react-icons/rx";
import { IoBedOutline } from "react-icons/io5";
const PropertyCard = ({ property }) => {
  return (
    <div className="rounded-md bg-white">
      <img
        className="w-full h-[240px] cursor-pointer object-cover rounded-tr-md rounded-tl-md"
        src={property.thumb || empty}
        alt="img"
      />
      <div className="px-6 pt-6">
        <h2 className="font-medium text-xl line-clamp-3 mb-4">
          {property.address}
        </h2>
        <span className="font-bold text-[20px] text-main-600">
          $ {formatMoney(property.price)}
        </span>
        <div className="flex items-center gap-4 text-gray-500 mt-3">
          <div className="flex items-center gap-3 ">
            <span className="text-[24px]">
              <IoBedOutline />
            </span>
            {property.bedRoom}
          </div>
          <div className="flex items-center gap-3">
            <img src={bath} alt="bath" />
            {property.bathRoom}
          </div>

          <div className="flex items-center gap-3">
            <img src={acreageImg} alt="acreage" />
            {formatMoney(property.propertySize)}.00 ft
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      </div>
      <div className="py-4 px-6 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            className="w-[42px] h-[42px] object-cover rounded-full"
            src={property.rPostedBy?.avatar}
            alt="avatar"
          />
          <span className="font-medium text-[18px] text-main-500">
            {property.rPostedBy?.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-main-50 w-[30px] h-[30px] flex items-center justify-center text-xl p-1 text-main-600">
            <RxShare1 />
          </span>
          <span className="bg-main-50 w-[30px] h-[30px] flex items-center justify-center text-xl p-1 text-main-600">
            <HiOutlineHeart />
          </span>
          <span className="bg-main-50 w-[30px] h-[30px] flex items-center justify-center text-xl p-1 text-main-600">
            <HiPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;