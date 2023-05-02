import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct, getProductTitle } from "../../store/product/productSlice";

const ProductList = () => {
  const { productTitle, productData } = useSelector((state) => state.product);

  const param = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductTitle(param.bootcampId));
    dispatch(getProduct(param.bootcampId));
  }, []);

  const today = new Date();

  const RentalStatus = (productRentalStartDate, productRentalEndDate) => {
    if (new Date(productRentalStartDate) > today) return "대여 예정";
    if (new Date(productRentalStartDate) < today && new Date(productRentalEndDate) > today)
      return "대여 중";
    if (new Date(productRentalEndDate) < today) return "반납 완료";
  };

  const OfferStatus = (productRentalStartDate) => {
    if (new Date(productRentalStartDate) > today) return "제공 예정";
    if (new Date(productRentalStartDate) < today) return "제공 완료";
  };

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">물품 목록</div>
        <br />
        <h className="mb-5">{productTitle}</h>
        <div className="text-center font-bold text-3xl">제공내역</div>
        <b></b>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>수령자</td>
              <td>제공물품</td>
              <td>수량</td>
              <td>제공일</td>
              <td>상태</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {productData?.map(
              (el) =>
                el.productType === "OFFER" && (
                  <tr>
                    <td className="p-1">{el.studentName}</td>
                    <td className="p-1">{el.productItemName}</td>
                    <td className="p-1">{el.productCount}</td>
                    <td className="p-1">{el.productRentalStartDate}</td>
                    <td className="p-1">
                      {OfferStatus(el.productRentalStartDate)}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <div className="text-center font-bold text-3xl">대여내역</div>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>대여자</td>
              <td>대여물품</td>
              <td>수량</td>
              <td>대여일</td>
              <td>반납일</td>
              <td>상태</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {productData?.map(
              (el) =>
                el.productType === "RENTAL" && (
                  <tr>
                    <td className="p-1">{el.studentName}</td>
                    <td className="p-1">{el.productItemName}</td>
                    <td className="p-1">{el.productCount}</td>
                    <td className="p-1">{el.productRentalStartDate}</td>
                    <td className="p-1">{el.productRentalEndDate}</td>
                    <td className="p-1">
                      {RentalStatus(
                        el.productRentalStartDate,
                        el.productRentalEndDate
                      )}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <div className="flex w-10/12 justify-end">
          <Link to={`/product/insert/${param.bootcampId}`}>
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold 
        shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none right"
            >
              추가 등록
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
