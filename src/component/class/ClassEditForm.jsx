import { useEffect, useState } from "react";
import ClassEditCurriculumForm from "./ClassEditCurriculumFrom";
import { useDispatch, useSelector } from "react-redux";
import { readClassDetail } from "../../store/class/classSlice";
import { readCurriculum } from "../../store/curriculum/curriculumSlice";

const ClassEditForm = () => {
  // const { data, status, error } = useSelector((state) => state.bootCamp);
  // const curriculumData = useSelector((state) => state.curriculum.data);
  const [request, setRequest] = useState({
    classTitle: "임시 훈련과정명",
    classDescription: "임시 설명이다",
    classStartDate: "2023-05-27",
    classEndDate: "2023-12-27",
    classEnterCode: "1mSeeC0d2",
  });
  const [curriculumReq, setCurriculumReq] = useState([
    {
      curriculumStartDate: "2023-04-20",
      curriculumEndDate: "2023-05-20",
      skillSetName: "JAVA",
      teacherId: "tjdanqkr",
    },
    {
      curriculumStartDate: "2023-05-21",
      curriculumEndDate: "2023-10-20",
      skillSetName: "ML",
      teacherId: "tjdanqkr",
    },
    {
      curriculumStartDate: "2023-10-21",
      curriculumEndDate: "2023-12-20",
      skillSetName: "Python",
      teacherId: "tjdanqkr",
    },
  ]);

  const [mode, setMode] = useState("disabled");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readClassDetail());
    dispatch(readCurriculum());
  }, []);

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
            value={request.classTitle}
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
            value={request.classDescription}
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
                value={request.classStartDate}
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
                value={request.classEndDate}
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
        />
        <div className="flex flex-col my-5 w-10/12">
          <label className="font-bold">강의 코드</label>
          <input
            type="text"
            className="text-center border-2 border-gray-400 text-gray-400 p-1 rounded-lg text-xl"
            value={request.classEnterCode}
            onChange={setInput}
            disabled
          />
        </div>
        <button
          type={mode === "disabled" ? "button" : "submit"}
          onClick={mode === "disabled" ? modeChange : null}
          className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
        >
          {mode === "disabled" ? "수정하기" : "저장하기"}
        </button>
      </form>
    </div>
  );
};

export default ClassEditForm;
