import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/admin/Login";
import SignUp from "../component/admin/SignUp";
import ClassCreate from "../component/class/ClassCreate";
import ClassHistory from "../component/class/ClassHistory";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/class/create" element={<ClassCreate />} />
          <Route path="/class/myclass" element={<ClassHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
