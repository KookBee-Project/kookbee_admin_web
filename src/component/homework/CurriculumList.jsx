import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { readTeacherCurriculumList } from "../../store/curriculum/curriculumSlice";

const CurriculumList = () => {
  // 강사의 userId로 클래스 정보 불러오기
  const { curriculumList, status, error } = useSelector(
    (state) => state.curriculum
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bootcampId = useParams().bootcampId;

  useEffect(() => {
    dispatch(readTeacherCurriculumList(bootcampId));
  }, []);

  console.log(curriculumList);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">진행중인 부트캠프</div>
        {curriculumList.length === 0 ? (
          "커리큘럼이 없군요"
        ) : (
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>커리큘럼명</td>
                <td>시작일</td>
                <td>종료일</td>
                <td>부트캠프</td>
              </tr>
            </thead>
            <tbody className="text-center border border-black">
              {curriculumList?.map((el) => (
                <tr key={el.curriculumId}>
                  <td
                    className="p-1 hover:cursor-pointer"
                    onClick={() => {
                      navigate(`/homework/${bootcampId}/${el.curriculumId}`);
                    }}
                  >
                    {el.curriculumName}
                  </td>
                  <td className="p-1">{el.curriculumStartDate}</td>
                  <td className="p-1">{el.curriculumEndDate}</td>
                  <td className="p-1">{el.bootcampTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CurriculumList;
