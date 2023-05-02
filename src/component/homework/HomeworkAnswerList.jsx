import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { readHomeworkAnswerList } from "../../store/homework/homeworkSlice";

const HomeworkAnswerList = () => {
  // homeowrkId로 과제제출목록 불러오기
  // 이건 임시데이터
  const { homeworkAnswerList } = useSelector((state) => state.homework);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bootcampId, homeworkId } = useParams();

  useEffect(() => {
    dispatch(readHomeworkAnswerList(homeworkId));
  }, []);

  console.log(homeworkAnswerList);

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
            {homeworkAnswerList?.map((el, idx) => (
              <tr key={idx} className="w-full">
                <td className="p-1">{idx + 1}</td>
                <td
                  className="p-1 hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      `/homework/answer/${bootcampId}/${homeworkId}/${el.homeworkAnswerId}`
                    );
                  }}
                >
                  {el.studentName}
                </td>
                <td className="p-1">{el.homeworkAnswerUpdateAt}</td>
                {el.homeworkRating ? (
                  <td className="p-1">{el.homeworkAnswerScore}</td>
                ) : (
                  <td
                    className="bg-yellow-300 rounded-lg font-bold 
                 hover:bg-yellow-200 hover:cursor-pointer w-1/5"
                    onClick={() => {
                      navigate(
                        `/homework/answer/${bootcampId}/${homeworkId}/${el.homeworkAnswerId}`
                      );
                    }}
                  >
                    평가
                  </td>
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
