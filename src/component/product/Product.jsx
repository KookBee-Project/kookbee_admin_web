import { Outlet } from "react-router-dom";
import ManagerSideBar from "../../sidebar/ManagerSideBar";

const Product = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <ManagerSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
