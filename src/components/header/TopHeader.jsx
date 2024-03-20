/** @format */
import { twMerge } from "tailwind-merge";
import mailImg from "~/assets/EnvelopeOpen.svg";
import icons from "~/ultils/icons";
import userImg from "~/assets/user.svg";
import { useUserStore } from "~/store/useUserStore";
import { optionsUser } from "~/ultils/constant";
import { Link, useLocation } from "react-router-dom";
import { Fragment, memo, useEffect, useRef, useState } from "react";

const {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FiPhone,
} = icons;

const TopHeader = ({ isStickyHeader }) => {
  const location = useLocation();
  const { current } = useUserStore();
  const optionRef = useRef();
  const [showOption, setShowOption] = useState(false);
  const isHomePage = location.pathname === "/";
  const { logout } = useUserStore();
  useEffect(() => {
    const handleShowOption = (e) => {
      if (current) {
        if (optionRef.current.contains(e.target))
          setShowOption((prev) => !prev);
        else setShowOption(false);
      }
    };

    window.addEventListener("click", handleShowOption);

    return () => {
      window.removeEventListener("click", handleShowOption);
    };
  }),
    [];
  return (
    <div
      className={twMerge(
        `${
          isStickyHeader && "translate-y-[-100%]"
        } transition-transform duration-300  ease-in-out bg-transparent flex items-center justify-between w-full fixed px-[100px] h-[85px] top-0 z-50 font-main text-[14px] text-white border-b-[1px] border-gray-300 ${
          !isHomePage && "bg-main-700"
        }`
      )}
    >
      <div className="flex gap-2  items-center font-semibold">
        <img src={mailImg} alt="mail" />
        Email us at :<span className="font-normal">example@mail.com</span>
      </div>
      <div className="flex h-full items-center gap-3">
        <div className="px-2 flex items-center gap-8 text-[18px]">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaDribbble />
          </a>{" "}
          <a href="">
            <FaBehance />
          </a>{" "}
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
        <span className="w-[1px] flex h-[40%] bg-white mx-2"></span>
        <div className="flex gap-3 items-center  py-2">
          <a href="" className="text-[18px]">
            <FiPhone />
          </a>
          123-4567 890
        </div>

        {current && (
          <>
            <span className="w-[1px] h-[40%] flex bg-white mx-2"></span>
            <div className="relative select-none">
              <div
                ref={optionRef}
                className="px-2 flex gap-3 items-center  ml-1 hover:bg-overlay-user py-1 cursor-pointer"
              >
                <div className="flex flex-col gap-1 leading-4 ">
                  <span>ID:{current.id}</span>
                  <p>{current.name}</p>
                </div>
                <div className="w-10 h-10">
                  <img
                    className="w-full h-full object-cover"
                    src={userImg}
                    alt="user"
                  />
                </div>
              </div>
              <div
                className={`${
                  !showOption && "hidden"
                } absolute top-full mt-2 right-0  min-w-28 bg-white divide-y divide-gray-100 rounded-lg shadow `}
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="py-2 text-sm text-black capitalize ">
                  {optionsUser.map((el) => (
                    <Fragment key={el.id}>
                      {current.userRoles.some(
                        (role) => role.roleCode === el.role
                      ) && (
                        <Link to={el.path}>
                          <span className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                            {el.title}
                          </span>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                  <span
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => logout()}
                  >
                    Logout
                  </span>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(TopHeader);
