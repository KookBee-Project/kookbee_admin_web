import { useEffect, useState } from "react";
import ClassEditCurriculumForm from "./ClassEditCurriculumFrom";
import { useDispatch, useSelector } from "react-redux";
import { readBootcampDetail } from "../../store/bootcamp/bootcampSlice";
import { readCurriculum } from "../../store/curriculum/curriculumSlice";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const ClassEditForm = () => {
  const { detailData, status, error } = useSelector((state) => state.bootCamp);
  const curriculumData = useSelector((state) => state.curriculum.data);
  const [request, setRequest] = useState({});
  const [curriculumReq, setCurriculumReq] = useState([]);

  const [mode, setMode] = useState("disabled");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    dispatch(readBootcampDetail(param.bootcampId));
    dispatch(readCurriculum(param.bootcampId));
  }, []);

  useEffect(() => {
    setRequest(detailData);
    setCurriculumReq(curriculumData);
  }, [detailData, curriculumData]);

  // 나중에 시간있으면 여기 변경 시켰을 때 커리큘럼 날짜랑 비교해보기
  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "classStartDate") {
      new Date(value) > new Date(request.classEndDate)
        ? alert("시작일은 종료일보다 이전이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "classEndDate") {
      new Date(request.classStartDate) > new Date(value)
        ? alert("종료일은 시작일보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else setRequest({ ...request, [name]: value });
  };

  const modeChange = (e) => {
    e.preventDefault();
    mode === "disabled" ? setMode("") : setMode("disabled");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    console.log(curriculumReq);
    alert("수정사항이 저장되었습니다");
    setMode("disabled");
  };

  const delBootCamp = () => {
    // 클래스 id랑 status보내주기
    // const delReq = {
    //   // bootcampId:,
    //   eStatus: DELETED,
    // };
    // dispatch(deleteClassStatus(delReq));
    if (window.confirm("정말 삭제하시겠습니까?")) {
      navigate("/bootcamp");
    }
  };

  return (
    <div className="table w-1/2 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">강의 수정</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col my-5 w-10/12">
          <label htmlFor="classTitle" className="font-bold">
            훈련과정명
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 p-1 rounded-lg text-xl"
            name="classTitle"
            id="classTitle"
            value={request.bootcampTitle}
            onChange={setInput}
            required
            disabled={mode}
          />
        </div>
        <div className="flex flex-col my-5 w-10/12">
          <label htmlFor="classDescription" className="font-bold">
            강의 설명
          </label>
          <textarea
            className="resize-none border-2 border-gray-400 p-1 rounded-lg text-xl"
            name="classDescription"
            id="classDescription"
            value={request.bootcampDescription}
            onChange={setInput}
            required
            disabled={mode}
          />
        </div>
        <div className="w-10/12 my-5">
          <div className="font-bold mb-2">강의 기간</div>
          <div className="flex justify-between">
            <div className="flex flex-col w-2/5">
              <label htmlFor="classStartDate" className="font-bold">
                시작일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="classStartDate"
                id="classStartDate"
                value={request.bootcampStartDate}
                onChange={setInput}
                required
                disabled={mode}
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label htmlFor="classEndDate" className="font-bold">
                종료일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="classEndDate"
                id="classEndDate"
                value={request.bootcampEndDate}
                onChange={setInput}
                required
                disabled={mode}
              />
            </div>
          </div>
        </div>
        <ClassEditCurriculumForm
          mode={mode}
          curriculumReq={curriculumReq}
          setCurriculumReq={setCurriculumReq}
          bootcampStartDate={request.bootcampStartDate}
          bootcampEndDate={request.bootcampEndDate}
        />
        <div className="flex flex-col my-5 w-10/12">
          <label className="font-bold">강의 코드</label>
          <input
            type="text"
            className="text-center border-2 border-gray-400 text-gray-400 p-1 rounded-lg text-xl"
            value={request.bootcampEnterCode}
            onChange={setInput}
            disabled
          />
        </div>
        <div>
          <button
            type={mode === "disabled" ? "button" : "submit"}
            onClick={mode === "disabled" ? modeChange : null}
            className="px-5 py-3 my-5 mx-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
          >
            {mode === "disabled" ? "수정하기" : "저장하기"}
          </button>
          <button
            type="button"
            onClick={delBootCamp}
            className="px-5 py-3 my-5 mx-5 bg-red-500 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-red-300 focus:shadow-none"
          >
            삭제하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassEditForm;
