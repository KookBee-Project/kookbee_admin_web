import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserType } from "../../store/admin/adminSlice";
import { getDayOffList, getDayOffListForManager, getDayOffListForTeacher } from "../../store/dayoff/dayOffSlice";

const DayOffApplyList = () => {
  const { listData, status, error } = useSelector((state) => state.dayOff);
  const userType = useSelector((state) => state.admin.data);
  console.log(userType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserType());
  }, []);

  useEffect(() => {
    if (userType == "MANAGER") {
      dispatch(getDayOffListForManager());
    } else if (userType == "TEACHER") {
      dispatch(getDayOffListForTeacher());
    }
  }, [userType]);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">요청받은 휴가목록</div>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>번호</td>
              <td>캠퍼스명</td>
              <td>훈련과정명</td>
              <td>이름</td>
              <td>시작일</td>
              <td>종료일</td>
              <td>상태</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {listData?.map((el, idx) => (
              <tr key={idx}>
                <td className="p-1">{idx + 1}</td>
                <td className="p-1">{el.campusName}</td>
                <td className="p-1">{el.bootcampName}</td>
                <td className="p-1">{el.studentName}</td>
                <td className="p-1">{el.dayOffStartDate}</td>
                <td className="p-1">{el.dayOffEndDate}</td>
                {(el.dayOffManagerStatus == "PENDING" ||
                  el.dayOffTeacherStatus == "PENDING") && (
                  <td className="p-1">
                    <Link to={`/dayoff/${el.dayOffId}`}>
                      <button className="p-1 pl-10 pr-10 bg-yellow-300 rounded-lg w-13 font-semibold">
                        대기중
                      </button>
                    </Link>
                  </td>
                )}
                {(el.dayOffManagerStatus == "APPROVAL" ||
                  el.dayOffTeacherStatus == "APPROVAL") && (
                  <td className="p-1">
                    <Link to={`/dayoff/${el.dayOffId}`}>
                      <button className="p-1 pl-10 pr-10 bg-yellow-300 rounded-lg w-13 font-semibold">
                        승인완료
                      </button>
                    </Link>
                  </td>
                )}
                {el.dayOffManagerStatus == "REJECT" ||
                  (el.dayOffTeacherStatus == "REJECT" && (
                    <td className="p-1">
                      <Link to={`/dayoff/${el.dayOffId}`}>
                        <button className="p-1 pl-10 pr-10 bg-yellow-300 rounded-lg w-13 font-semibold">
                          반려
                        </button>
                      </Link>
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DayOffApplyList;
