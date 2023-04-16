const ClassHistoryList = () => {
  // 데이터 요청으로 나중에 받아오기 구현
  // 이건 임시데이터
  const data = [
    {
      classTitle: "임시과정 15기",
      classStartDate: "2023-04-16",
      classEndDate: "2023-10-19",
      classCampusName: "서초캠퍼스",
      classEnterCode: "as34r3s6GgSY",
      curriculum: "O",
    },
    {
      classTitle: "임시과정 5기",
      classStartDate: "2023-04-16",
      classEndDate: "2023-10-19",
      classCampusName: "금천캠퍼스",
      classEnterCode: "dasf",
      curriculum: "X",
    },
    {
      classTitle: "임시과정 9기",
      classStartDate: "2023-04-16",
      classEndDate: "2023-10-19",
      classCampusName: "지밸리캠퍼스",
      classEnterCode: "asdff2$",
      curriculum: "X",
    },
    {
      classTitle: "임시과정 26기",
      classStartDate: "2023-04-16",
      classEndDate: "2023-10-19",
      classCampusName: "서초캠퍼스",
      classEnterCode: "fa&dS%65",
      curriculum: "O",
    },
  ];

  return (
    <div className="flex flex-col justify-center w-1/2 h-5/6 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <table className="h-5/6">
        <thead>
          <tr>
            <td>훈련과정명</td>
            <td>시작일</td>
            <td>종료일</td>
            <td>캠퍼스</td>
            <td>강의 코드</td>
            <td>커리큘럼</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => (
            <tr>
              <td>{el.classTitle}</td>
              <td>{el.classStartDate}</td>
              <td>{el.classEndDate}</td>
              <td>{el.classCampusName}</td>
              <td>{el.classEnterCode}</td>
              <td>{el.curriculum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassHistoryList;