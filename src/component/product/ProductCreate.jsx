import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createHomework } from "../../store/homework/homeworkSlice";

const ProductCreate = () => {
  const { data, status, error } = useSelector((state) => state.homework);
  const [request, setRequest] = useState({
    productCategory: "",
    receiver: "",
    productTitle: "",
    productAvailableAmount: 99,
    productOutAmount: 0,
    productStartDate: "",
    productEndDate: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInput = (e) => {
    const { name, value } = e.target;
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    if (name === "productOutAmount") {
      new Number(value) > new Number(request.productAvailableAmount)
        ? alert("대여할 수량은 대여 가능 수량을 넘길수 없습니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productEndDate") {
      today > new Date(value)
        ? alert("종료일은 오늘보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productStartDate") {
      yesterday > new Date(value)
        ? alert("시작일은 어제보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "productStartDate") {
      new Date(value) > new Date(request.productEndDate)
        ? alert("시작일은 종료일보다 이전이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "homeworkEndDate") {
      new Date(request.productStartDate) > new Date(value)
        ? alert("종료일은 시작일보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else setRequest({ ...request, [name]: value });
  };
  const getToday = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    dispatch(createHomework(request));
    if (status === "successed") {
      alert("물품 등록에 성공하였습니다.");
      navigate("/product");
    } else alert("물품 등록에 실패하였습니다.");
  };
  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">물품 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <label htmlFor="productTitle" className="font-bold">
              {"카테고리"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"productCategory"}
              id={"productCategory"}
              value={request.productCategory}
              onChange={setInput}
              required
            />
            <label htmlFor="receiver" className="font-bold">
              {"수령자"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"receiver"}
              id={"receiver"}
              value={request.receiver}
              onChange={setInput}
              required
            />

            <label htmlFor="productTitle" className="font-bold">
              {"물품명"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"productTitle"}
              id={"productTitle"}
              value={request.productTitle}
              onChange={setInput}
              required
            />
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
                    name="productAvailableAmount"
                    id="productAvailableAmount"
                    value={request.productAvailableAmount}
                    required
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label htmlFor="productEndDate" className="font-bold">
                    대여할 수량
                  </label>
                  <input
                    type="number"
                    className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                    name="productOutAmount"
                    id="productOutAmount"
                    value={request.productOutAmount}
                    onChange={setInput}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2 w-10/12">
          <div className="font-bold">대여 기간</div>
          <div className="flex justify-between">
            <div className="flex flex-col w-2/5">
              <label htmlFor="productStartDate" className="font-bold">
                대여시작일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="productStartDate"
                id="productStartDate"
                value={request.productStartDate}
                onChange={setInput}
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
                name="productEndDate"
                id="productEndDate"
                value={request.productEndDate}
                onChange={setInput}
                required
              />
            </div>
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

export default ProductCreate;
