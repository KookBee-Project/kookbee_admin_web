import { useState } from "react";

const ClassCreateForm = () => {
  const [request, setRequest] = useState({
    classTitle: "",
    classDescription: "",
    classStartDate: "",
    classEndDate: "",
  });

  const classNamenDes = [
    { label: "훈련과정명", name: "classTitle", value: request.classTitle },
    {
      label: "강의 설명",
      name: "classDescription",
      value: request.classDescription,
    },
  ];

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (new Date(request.classStartDate) > new Date(request.classEndDate)) {
      alert("시작일은 종료일보다 이전이어야 합니다.");
    } else {
      console.log(request);
    }
  };
  return (
    <div className="flex flex-col justify-center w-1/2 h-5/6 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl">강의 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        {classNamenDes?.map((el) => (
          <div className="flex flex-col items-center my-5 w-full">
            <div className="flex flex-col w-10/12">
              <label htmlFor="classTitle" className="font-bold">
                {el.label}
              </label>
              <input
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                type="text"
                name={el.name}
                id={el.name}
                value={el.value}
                onChange={setInput}
                required
              />
            </div>
          </div>
        ))}
        <div className="flex flex-col my-5 w-10/12">
          <div className="font-bold">강의 기간</div>
          <div className="flex justify-between">
            <div className="flex flex-col w-2/5">
              <label htmlFor="classTitle" className="font-bold">
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
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label htmlFor="classTitle" className="font-bold">
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
              />
            </div>
          </div>
        </div>
        <button className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none">
          등록하기
        </button>
      </form>
    </div>
  );
};

export default ClassCreateForm;
