/** @format */

import { Route, Routes } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";

/** @format */
function App() {
  const { isShowModal } = useAppStore();
  console.log("is", isShowModal);
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
        theme="colored"
      />
      <ToastContainer />
    </>
  );
}

export default App;
