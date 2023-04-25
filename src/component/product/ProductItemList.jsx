import { Outlet } from "react-router-dom";
import ProductItemListForm from "./ProductItemListForm";

const ProductItemList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <ProductItemListForm />
        <Outlet />
      </div>
    </div>
  );
};

export default ProductItemList;
