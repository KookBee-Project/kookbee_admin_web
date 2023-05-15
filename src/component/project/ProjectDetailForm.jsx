import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProjectDetail } from "../../store/project/projectSlice";

const ProjectDetailForm = () => {
  const { detailData, detailStatus } = useSelector((state) => state.project);
  const [imgCheck, setImgCheck] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const dataList = [
    { label: "프로젝트명", data: detailData?.projectTitle },
    { label: "팀명", data: detailData?.projectTeamName },
    { label: "팀장", data: detailData?.projectLeaderName },
    { label: "팀원", data: detailData?.userNameList },
  ];

  useEffect(() => {
    dispatch(getProjectDetail(projectId));
  }, []);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {detailStatus === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="flex">
            <div className="text-center font-bold text-3xl pr-5">
              {detailData?.projectTitle}
            </div>
          </div>
          <div className="flex flex-col mt-10 w-5/6">
            <div className="flex w-full">
              <div className="w-1/2">
                <span className="font-bold text-lg">프로젝트 분류{"\t"}</span>
                <span>{detailData?.projectSubject}</span>
              </div>
              <div className="w-1/2 text-end">
                <span className="font-bold text-lg">생성일{"\t"}</span>
                <span>{String(detailData?.createAt).split("T")[0]}</span>
              </div>
            </div>
            {dataList.map((el) => (
              <div key={el.label} className="mt-10">
                <span className="font-bold text-lg">{el.label + "\t"}</span>
                {el.label === "팀원" ? (
                  <span>
                    {el.data
                      ?.filter((el) => el !== detailData.projectLeaderName)
                      .join(" / ")}
                  </span>
                ) : (
                  <span>{el.data}</span>
                )}
              </div>
            ))}
            <div className="flex flex-col mt-10">
              <span className="font-bold text-lg">내용</span>
              <div className="border-2 border-yellow-300 min-h-10">
                {detailData?.projectDescription}
              </div>
            </div>
            {detailData?.projectStatus === "FINISHED" && (
              <div className="flex flex-col mt-10">
                <span className="font-bold text-lg">제출 링크</span>
                <Link to={detailData?.projectOutputLink}>
                  {detailData?.projectOutputLink}
                </Link>
                <span className="font-bold text-lg mt-5">제출 파일</span>
                {imgCheck && (
                  <Link
                    to={
                      "https://storage.googleapis.com/kookbee-test-strorage/" +
                      detailData?.projectOutputFileUUID
                    }
                  >
                    {"https://storage.googleapis.com/kookbee-test-strorage/" +
                      detailData?.projectOutputFileUUID}
                  </Link>
                )}
                {detailData?.projectOutputFileUUID && (
                  <img
                    src={
                      "https://storage.googleapis.com/kookbee-test-strorage/" +
                      detailData?.projectOutputFileUUID
                    }
                    className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-40 h-40 font-semibold"
                    onError={() => {
                      setImgCheck(true);
                    }}
                    hidden={imgCheck}
                  />
                )}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className="px-5 py-3 my-3 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
              onClick={() => {
                navigate(-1);
              }}
            >
              목록으로
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailForm;
