/** @format */
import homepage from "~/assets/homepage.png";
import { Search } from "~/components";
const Home = () => {
  return (
    <div className="bg-white w-full ">
      <div className="relative">
        <img src={homepage} alt="banner" />
        <div className="text-white absolute  z-10 top-[50%] left-[50%] translate-x-[-50%] text-center">
          <h2 className="leading-[72px] font-medium  text-[50px]">
            Find Your Dream Home
          </h2>
          <span className="text-wrap max-w-[600px] break-words flex">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </span>
        </div>
      </div>
      <div className="w-main mx-auto flex justify-center">
        <Search />
      </div>
    </div>
  );
};

export default Home;
