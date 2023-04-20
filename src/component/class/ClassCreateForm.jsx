import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBootcamp } from "../../store/bootcamp/bootcampSlice";
import { useNavigate } from "react-router";
import { getManagerCampus } from "../../store/campus/campusSlice";

const ClassCreateForm = () => {
  const { data, status, error } = useSelector((state) => state.bootCamp);
  const { managerCampus, companyId } = useSelector((state) => state.campus);
  const [request, setRequest] = useState({
    companyId: 0,
    campusId: 0,
    bootcampTitle: "",
    bootcampDescription: "",
    bootcampStartDate: "",
    bootcampEndDate: "",
    bootcampStatus: "PROCEEDING",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getManagerCampus());
  }, []);

  useEffect(() => {
    setRequest({ ...request, companyId: companyId });
  }, [companyId]);

  const classNamenDes = [
    {
      label: "훈련과정명",
      name: "bootcampTitle",
      value: request.bootcampTitle,
    },
    {
      label: "강의 설명",
      name: "bootcampDescription",
      value: request.bootcampDescription,
    },
  ];

  const setInput = (e) => {
    const { name, value } = e.target;
    if (name === "bootcampStartDate") {
      new Date(value) > new Date(request.bootcampEndDate)
        ? alert("시작일은 종료일보다 이전이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else if (name === "bootcampEndDate") {
      new Date(request.bootcampStartDate) > new Date(value)
        ? alert("종료일은 시작일보다 이후이어야 합니다.")
        : setRequest({ ...request, [name]: value });
    } else setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (request.campusId == 0) alert("캠퍼스를 선택해주세요.");
    else {
      console.log(request);
      dispatch(createBootcamp(request));
      if (status === "successed") {
        alert("강의 등록에 성공하였습니다.");
        navigate("/bootcamp");
      } else alert("강의 등록에 실패하였습니다.");
    }
  };

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">강의 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <select
          className="w-1/3 text-center border border-gray-500 rounded-md text-lg p-1"
          onChange={setInput}
          name="campusId"
          required
        >
          <option value={Number(0)}>--캠퍼스 선택--</option>
          {managerCampus?.map((el, idx) => (
            <option key={idx} value={el.campusId}>
              {el.campusName}
            </option>
          ))}
        </select>
        {classNamenDes?.map((el, idx) => (
          <div key={idx} className="flex flex-col items-center my-5 w-full">
            <div className="flex flex-col w-10/12">
              <label htmlFor="bootcampTitle" className="font-bold">
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
              <label htmlFor="bootcampTitle" className="font-bold">
                시작일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="bootcampStartDate"
                id="bootcampStartDate"
                value={request.bootcampStartDate}
                onChange={setInput}
                required
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label htmlFor="bootcampTitle" className="font-bold">
                종료일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="bootcampEndDate"
                id="bootcampEndDate"
                value={request.bootcampEndDate}
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
