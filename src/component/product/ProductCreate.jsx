import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductItemCount,
  getProductItemList,
  getStudentList,
  postProduct,
} from "../../store/product/productSlice";

const ProductCreate = () => {
  const { productItemCount, status, studentList, productItemList } =
    useSelector((state) => state.product);

  const dispatch = useDispatch();

  const param = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStudentList(param.bootcampId));
    dispatch(getProductItemList(param.bootcampId));
  }, []);

  const [request, setRequest] = useState({
    productType: "",
    studentId: 0,
    bootcampId: param.bootcampId,
    productRentalStartDate: "",
    productRentalEndDate: "",
    productItemId: 0,
    productCount: 0,
    productStatus: "",
  });

  useEffect(() => {
    dispatch(getProductItemCount(request.productItemId));
  }, [request.productItemId]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (request.productType === "") {
      alert("카테고리를 선택해주세요.");
    } else {
      dispatch(postProduct(request));
      if (status === "successed") {
        alert("물품 등록에 성공하였습니다.");
        navigate(`/product/${request.bootcampId}`);
      } else alert("물품 등록에 실패하였습니다.");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    const today = new Date();

    const yesterday = new Date(today.setDate(today.getDate() - 1));

    if (name === "productCount") {
      new Number(value) > new Number(productItemCount)
        ? alert("대여할 수량은 대여 가능 수량을 넘길수 없습니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productRentalEndDate") {
      today > new Date(value)
        ? alert("종료일은 오늘보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productRentalStartDate") {
      yesterday > new Date(value)
        ? alert("시작일은 어제보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productRentalStartDate") {
      new Date(value) > new Date(request.productRentalEndDate)
        ? alert("시작일은 종료일보다 이전이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productRentalEndDate") {
      new Date(request.productRentalStartDate) > new Date(value)
        ? alert("종료일은 시작일보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else setRequest({ ...request, [name]: value });
  };

  useEffect(() => {
    dispatch(getProductItemCount(productItemList.id));
  }, [productItemList.id]);

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">물품 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <label htmlFor="productTitle" className="font-bold">
              {"카테고리"}
            </label>
            <select
              id="productType"
              name="productType"
              onChange={onChangeHandler}
            >
              <option value="">카테고리를 선택하세요</option>
              <option value="OFFER">제공</option>
              <option value="RENTAL">대여</option>
            </select>
            <label htmlFor="studentId" className="font-bold">
              {"수령자"}
            </label>

            <select id="studentId" name="studentId" onChange={onChangeHandler}>
              <option value="">수령자를 선택하여주세요</option>
              {studentList?.map((el) => (
                <option value={el.id}>{el.userName}</option>
              ))}
            </select>

            <label htmlFor="productTitle" className="font-bold">
              {"물품명"}
            </label>
            <select
              id="productItemId"
              name="productItemId"
              onChange={onChangeHandler}
            >
              <option value="">물품을 선택해주세요</option>
              {productItemList?.map((el) => (
                <option value={el.id}>{el.productItemName}</option>
              ))}
            </select>
            <div className="flex flex-col my-2 w-10/12">
              <div className="font-bold">수량</div>
              <div className="flex justify-between">
                <div className="flex flex-col w-2/5">
                  <label htmlFor="productAvailableAmount" className="font-bold">
                    대여 가능 수량
                  </label>
                  <input
                    type="number"
                    className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                    value={productItemCount}
                    readOnly
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label htmlFor="productEndDate" className="font-bold">
                    대여할 수량
                  </label>
                  <input
                    type="number"
                    className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                    name="productCount"
                    id="productCount"
                    value={request.productCount}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2 w-10/12">
          {request?.productType === "RENTAL" && (
            <div className="flex justify-between">
              <div className="flex flex-col w-2/5">
                <label htmlFor="productRentalStartDate" className="font-bold">
                  대여시작일
                </label>
                <input
                  type="date"
                  className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                  name="productRentalStartDate"
                  id="productRentalStartDate"
                  value={request.productRentalStartDate}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="flex flex-col w-2/5">
                <label htmlFor="productEndDate" className="font-bold">
                  대여만료일
                </label>
                <input
                  type="date"
                  className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                  name="productRentalEndDate"
                  id="productRentalEndDate"
                  value={request.productRentalEndDate}
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>
          )}
          {request?.productType === "OFFER" && (
            <div className="flex justify-between">
              <div className="flex flex-col w-2/5">
                <label htmlFor="productRentalStartDate" className="font-bold">
                  제공예정일
                </label>
                <input
                  type="date"
                  className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                  name="productRentalStartDate"
                  id="productRentalStartDate"
                  value={request.productRentalStartDate}
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>
          )}
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

export default ProductCreate;
