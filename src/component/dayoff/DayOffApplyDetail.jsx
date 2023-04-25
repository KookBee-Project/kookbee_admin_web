import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDayOffDetail, updateDayOffStasus } from "../../store/dayoff/dayOffSlice";

const DayOffApplyDetail = () => {
  const { data, status, error } = useSelector((state) => state.dayOff);
  const [request, setRequest] = useState({
    userType: "",
    dayOffManagerStatus: "",
    dayOffTeacherStatus: "",
  });

  const dayOffId = useParams().dayOffId;
  console.log(dayOffId);

  useEffect(() => {
    dispatch(getDayOffDetail(dayOffId));
  }, []);

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    if (
      request.homeworkRating === "" ||
      request.homeworkRating === "-휴가 상태-"
    ) {
      alert("휴가 상태를 결정해주세요!");
    } else {
      dispatch(updateDayOffStasus(request));
      if (status === "successed") {
        alert("휴가 상태를 반영했습니다.");
        navigate("/dayoff");
      } else alert("실패하였습니다. 다시 확인부탁드립니다.");
    }
  };

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">
        {"휴가 신청 정보"}
      </div>
      <div className="flex flex-col items-center my-5 w-full">
        <div className="flex flex-col w-10/12 font-bold">
          캠퍼스명
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/2 text-center font-semibold">
            {data.campusName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          부트캠프명
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/2 text-center font-semibold">
            {data.bootcampName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          신청자명
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/4 text-center font-semibold">
            {data.studentName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          휴가기간
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              시작일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.dayOffStartDate}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              종료일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.dayOffEndDate}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              사용일수
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-2/5 text-center font-semibold">
                {data.useDays}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          사유
          <div className="border-2 border-yellow-300 rounded-xl p-2 w-full h-40 font-semibold">
            {data.dayOffReason}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          승인상태
          <form onSubmit={onSubmit}>
            <div className="flex w-full">
              <div className="mt-2 w-1/2">
                매니저님 승인
                {(data.userType === "MANAGER") &
                (data.dayOffStatus === "PENDING") ? (
                  <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                    <select
                      id="dayOffManagerStatus"
                      name="dayOffManagerStatus"
                      className="text-base w-full"
                      onChange={setInput}
                    >
                      <option>-휴가 상태-</option>
                      <option>승인</option>
                      <option>반려</option>
                    </select>
                  </div>
                ) : (
                  <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                    {data.dayOffManagerStatus}
                  </div>
                )}
              </div>
              <div className="mt-2 w-1/2">
                강사님 승인
                {(data.userType === "TEACHER") &
                (data.dayOffStatus === "PENDING") ? (
                  <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                    <select
                      id="dayOffTeacherStatus"
                      name="dayOffTeacherStatus"
                      className="text-base w-full"
                      onChange={setInput}
                    >
                      <option>-휴가 상태-</option>
                      <option>승인</option>
                      <option>반려</option>
                    </select>
                  </div>
                ) : (
                  <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                    {data.dayOffTeacherStatus}
                  </div>
                )}
              </div>
              <div className="mt-2 w-1/2">
                최종 승인
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {data.dayOffStatus}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none w-1/3"
              >
                휴가 상태 반영
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DayOffApplyDetail;

// 1. 최종승인 상태를 확인
// 2. userType를 확인
// 3. 버튼누르면 폼 쏘도록
