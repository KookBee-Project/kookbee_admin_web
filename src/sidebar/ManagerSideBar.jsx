const SideBar = () => {
  const classManage = ["강의 개설", "강의 내역 조회"];
  const studentManage = [
    "공지사항",
    "QnA",
    "출석 & 수강 관리",
    "휴가 관리",
    "물품 관리",
    "강의 평가",
  ];

  return (
    <div className="w-3/12 min-w-10 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <div className="text-3xl font-bold">강의 관리</div>
        <ul className="list-disc">
          {classManage?.map((el, idx) => (
            <li key={idx} className="list-inside">
              {el}
            </li>
          ))}
        </ul>
        <div className="text-3xl font-bold mt-10">학생 관리</div>
        <ul className="list-disc">
          {studentManage?.map((el, idx) => (
            <li key={idx} className="list-inside ml-5">
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
