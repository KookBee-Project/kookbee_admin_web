import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createHomework } from "../../store/homework/homeworkSlice";

const HomeworkCreate = () => {
  const { data, status, error } = useSelector((state) => state.homework);
  const [request, setRequest] = useState({
    homeworkTitle: "",
    homeworkContent: "",
    homeworkStartDate: "",
    homeworkEndDate: "",
  });

  const classNamenDes = [
    { label: "훈련과정명", name: "classTitle", value: request.classTitle },
    {
      label: "강의 설명",
      name: "classDescription",
      value: request.classDescription,
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInput = (e) => {
    const { name, value } = e.target;
    if (name === "homeworkStartDate") {
      new Date(value) > new Date(request.homeworkEndDate)
        ? alert("시작일은 종료일보다 이전이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "homeworkEndDate") {
      new Date(request.homeworkStartDate) > new Date(value)
        ? alert("종료일은 시작일보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    dispatch(createHomework(request));
    if (status === "successed") {
      alert("과제 등록에 성공하였습니다.");
      navigate("/homework");
    } else alert("과제 등록에 실패하였습니다.");
  };
  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">과제 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <label htmlFor="homeworkTitle" className="font-bold">
              {"과제명"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"homeworkTitle"}
              id={"homeworkTitle"}
              value={request.homeworkTitle}
              onChange={setInput}
              required
            />
            <label htmlFor="homeworkContent" className="font-bold mt-3">
              {"내용"}
            </label>
            <textarea
              className="resize-none border-2 border-gray-400 p-1 rounded-lg text-xl h-40"
              type="textarea"
              name={"homeworkContent"}
              id={"homeworkContent"}
              value={request.homeworkContent}
              onChange={setInput}
              required
            />
          </div>
        </div>

        <div className="flex flex-col my-2 w-10/12">
          <div className="font-bold">강의 기간</div>
          <div className="flex justify-between">
            <div className="flex flex-col w-2/5">
              <label htmlFor="homeworkStartDate" className="font-bold">
                시작일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="homeworkStartDate"
                id="homeworkStartDate"
                value={request.homeworkStartDate}
                onChange={setInput}
                required
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label htmlFor="homeworkEndDate" className="font-bold">
                종료일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="homeworkEndDate"
                id="homeworkEndDate"
                value={request.homeworkEndDate}
                onChange={setInput}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-7">
          <button
            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeworkCreate;
