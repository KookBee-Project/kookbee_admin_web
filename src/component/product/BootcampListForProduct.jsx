import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBootcampList } from "../../store/product/productSlice";

const BootcampListForProduct = () => {
  const { bootcampList } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBootcampList());
    console.log(bootcampList.bootcampTitle);
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">진행중인 부트캠프</div>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>훈련과정명</td>
              <td>시작일</td>
              <td>종료일</td>
              <td>캠퍼스</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {bootcampList?.map((el) => (
              <tr key={el.bootcampList}>
                <Link to={`/product/${el.bootcampId}`}>
                  <td className="p-1">{el.bootcampTitle}</td>
                </Link>
                <td className="p-1">{el.bootcampStartDate}</td>
                <td className="p-1">{el.bootcampEndDate}</td>
                <td className="p-1">{el.campusName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex w-10/12 justify-center">
          <Link to={"/product/itemlist"}>
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold 
        shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none right"
            >
              물품관리
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BootcampListForProduct;
