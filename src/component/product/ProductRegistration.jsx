import { Outlet } from "react-router-dom";
import ManagerSideBar from "../../sidebar/ManagerSideBar";
import ProductRegistrationForm from "./ProductRegistrationForm";

const ProductRegistration = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <ProductRegistrationForm />
        <Outlet />
      </div>
    </div>
  );
};

export default ProductRegistration;
