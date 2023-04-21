import { Link } from "react-router-dom";

const BootcampListForNotification = () => {
  // 강사의 userId로 클래스 정보 불러오기
  // 이건 임시데이터
  const data = [
    {
      bootcampId: 1,
      bootcampTitle: "임시과정 15기",
      bootcampStartDate: "2023-04-16",
      bootcampEndDate: "2023-10-19",
      bootcampCampusName: "서초캠퍼스",
      bootcampStudentCounts: "25",
    },
    {
      bootcampId: 2,
      bootcampTitle: "임시과정 16기",
      bootcampStartDate: "2023-04-16",
      bootcampEndDate: "2023-10-19",
      bootcampCampusName: "서초캠퍼스",
      bootcampStudentCounts: "12",
    },
    {
      bootcampId: 3,
      bootcampTitle: "임시과정 17기",
      bootcampStartDate: "2023-04-16",
      bootcampEndDate: "2023-10-19",
      bootcampCampusName: "서초캠퍼스",
      bootcampStudentCounts: "4",
    },
  ];

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
              <td>수강생 수</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {data?.map((el) => (
              <tr key={el.bootcampId}>
                <Link to={`/notification/${el.bootcampId}`}>
                  <td className="p-1">{el.bootcampTitle}</td>
                </Link>
                <td className="p-1">{el.bootcampStartDate}</td>
                <td className="p-1">{el.bootcampEndDate}</td>
                <td className="p-1">{el.bootcampCampusName}</td>
                <td className="p-1">{el.bootcampStudentCounts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BootcampListForNotification;
