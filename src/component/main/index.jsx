import { Outlet } from "react-router-dom";
import Header from "./NavBar";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
