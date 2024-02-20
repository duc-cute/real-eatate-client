/** @format */

import { useForm } from "react-hook-form";
import { Button, InputForm, RadioForm } from "..";
import icons from "~/ultils/icons";
import { useEffect, useState } from "react";
import { useAppStore } from "~/store/useAppStore";
import { optionsAccount } from "~/ultils/constant";
import { apiRegister, apiSignIn } from "~/apis/user";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import withRouter from "~/hocs/withRouter";
const { IoClose } = icons;
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { setModal } = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = async (data) => {
    if (isSignUp) {
      const res = await apiRegister(data);

      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Congrats!",
          showConfirmButton: true,
          confirmButtonText: "Go Login",
        }).then(({ isConfirmed }) => {
          if (isConfirmed) setIsSignUp(false);
        });
      } else toast.error(res?.mes);
    } else {
      const { password, phone, ...ortherData } = data;
      const res = await apiSignIn({ password, phone });
      if (res.success) {
        setModal({ isShowModal: false, contentModal: null });
        toast.success(res?.mes);
      } else toast.error(res?.mes);
    }
  };

  useEffect(() => {
    reset();
  }, [isSignUp]);
  return (
    <div className="bg-white min-w-[400px] p-4 rounded-lg">
      <div
        className="flex justify-end"
        onClick={() => setModal({ isShowModal: false, contentModal: null })}
      >
        <span className="text-[20px] cursor-pointer p-[8px] text-[#0a0a14] hover:bg-[#f1f1f4] rounded-[50%]">
          <IoClose />
        </span>
      </div>
      <div className="px-2 ">
        <h3 className="font-dance text-[28px] font-medium text-center text-main-500">
          Welcome to Nguyen's House
        </h3>
        <div className="flex leading-7 text-[16px] my-5 gap-5  border-b-[1px] border-main-50">
          <span
            className={`relative  cursor-pointer before:content-[''] before:absolute before:h-1 before:w-full ${
              !isSignUp && "before:bg-main-400 "
            } before:bottom-0 before:rounded-sm pb-5`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </span>
          <span
            className={`relative  cursor-pointer before:content-[''] before:absolute before:h-1 before:w-full  ${
              isSignUp && "before:bg-main-400 "
            }  before:bottom-0 before:rounded-sm pb-5`}
            onClick={() => setIsSignUp(true)}
          >
            New Account
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-3"
        >
          {isSignUp && (
            <InputForm
              id="name"
              label="Your Full Name"
              register={register}
              errors={errors}
              placeholder={"Type your full name here... "}
              validate={{ required: "Need Fill This Field!" }}
            />
          )}
          <InputForm
            id="phone"
            label="Phone"
            register={register}
            placeholder={"Type your phone here..."}
            validate={{
              required: "Need Fill This Field!",
              pattern: {
                value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
                message: "Phone number is invalid!",
              },
            }}
            errors={errors}
          />
          <InputForm
            id="password"
            label="Password"
            register={register}
            errors={errors}
            placeholder={"Type your password here... "}
            validate={{
              required: "Need Fill This Field!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            }}
          />
          {isSignUp && (
            <RadioForm
              id={"role"}
              label={"Type Account"}
              register={register}
              validate={{ required: "Please Choose type account!" }}
              options={optionsAccount}
              errors={errors}
            />
          )}
          <Button
            type="submit"
            className={"bg-main-700 font-medium mt-5 text-white"}
          >
            Sign In
          </Button>
          <span className="text-center text-main-700 font-medium py-4">
            Forgot the password ?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
