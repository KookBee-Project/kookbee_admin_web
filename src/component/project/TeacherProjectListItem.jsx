import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSubmitProjectList } from "../../store/project/projectSlice";
import { useEffect } from "react";

const TeacherProjectListItem = () => {
  const { data, status, error } = useSelector((state) => state.project);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bootcampId } = useParams();

  useEffect(() => {
    dispatch(getSubmitProjectList(bootcampId));
  }, []);

  console.log(data.length);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center font-bold text-3xl">제출된 프로젝트</div>
          {data?.length == 0 ? (
            <div>아직 제출된 프로젝트가 없네요...</div>
          ) : (
            <table className="my-10">
              <thead className="font-bold text-center">
                <tr>
                  <td>프로젝트명</td>
                  <td>팀명</td>
                  <td>팀장/팀원 수</td>
                  <td>분류</td>
                  <td>생성일</td>
                </tr>
              </thead>
              <tbody className="text-center border border-black">
                {data?.map((el, idx) => (
                  <tr key={idx}>
                    <td
                      className="p-1 hover:cursor-pointer"
                      onClick={() => {
                        navigate(`/project/detail/${el.id}`);
                      }}
                    >
                      {el.projectTitle}
                    </td>
                    <td className="p-1">{el.projectTeamName}</td>
                    <td className="p-1">
                      {el.projectLeaderName}/{el.countUsers}
                    </td>
                    <td className="p-1">{el.projectSubject}</td>
                    <td className="p-1">{el.createAt.split("T")[0]}</td>
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
export default TeacherProjectListItem;
