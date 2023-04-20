import { Link } from "react-router-dom";

const ManagerSideBar = () => {
  const classManage = [
    { value: "강의 개설", link: "/bootcamp/open" },
    { value: "강의 내역 조회", link: "/bootcamp" },
  ];
  const studentManage = [
    { value: "공지사항", link: "" },
    { value: "QnA", link: "" },
    { value: "출석 & 수강 관리", link: "" },
    { value: "휴가 관리", link: "" },
    { value: "물품 관리", link: "/product" },
    { value: "강의 평가", link: "" },
  ];

  return (
    <div className="w-3/12 min-w-10 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <div className="text-3xl font-bold">강의 관리</div>
        <ul className="list-disc">
          {classManage?.map((el, idx) => (
            <Link to={el.link} key={idx}>
              <li className="list-inside">{el.value}</li>
            </Link>
          ))}
        </ul>
        <div className="text-3xl font-bold mt-10">학생 관리</div>
        <ul className="list-disc">
          {studentManage?.map((el, idx) => (
            <Link to={el.link} key={idx}>
              <li className="list-inside ml-5">{el.value}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManagerSideBar;
