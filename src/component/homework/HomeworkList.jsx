const HomeworkList = () => {
  // 데이터 요청으로 나중에 받아오기 구현
  // 이건 임시데이터
  const data = [
    {
      homeworkId: 1,
      homeworkTitle: "별그리기",
      homeworkStartDate: "2023-04-16",
      homeworkEndDate: "2023-04-20",
      homeworkSkillSet: "JAVA",
      summitStudent: 7,
      totalStudent: 10,
    },
    {
      homeworkId: 2,
      homeworkTitle: "공룡만들기",
      homeworkStartDate: "2023-04-16",
      homeworkEndDate: "2023-04-20",
      homeworkSkillSet: "JPA-ORM",
      summitStudent: 2,
      totalStudent: 10,
    },
    {
      homeworkId: 3,
      homeworkTitle: "최소공배수 구하기",
      homeworkStartDate: "2023-04-16",
      homeworkEndDate: "2023-04-20",
      homeworkSkillSet: "SPRING",
      summitStudent: 4,
      totalStudent: 10,
    },
  ];

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">과제 목록</div>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>과제명</td>
              <td>시작일</td>
              <td>종료일</td>
              <td>스킬셋</td>
              <td>제출자 수</td>
              <td>총학생 수</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {data?.map((el) => (
              <tr key={el.homeworkId}>
                <td className="p-1">{el.homeworkTitle}</td>
                <td className="p-1">{el.homeworkStartDate}</td>
                <td className="p-1">{el.homeworkEndDate}</td>
                <td className="p-1">{el.homeworkSkillSet}</td>
                <td className="p-1">{el.summitStudent}</td>
                <td className="p-1">{el.totalStudent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeworkList;
