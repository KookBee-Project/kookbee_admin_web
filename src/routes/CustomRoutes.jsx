import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/admin/Login";
import SignUp from "../component/admin/SignUp";
import ClassCreate from "../component/class/ClassCreate";
import ClassHistory from "../component/class/ClassHistory";
import ClassEdit from "../component/class/ClassEdit";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/class/open" element={<ClassCreate />} />
          <Route path="/class" element={<ClassHistory />} />
          <Route path="/class/edit" element={<ClassEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
