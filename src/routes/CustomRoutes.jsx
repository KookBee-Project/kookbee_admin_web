import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/admin/Login";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
