import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createCurriculum } from "../../store/curriculum/curriculumSlice";

const CurriculumCreateForm = () => {
  const { status, error } = useSelector((state) => state.curriculum);

  const [curriculumReq, setCurriculumReq] = useState([
    {
      curriculumStartDate: "",
      curriculumEndDate: "",
      skillSetName: "",
      teacherId: "",
    },
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInput = (e, idx) => {
    const { name, value } = e.target;
    // 리스트에서 중간에 있는 json값을 바꾸기 위한 새로운 함수 생성
    const newReq = curriculumReq?.map((el, index) => {
      if (idx === index) {
        // 시작일이 종료일 보다 늦을경우 알림창 띄워주는 로직
        if (name === "curriculumStartDate") {
          if (new Date(value) > new Date(el.curriculumEndDate)) {
            alert("시작일은 종료일보다 이전이어야 합니다.");
            return el;
          }
        }
        if (name === "curriculumEndDate") {
          if (new Date(el.curriculumStartDate) > new Date(value)) {
            alert("종료일은 시작일보다 이후이어야 합니다.");
            return el;
          }
        }
        return { ...el, [name]: value };
      }
      return el;
    });
    setCurriculumReq(newReq);
  };

  // 추가 버튼 클릭 시 커리큘럼 목록 생성
  const addCurriculumReq = () => {
    setCurriculumReq([
      ...curriculumReq,
      {
        curriculumStartDate: "",
        curriculumEndDate: "",
        skillSetName: "",
        teacherId: "",
      },
    ]);
  };

  // 삭제버튼 클릭 시 커리큘럼 목록 삭제
  const delCurriculumReq = (idx) => {
    const newReq = curriculumReq?.filter((el, index) => idx != index);
    setCurriculumReq(newReq);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(curriculumReq);
    dispatch(createCurriculum());
    if (status === "successed") {
      alert("커리큘럼 등록에 성공하였습니다.");
      navigate("/class/edit");
    } else alert("커리큘럼 등록에 실패하였습니다.");
  };

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">강의 내역</div>
        <div className="font-bold">커리큘럼</div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col text-center items-center"
        >
          <table className="w-11/12 border-collapse">
            <thead className="font-bold">
              <tr>
                <td>시작일</td>
                <td>종료일</td>
                <td>스킬셋</td>
                <td>담당 강사 ID</td>
              </tr>
            </thead>
            <tbody className="text-center">
              {curriculumReq?.map((el, idx) => (
                <tr key={idx} className="border-collapse">
                  <td>
                    <input
                      type="date"
                      className="w-full text-center border border-gray-500 rounded-md text-lg p-1"
                      name="curriculumStartDate"
                      value={el.curriculumStartDate}
                      onChange={(e) => setInput(e, idx)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="w-full text-center border border-gray-500 rounded-md text-lg p-1"
                      name="curriculumEndDate"
                      value={el.curriculumEndDate}
                      onChange={(e) => setInput(e, idx)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full text-center border border-gray-500 rounded-md text-lg p-1"
                      name="skillSetName"
                      value={el.skillSetName}
                      onChange={(e) => setInput(e, idx)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full text-center border border-gray-500 rounded-md text-lg p-1"
                      name="teacherId"
                      value={el.teacherId}
                      onChange={(e) => setInput(e, idx)}
                      required
                    />
                  </td>
                  <td
                    className="hover:cursor-pointer"
                    onClick={() => delCurriculumReq(idx)}
                    hidden={curriculumReq.length <= 1 && true}
                  >
                    <RiDeleteBinLine />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={addCurriculumReq}
            className="px-2 py-1 my-5 bg-sky-200 border border-black rounded-md text-sm font-bold hover:bg-sky-100"
          >
            추가
          </button>
          <button className="px-5 py-3 my-5 bg-yellow-300 border rounded-md text-sm font-bold shadow-md shadow-gray-200 hover:bg-yellow-200 focus:shadow-none">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default CurriculumCreateForm;
