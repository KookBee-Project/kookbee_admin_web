import { Link } from "react-router-dom";

const DayOffApplyList = () => {
  const data = [
    {
      campusName: "서초캠퍼스",
      bootcampName: "빅데이터 부트캠프 17기",
      studentName: "정유철",
      dayOffStartDate: "2023-04-25",
      dayOffEndDate: "2023-04-27",
      dayOffStatus: "대기중", // 대기중, 승인, 반려
    },
    {
      campusName: "서초캠퍼스",
      bootcampName: "빅데이터 부트캠프 17기",
      studentName: "김한휘",
      dayOffStartDate: "2023-04-25",
      dayOffEndDate: "2023-04-27",
      dayOffStatus: "승인", // 대기중, 승인, 반려
    },
    {
      campusName: "서초캠퍼스",
      bootcampName: "빅데이터 부트캠프 17기",
      studentName: "정유철",
      dayOffStartDate: "2023-05-14",
      dayOffEndDate: "2023-05-17",
      dayOffStatus: "반려", // 대기중, 승인, 반려
    },
  ];

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
            {data?.map((el, idx) => (
              <tr key={idx}>
                <td className="p-1">{idx+1}</td>
                <Link to={`/dayoff/${el.studentName}`}>
                  <td className="p-1">{el.campusName}</td>
                </Link>
                <td className="p-1">{el.bootcampName}</td>
                <td className="p-1">{el.studentName}</td>
                <td className="p-1">{el.dayOffStartDate}</td>
                <td className="p-1">{el.dayOffEndDate}</td>
                <td className="p-1">{el.dayOffStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DayOffApplyList;
