import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { readBootcampListByTeacher } from "../../store/bootcamp/bootcampSlice";

const BootcampList = () => {
  // 강사의 userId로 클래스 정보 불러오기
  const { data, status, error } = useSelector((state) => state.bootCamp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readBootcampListByTeacher());
  }, []);

  console.log(data);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">진행중인 부트캠프</div>
        {data.length === 0 ? (
          "부트캠프가 없군요"
        ) : (
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>훈련과정명</td>
                <td>시작일</td>
                <td>종료일</td>
                <td>캠퍼스</td>
                <td>수강생 수</td>
              </tr>
            </thead>
            <tbody className="text-center border border-black">
              {data?.map((el) => (
                <tr key={el.bootcampId}>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() => {
                      navigate(`/homework/${el.bootcampId}`);
                    }}
                  >
                    {el.bootcampTitle}
                  </td>

                  <td className="p-1">{el.bootcampStartDate}</td>
                  <td className="p-1">{el.bootcampEndDate}</td>
                  <td className="p-1">{el.campusName}</td>
                  <td className="p-1">{el.studentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BootcampList;
