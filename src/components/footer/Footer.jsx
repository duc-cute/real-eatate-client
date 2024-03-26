/** @format */

import React from "react";
import logoMainColor from "~/assets/HouseLineMain.svg";
import icons from "~/ultils/icons";
const {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FiPhone,
} = icons;
const Footer = () => {
  return (
    <div className="w-main mx-auto px-[50px]">
      <div className="w-full h-[1px] bg-gray-100">
        <ul className="grid grid-cols-5 py-12">
          <li className="col-span-2">
            <a href="/" className="flex gap-1 items-center mb-6">
              <img src={logoMainColor} alt="logo" />
              <div className="flex flex-col text-main-500">
                <h1 className="text-[24px] leading-6 font-medium">REIS</h1>
                <span className="text-[14px] leading-4">Real Estate</span>
              </div>
            </a>
            <h3 className="text-[#1B1D1F] font-semibold text-[18px]">
              Contact Us
            </h3>
            <ul className="text-[14px] text-[#6D737A] flex flex-col gap-2 mt-4">
              <li>Call : +123 400 123</li>
              <li>
                Praesent nulla massa, hendrerit
                <br />
                vestibulum gravida in, feugiat auctor felis.
              </li>
              <li className="text-[#363A3D] font-medium">
                Email: example@mail.com
              </li>
              <li className="flex items-center gap-8 text-[18px] text-main-500 mt-3">
                <a className=" flex items-center justify-center w-10 h-10 bg-main-50 rounded-md">
                  <FaFacebookF />
                </a>
                <a className=" flex items-center justify-center w-10 h-10 bg-main-50 rounded-md">
                  <FaDribbble />
                </a>{" "}
                <a className=" flex items-center justify-center w-10 h-10 bg-main-50 rounded-md">
                  <FaBehance />
                </a>{" "}
                <a className=" flex items-center justify-center w-10 h-10 bg-main-50 rounded-md">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1B1D1F] font-semibold text-[18px]">
              Features
            </h3>
            <ul className="text-[14px] text-[#6D737A] flex flex-col gap-3 mt-6">
              <li>Home</li>
              <li>Become a Host</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1B1D1F] font-semibold text-[18px]">
              Company
            </h3>
            <ul className="text-[14px] text-[#6D737A] flex flex-col gap-3 mt-6">
              <li>About Us</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1B1D1F] font-semibold text-[18px]">
              Team and policies
            </h3>
            <ul className="text-[14px] text-[#6D737A] flex flex-col gap-3 mt-6">
              <li>Terms of servies</li>
              <li>Privacy Policy</li>
              <li>Security</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
