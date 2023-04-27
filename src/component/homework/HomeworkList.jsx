import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { readHomeworkList } from "../../store/homework/homeworkSlice";

const HomeworkList = () => {
  // 부트캠프Id로 과제목록 불러오기
  const { homeworkList, status, error } = useSelector(
    (state) => state.homework
  );
  // 이건 임시데이터
  const dispatch = useDispatch();
  const { bootcampId, curriculumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readHomeworkList(curriculumId));
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">과제 목록</div>
        {homeworkList.length === 0 ? (
          "등록된 과제가 없군요"
        ) : (
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
              {homeworkList?.map((el) => (
                <tr key={el.homeworkId}>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() => {
                      navigate(
                        `/homework/${bootcampId}/${curriculumId}/${el.homeworkId}`
                      );
                    }}
                  >
                    {el.homeworkQuestionTitle}
                  </td>
                  <td className="p-1">{el.homeworkQuestionStartDate}</td>
                  <td className="p-1">{el.homeworkQuestionEndDate}</td>
                  <td className="p-1">{el.skillSet.skillSetName}</td>
                  <td className="p-1">{el.summitStudent}</td>
                  <td className="p-1">{el.totalStudent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="flex w-10/12 justify-end">
          <button
            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold 
        shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none right"
            onClick={() => {
              navigate("/homework/open", { state: curriculumId });
            }}
          >
            과제등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeworkList;
