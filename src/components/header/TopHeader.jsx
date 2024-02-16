/** @format */
import mailImg from "~/assets/EnvelopeOpen.svg";
import icons from "~/ultils/icons";

const {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FiPhone,
} = icons;

const TopHeader = () => {
  return (
    <div className="bg-transparent flex items-center justify-between w-full fixed px-[100px] h-[85px] top-0 z-50 font-main text-[14px] text-white border-b-[1px] border-gray-300">
      <div className="flex gap-2  items-center font-semibold">
        <img src={mailImg} alt="mail" />
        Email us at :<span className="font-normal">example@mail.com</span>
      </div>
      <div className="flex">
        <div className="flex items-center gap-8 text-[18px]">
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
            <FaInstagram />
          </a>{" "}
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="flex gap-3 items-center border-l-[1px] border-white mx-8 pl-8 py-2">
          <a href="" className="text-[18px]">
            <FiPhone />
          </a>
          123-4567 890
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
