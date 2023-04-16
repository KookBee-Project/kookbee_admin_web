import { useState } from "react";

const ClassEditCurriculumForm = ({ mode, curriculumReq, setCurriculumReq }) => {
  const setInput = (e, idx) => {
    const { name, value } = e.target;
    console.log(value);
    const newReq = curriculumReq?.map((el, index) => {
      if (idx === index) {
        if (name === "curriculumStartDate") {
          if (new Date(value) > new Date(el.curriculumEndDate)) {
            alert("시작일은 종료일보다 이전이어야 합니다.");
            return el;
          }
        }
        if (name === "curriculumEndDate") {
          if (new Date(el.curriculumStartDate) > new Date(value)) {
            alert("시작일은 종료일보다 이전이어야 합니다.");
            return el;
          }
        }
        return { ...el, [name]: value };
      }
      return el;
    });
    console.log(newReq);
    setCurriculumReq(newReq);
  };

  const addcurriculumReq = () => {
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

  return (
    <div className="table content-center items-center text-center w-10/12">
      <div>커리큘럼</div>
      <div className="border border-black">
        <table className="w-full border-collapse">
          <thead>
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
                    className="w-full text-center border border-black"
                    name="curriculumStartDate"
                    value={el.curriculumStartDate}
                    onChange={(e) => setInput(e, idx)}
                    disabled={mode}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    className="w-full text-center border border-black"
                    name="curriculumEndDate"
                    value={el.curriculumEndDate}
                    onChange={(e) => setInput(e, idx)}
                    disabled={mode}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-full text-center border border-black"
                    name="skillSetName"
                    value={el.skillSetName}
                    onChange={(e) => setInput(e, idx)}
                    disabled={mode}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-full text-center border border-black"
                    name="teacherId"
                    value={el.teacherId}
                    onChange={(e) => setInput(e, idx)}
                    disabled={mode}
                    required
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={addcurriculumReq}
          className="px-1 py-1 my-5 bg-yellow-300 border border-black rounded-md text-sm font-bold hover:bg-yellow-200 focus:shadow-none"
          hidden={mode === "disabled" ? true : false}
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default ClassEditCurriculumForm;
