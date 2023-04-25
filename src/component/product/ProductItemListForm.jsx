import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getManagerCampusList,
  getProductItems,
} from "../../store/product/productSlice";

const ProductItemListForm = () => {
  const { campusList, itemList } = useSelector((state) => state.product);

  const [request, setRequest] = useState({
    campusName: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductItems(request.campusName));
    console.log(itemList);
  }, [request]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  useEffect(() => {
    dispatch(getManagerCampusList());
  }, []);

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">물품 내역</div>
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
          <table>
            <thead>
              <th>물품명</th>
              <th>수량</th>
            </thead>
            {itemList?.map((el) => (
              <tbody>
                <tr>
                  <td>{el.productItemName}</td>
                  <td>{el.productItemCounts}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductItemListForm;
