import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
