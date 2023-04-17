import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readClassList } from "../../store/class/classSlice";
import { useNavigate } from "react-router";

const ClassHistoryList = () => {
  // 데이터 요청으로 나중에 받아오기 구현
  // const { data, status, error } = useSelector((state) => state.bootCamp);
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
      curriculum: "",
    },
    {
      classTitle: "임시과정 9기",
      classStartDate: "2023-04-16",
      classEndDate: "2023-10-19",
      classCampusName: "지밸리캠퍼스",
      classEnterCode: "asdff2$",
      curriculum: "",
    },
    {
      classTitle: "임시과정 26기",
      classStartDate: "2023-04-16",
      classEndDate: "2023-10-19",
      classCampusName: "서초캠퍼스",
      classEnterCode: "fa&dS%65",
      curriculum: "O",
    },
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
      curriculum: "",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readClassList());
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">강의 내역</div>
        <table className="my-10">
          <thead className="font-bold text-center">
            <tr>
              <td>훈련과정명</td>
              <td>시작일</td>
              <td>종료일</td>
              <td>캠퍼스</td>
              <td>강의 코드</td>
              <td>커리큘럼</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {data?.map((el, idx) => (
              <tr key={idx}>
                <td
                  className="p-1 hover:cursor-pointer"
                  onClick={() => {
                    navigate("/class/edit");
                  }}
                >
                  {el.classTitle}
                </td>
                <td className="p-1">{el.classStartDate}</td>
                <td className="p-1">{el.classEndDate}</td>
                <td className="p-1">{el.classCampusName}</td>
                <td className="p-1">{el.classEnterCode}</td>
                <td className="p-1">
                  {el.curriculum == "" && (
                    <button
                      className="font-bold text-xs border rounded-md p-1 bg-sky-200 hover:bg-sky-100"
                      onClick={() => {
                        navigate("/curriculum/create");
                      }}
                    >
                      등록하기
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassHistoryList;
