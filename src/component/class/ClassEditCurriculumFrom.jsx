import { RiDeleteBinLine } from "react-icons/ri";

const ClassEditCurriculumForm = ({
  mode,
  curriculumReq,
  setCurriculumReq,
  bootcampStartDate,
  bootcampEndDate,
}) => {
  // 서버에서 skillsetData 불러와야 됨
  const skillsetList = ["JAVA", "ML", "PYTHON"];

  const setInput = (e, idx) => {
    const { name, value } = e.target;
    // 리스트에서 중간에 있는 json값을 바꾸기 위한 새로운 함수 생성
    const newReq = curriculumReq?.map((el, index) => {
      if (idx === index) {
        // 시작일 검증
        if (name === "curriculumStartDate") {
          if (new Date(value) > new Date(el.curriculumEndDate)) {
            alert("시작일은 종료일보다 이전이어야 합니다.");
            return el;
          } else if (new Date(value) < new Date(bootcampStartDate)) {
            alert("강의 시작일보다 이후이어야 합니다.");
            return el;
          }
        }
        // 종료일 검증
        if (name === "curriculumEndDate") {
          if (new Date(el.curriculumStartDate) > new Date(value)) {
            alert("종료일은 시작일보다 이후이어야 합니다.");
            return el;
          } else if (new Date(value) > new Date(bootcampEndDate)) {
            alert("강의 종료일보다 이전이어야 합니다.");
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

  return (
    <div className="table content-center items-center w-10/12">
      <div className="font-bold">커리큘럼</div>
      <div className="border border-black text-center">
        <table className="w-full border-collapse">
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
                  <select
                    className="w-full text-center border border-black"
                    onChange={(e) => setInput(e, idx)}
                    name="skillSetName"
                    value={el.skillSetName}
                    disabled={mode}
                    required
                  >
                    {skillsetList?.map((el, idx) => (
                      <option
                        key={idx}
                        value={el}
                        onChange={(e) => setInput(e, idx)}
                      >
                        {el}
                      </option>
                    ))}
                  </select>
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
                <td
                  className="hover:cursor-pointer"
                  onClick={() => delCurriculumReq(idx)}
                  hidden={mode === "disabled" ? true : false}
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
          className="px-1 py-1 my-5 bg-yellow-300 border border-black rounded-md text-sm font-bold hover:bg-yellow-200"
          hidden={mode === "disabled" ? true : false}
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default ClassEditCurriculumForm;
