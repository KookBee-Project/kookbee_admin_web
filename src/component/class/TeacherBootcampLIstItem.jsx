import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { readBootcampListByTeacher } from "../../store/bootcamp/bootcampSlice";

const TeacherBootcampListItem = () => {
  const { data, status, error } = useSelector((state) => state.bootCamp);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readBootcampListByTeacher());
  }, []);

  console.log(data.length);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center font-bold text-3xl">강의 내역</div>
          {data?.length == 0 ? (
            <div>강의 정보가 없단다</div>
          ) : (
            <table className="my-10">
              <thead className="font-bold text-center">
                <tr>
                  <td>훈련과정명</td>
                  <td>시작일</td>
                  <td>종료일</td>
                  <td>캠퍼스</td>
                </tr>
              </thead>
              <tbody className="text-center border border-black">
                {data?.map((el, idx) => (
                  <tr key={idx}>
                    <td
                      className="p-1 hover:cursor-pointer"
                      onClick={() => {
                        navigate(`/project/${el.bootcampId}`);
                      }}
                    >
                      {el.bootcampTitle}
                    </td>
                    <td className="p-1">{el.bootcampStartDate}</td>
                    <td className="p-1">{el.bootcampEndDate}</td>
                    <td className="p-1">{el.campusName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherBootcampListItem;
