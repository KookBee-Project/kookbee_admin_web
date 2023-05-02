import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createHomeworkComment } from "../../store/homework/homeworkSlice";

const HomeworkCommentCreate = ({ homeworkAnswerId }) => {
  const { createStatus } = useSelector((state) => state.homework);
  const [request, setRequest] = useState({
    homeworkAnswerId: homeworkAnswerId,
    homeworkAnswerScore: "",
    homeworkAnswerComment: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    if (
      request.homeworkAnswerScore === "" ||
      request.homeworkAnswerScore === "- 등급선택 -"
    ) {
      alert("과제 등급을 지정해주세요!");
    } else dispatch(createHomeworkComment(request));
  };

  useEffect(() => {
    if (createStatus === "successed" && request.homeworkAnswerComment !== "") {
      alert("과제 평가 등록에 성공하였습니다.");
      navigate("/homework");
    } else if (
      createStatus === "failed" &&
      request.homeworkAnswerComment !== ""
    )
      alert("과제 평가 등록에 실패하였습니다.");
  }, [createStatus]);

  return (
    <div className="flex w-10/12">
      <form onSubmit={onSubmit} className="flex h-4/5 w-full items-center">
        <div className="flex flex-col my-5 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="homeworkAnswerComment" className="font-bold mt-3">
              {"코멘트"}
            </label>
            <textarea
              className="resize-none border-2 border-yellow-200 p-1 rounded-lg text-xl h-40"
              type="textarea"
              name={"homeworkAnswerComment"}
              id={"homeworkAnswerComment"}
              value={request.homeworkAnswerComment}
              onChange={setInput}
              required
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="homeworkAnswerScore" className="font-bold mt-3">
              {"결과"}
            </label>
            <select
              id="homeworkAnswerScore"
              name="homeworkAnswerScore"
              className="border-2 border-yellow-200 p-1 rounded-lg text-base"
              onChange={setInput}
            >
              <option>- 등급선택 -</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none w-1/3"
            >
              코멘트 등록
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeworkCommentCreate;
