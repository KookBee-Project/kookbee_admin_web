import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import SignUp from "../component/admin/SignUp";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
