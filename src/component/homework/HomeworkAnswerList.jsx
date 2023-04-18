import { Link } from "react-router-dom";

const HomeworkAnswerList = () => {
  // homeowrkId로 과제제출목록 불러오기
  // 이건 임시데이터
  const ids = {
    bootcampId: "1",
    homeworkId: "1",
  };
  const data = [
    {
      homeworkAnswerName: "정유철",
      homeworkSummitAt: "2023-04-17",
      homeworkRating: "",
    },
    {
      homeworkAnswerName: "김진우",
      homeworkSummitAt: "2023-04-17",
      homeworkRating: "상",
    },
    {
      homeworkAnswerName: "김한휘",
      homeworkSummitAt: "2023-04-18",
      homeworkRating: "상",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center font-bold text-xl mt-5">과제 제출 현황</div>
      <div className="flex w-full justify-center">
        <table className="my-5 w-4/5">
          <thead className="font-bold text-center">
            <tr className="w-full">
              <td>번호</td>
              <td>제출자명</td>
              <td>제출일</td>
              <td>평가여부</td>
            </tr>
          </thead>
          <tbody className="text-center border border-black">
            {data?.map((el, idx) => (
              <tr key={idx} className="w-full">
                <td className="p-1">{idx + 1}</td>
                <Link
                  to={`/homework/${ids.bootcampId}/${ids.homeworkId}/${
                    idx + 1
                  }`}
                >
                  <td className="p-1">{el.homeworkAnswerName}</td>
                </Link>
                <td className="p-1">{el.homeworkSummitAt}</td>
                {el.homeworkRating ? (
                  <td className="p-1">{el.homeworkRating}</td>
                ) : (
                  <Link
                    to={`/homework/${ids.bootcampId}/${ids.homeworkId}/${
                      idx + 1
                    }`}
                  >
                    <button
                      className="bg-yellow-300 border rounded-lg text-base font-bold 
                 hover:bg-yellow-200 p-0.5"
                    >
                      평가
                    </button>
                  </Link>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default HomeworkAnswerList;
