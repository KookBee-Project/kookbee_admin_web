import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

const ProductList = () => {

  const [bootcampId, setBootcampId] = useState("");
  
  const param = useParams();

  useEffect(()=>{
    setBootcampId(param);
  },[])

  const data1 = [
    {
      productId: 1,
      productTitle: "노트북",
      productStartDate: "2023-04-16",
      receiver: "김진우",
      quantity: 1,
      status: "수령완료",
    },
    {
      productId: 2,
      productTitle: "자바의 정석",
      productStartDate: "2023-04-16",
      receiver: "김진우",
      quantity: 1,
      status: "수령완료",
    },
    {
      productId: 3,
      productTitle: "파이썬의 조정석",
      productStartDate: "2023-04-16",
      receiver: "김진우",
      quantity: 1,
      status: "수령예정",
    },
  ];
  const data2 = [
    {
      productId: 4,
      productTitle: "노트북",
      productStartDate: "2023-04-16",
      receiver: "김진우",
      quantity: 1,
      status: "반납완료",
    },
    {
      productId: 5,
      productTitle: "자바의 정석",
      productStartDate: "2023-04-16",
      receiver: "김진우",
      quantity: 1,
      status: "반납완료",
    },
    {
      productId: 6,
      productTitle: "파이썬의 조정석",
      productStartDate: "2023-04-16",
      receiver: "김진우",
      quantity: 1,
      status: "대여중",
    },
  ];

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">물품 목록</div>
        <br />
        <h>부트캠프 이름</h>
        <div className="text-center font-bold text-3xl">제공내역</div>
        <b></b>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>수령자</td>
              <td>제공물품</td>
              <td>수량</td>
              <td>대여일자</td>
              <td>상태</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {data1?.map((el) => (
              <tr key={el.productId}>
                <Link to={`/product/${bootcampId}/${el.productId}`}>
                  <td className="p-1">{el.receiver}</td>
                </Link>
                <td className="p-1">{el.productTitle}</td>
                <td className="p-1">{el.quantity}</td>
                <td className="p-1">{el.productStartDate}</td>
                <td className="p-1">{el.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center font-bold text-3xl">대여내역</div>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>대여자</td>
              <td>대여물품</td>
              <td>수량</td>
              <td>대여일자</td>
              <td>상태</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {data1?.map((el) => (
              <tr key={el.productId}>
                <Link to={`/product/${bootcampId}/${el.productId}`}>
                  <td className="p-1">{el.receiver}</td>
                </Link>
                <td className="p-1">{el.productTitle}</td>
                <td className="p-1">{el.quantity}</td>
                <td className="p-1">{el.productStartDate}</td>
                <td className="p-1">{el.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex w-10/12 justify-end">
          <Link to={`/product/insert/${param.bootcampId}`}>
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold 
        shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none right"
            >
              물품등록
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
