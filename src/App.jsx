/** @format */

import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import path from "./ultils/path";
import {
  AboutUs,
  Home,
  LayoutPublic,
  OurAgent,
  Properties,
  Search,
} from "./pages/public";
import { useAppStore } from "./store/useAppStore";
import { Modal } from "./components";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useUserStore } from "./store/useUserStore";
import {
  CreatePropertyType,
  DashBoard,
  LayoutAdmin,
  ManagePropertyType,
} from "./pages/admin";

/** @format */
function App() {
  const { isShowModal } = useAppStore();
  const { getCurrent, token, current, getRoles, roles } = useUserStore();
  useEffect(() => {
    if (token) getCurrent();
    getRoles();
  }, []);
  return (
    <>
      {isShowModal && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<LayoutPublic />}>
          <Route path={path.ABOUT_US} element={<AboutUs />} />
          <Route path={path.OUR_AGENT} element={<OurAgent />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
          <Route path={path.SEARCH} element={<Search />} />
          <Route path={path.HOME} element={<Home />} />
        </Route>
        <Route path={path.ADMIN_LAYOUT} element={<LayoutAdmin />}>
          <Route path={path.ADMIN_DASHBOARD} element={<DashBoard />} />
          <Route
            path={path.MANAGE_PROPERTY_TYPE}
            element={<ManagePropertyType />}
          />
          <Route
            path={path.CREATE_PROPERTY_TYPE}
            element={<CreatePropertyType />}
          />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
