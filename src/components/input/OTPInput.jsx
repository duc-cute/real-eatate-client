/** @format */

import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button } from "..";
import { twMerge } from "tailwind-merge";
const OTPInput = ({ cb, phone }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmOTP = () => {
    setIsLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        cb();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
    // cb();
  };

  return (
    <div className="relative flex flex-col justify-center  py-2 px-2">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl">
          <p>Phone Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400 ">
          <p>We have sent a code to your phone number {phone} </p>
        </div>
      </div>

      <div className="py-5">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>•</span>}
          renderInput={(props) => <input {...props} />}
          shouldAutoFocus={true}
          inputStyle={twMerge(
            `w-10 h-12 box-content  px-4 text-center leading-5  text-main-700  outline-none rounded-xl border border-gray-200 text-lg  focus:bg-gray-50 focus:ring-1 ring-blue-700`
          )}
          containerStyle={`flex justify-center`}
        />
      </div>

      <div className="flex flex-col space-y-5">
        <div>
          <Button
            handleOnClick={handleConfirmOTP}
            disabled={isLoading}
            className={`bg-blue-700 text-white w-full rounded-xl`}
          >
            Verify Account
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
          <p>Didn't recieve code?</p>{" "}
          <a
            className="flex flex-row items-center text-blue-600"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resend
          </a>
        </div>
      </div>
    </div>
  );
};

export default OTPInput;
