import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getManagerCampusList,
  postProductItems,
} from "../../store/product/productSlice";
import { useNavigate } from "react-router-dom";

const ProductRegistrationForm = () => {
  const { campusList } = useSelector((state) => state.product);

  const [request, setRequest] = useState({
    campusName: "",
    productItemName: "",
    productItemCounts: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getManagerCampusList());
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postProductItems(request));
    navigate("/product/itemlist");
  };


  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">상품 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <label htmlFor="productTitle" className="font-bold">
              {"캠퍼스"}
            </label>
            <select
              id="campusName"
              name="campusName"
              onChange={onChangeHandler}
              required
            >
              <option value="">캠퍼스 선택</option>
              {campusList?.map((el) => (
                <option value={el.campusName}>{el.campusName}</option>
              ))}
            </select>
            <label htmlFor="productTitle" className="font-bold">
              {"물품명"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"productItemName"}
              id={"productItemName"}
              onChange={onChangeHandler}
              required
            />
            <label htmlFor="productTitle" className="font-bold">
              {"수량"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="number"
              name={"productItemCounts"}
              id={"productItemCounts"}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <div className="mt-7">
          <button
            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProductRegistrationForm;
