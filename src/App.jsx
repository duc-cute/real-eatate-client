/** @format */

import { Route, Routes } from "react-router-dom";
import path from "./ultils/path";
import { Home, LayoutPublic } from "./pages/public";

/** @format */
function App() {
  return (
    <Routes>
      <Route path={path.PUBLIC_LAYOUT} element={<LayoutPublic />}>
        <Route path={path.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
