/** @format */
import { NavLink } from "react-router-dom";
import logo from "~/assets/HouseLine.svg";
import logoMainColor from "~/assets/HouseLineMain.svg";
import { navigation } from "~/ultils/constant";
import { Button, Login } from "..";
import withRouter from "~/hocs/withRouter";
import { useAppStore } from "~/store/useAppStore";
const Navigation = ({ navigate, location }) => {
  const { setModal } = useAppStore();
  const isHomePage = location.pathname === "/";
  const textIsHomePage = isHomePage ? "text-main-50" : "text-main-900";
  const textActiveIsHomePage = isHomePage
    ? "text-white font-semibold"
    : "text-main-900 font-semibold";

  const handleLogin = () => {
    setModal({
      isShowModal: true,
      contentModal: <Login />,
    });
  };

  return (
    <div
      className={`${textIsHomePage} bg-transparent flex z-50 items-center   justify-between inset-0 fixed top-[85px] h-[85px] px-[100px] font-main`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/" className="flex gap-1 items-center">
          <img src={isHomePage ? logo : logoMainColor} alt="logo" />
          <div className={`flex flex-col ${!isHomePage && "text-main-700"}`}>
            <h1 className="text-[24px] leading-6 font-medium">REIS</h1>
            <span className="text-[14px] leading-4">Real Estate</span>
          </div>
        </a>
        <nav className="flex gap-8 text-[14px]  items-center">
          {navigation.map((nav) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? `${textActiveIsHomePage}` : ""
              }
              to={nav.path}
              key={nav.id}
            >
              {nav.title}
            </NavLink>
          ))}
          <Button handleOnClick={() => handleLogin()}>Add Listing</Button>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
