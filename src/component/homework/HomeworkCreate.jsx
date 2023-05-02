import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createHomework } from "../../store/homework/homeworkSlice";
import { getSkillSetList } from "../../store/skillSet/skillSetSlice";
import ImgUpload from "../../imageUpload/ImgUpload";
import { api } from "../../api/api";

const HomeworkCreate = () => {
  const { status } = useSelector((state) => state.homework);
  const skillsetList = useSelector((state) => state.skillSet.data);
  const curriculumId = useLocation().state;
  const [request, setRequest] = useState({
    curriculumId: curriculumId,
    homeworkQuestionTitle: "",
    homeworkQuestionContent: "",
    homeworkQuestionStartDate: "",
    homeworkQuestionEndDate: "",
    homeworkQuestionImage: "",
    skillSetId: 0,
  });
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSkillSetList());
  }, []);

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

  const fileChange = async (e) => {
    e.preventDefault();
    const requestFile = new FormData();
    const fileReader = new FileReader();
    const fileValue = e.target.files[0];
    if (fileValue) {
      setFile({ ...file, loaded: "loading" });
      fileReader.readAsDataURL(fileValue);
    }
    fileReader.onload = () => {
      setFile({
        file: e.target.files[0],
        fileName: e.target.files[0].name,
        fileURL: fileReader.result,
        loaded: true,
      });
    };
    requestFile.append("file", fileValue);
    try {
      const response = await api("POST", "/upload", requestFile);
      setRequest({ ...request, homeworkQuestionImage: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const insertImage = () => {
    setFile({ file: "", fileName: "", fileURL: "", loaded: false });
  };

  const delFile = () => {
    setFile(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    dispatch(createHomework(request));
  };

  useEffect(() => {
    if (status === "successed" && request.homeworkQuestionTitle !== "") {
      alert("과제 등록에 성공하였습니다.");
      navigate("/homework");
    } else if (status === "failed" && request.homeworkQuestionTitle !== "")
      alert("과제 등록에 실패하였습니다.");
  }, [status]);

  console.log(file);
  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">과제 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <div className="flex flex-col w-1/5 my-3">
              <label htmlFor="skillSet" className="font-bold w-full">
                스킬셋
                <select
                  className="w-full text-center border border-gray-500 rounded-md text-lg p-1"
                  id="skillSet"
                  name="skillSetId"
                  value={request.skillSetId}
                  onChange={setInput}
                  required
                >
                  {skillsetList?.map((el, idx) => (
                    <option
                      key={idx}
                      value={el.id}
                      onChange={(e) => setInput(e, idx)}
                    >
                      {el.skillSetName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label htmlFor="homeworkQuestionTitle" className="font-bold">
              {"과제명"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"homeworkQuestionTitle"}
              id={"homeworkQuestionTitle"}
              value={request.homeworkQuestionTitle}
              onChange={setInput}
              required
            />
            <label htmlFor="homeworkQuestionContent" className="font-bold mt-3">
              {"내용"}
            </label>
            <textarea
              className="resize-none border-2 border-gray-400 p-1 rounded-lg text-xl h-40"
              type="textarea"
              name={"homeworkQuestionContent"}
              id={"homeworkQuestionContent"}
              value={request.homeworkQuestionContent}
              onChange={setInput}
              required
            />
          </div>
        </div>

        <div className="flex flex-col my-2 w-10/12">
          <div className="font-bold">강의 기간</div>
          <div className="flex justify-between">
            <div className="flex flex-col w-2/5">
              <label htmlFor="homeworkQuestionStartDate" className="font-bold">
                시작일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="homeworkQuestionStartDate"
                id="homeworkQuestionStartDate"
                value={request.homeworkQuestionStartDate}
                onChange={setInput}
                required
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label htmlFor="homeworkQuestionEndDate" className="font-bold">
                종료일
              </label>
              <input
                type="date"
                className="border-2 border-gray-400 p-1 rounded-lg text-xl"
                name="homeworkQuestionEndDate"
                id="homeworkQuestionEndDate"
                value={request.homeworkQuestionEndDate}
                onChange={setInput}
                required
              />
            </div>
          </div>
          {file === null ? (
            <div className="flex justify-center">
              <button
                id="insertImage"
                className="text-sm font-bold bg-yellow-200 mx-2 mt-3 py-3 px-5 rounded-md shadow-sm shadow-cyan-900 hover:cursor-pointer focus:shadow-none"
                type="button"
                onClick={insertImage}
              >
                파일 등록
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <div className="flex flex-col justify-center">
                <ImgUpload
                  file={file.file}
                  loaded={file.loaded}
                  delFile={delFile}
                  fileURL={file.fileURL}
                  fileChange={fileChange}
                />
              </div>
            </div>
          )}
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
