import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readBootcampList } from "../../store/bootcamp/bootcampSlice";
import { useNavigate } from "react-router";

const ClassHistoryList = () => {
  // 데이터 요청으로 나중에 받아오기 구현
  const { data, status, error } = useSelector((state) => state.bootCamp);
  // 이건 임시데이터

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readBootcampList());
  }, []);

  console.log(data);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">강의 내역</div>
        {data.length === 0 ? (
          <div>강의 정보가 없단다</div>
        ) : (
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
                      navigate(`/bootcamp/edit/${el.bootcampId}`);
                    }}
                  >
                    {el.bootcampTitle}
                  </td>
                  <td className="p-1">{el.bootcampStartDate}</td>
                  <td className="p-1">{el.bootcampEndDate}</td>
                  <td className="p-1">{el.campusName}</td>
                  <td className="p-1">{el.bootcampEnterCode}</td>
                  <td className="p-1">
                    {el.curriculumList.length === 0 && (
                      <button
                        className="font-bold text-xs border rounded-md p-1 bg-sky-200 hover:bg-sky-100"
                        onClick={() => {
                          navigate(`/curriculum/create/${el.bootcampId}`, {
                            state: {
                              bootcampStartDate: el.bootcampStartDate,
                              bootcampEndDate: el.bootcampEndDate,
                              bootcampId: el.bootcampId,
                            },
                          });
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
        )}
      </div>
    </div>
  );
};

export default ClassHistoryList;
