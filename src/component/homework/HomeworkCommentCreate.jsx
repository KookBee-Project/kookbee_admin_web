import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createHomeworkComment } from "../../store/homework/homeworkSlice";

const HomeworkCommentCreate = () => {
  const { data, status, error } = useSelector((state) => state.homework);
  const [request, setRequest] = useState({
    homeworkRating: "",
    homeworkRatingComment: "",
  });

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    if (
      request.homeworkRating === "" ||
      request.homeworkRating === "- 등급선택 -"
    ) {
      alert("과제 등급을 지정해주세요!");
    } else {
      dispatch(createHomeworkComment(request));
      if (status === "successed") {
        alert("과제 평가 등록에 성공하였습니다.");
        navigate("/homework");
      } else alert("과제 평가 등록에 실패하였습니다.");
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex w-10/12">
      <form onSubmit={onSubmit} className="flex h-4/5 w-full items-center">
        <div className="flex flex-col my-5 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="homeworkRatingComment" className="font-bold mt-3">
              {"코멘트"}
            </label>
            <textarea
              className="resize-none border-2 border-yellow-200 p-1 rounded-lg text-xl h-40"
              type="textarea"
              name={"homeworkRatingComment"}
              id={"homeworkRatingComment"}
              value={request.homeworkRatingComment}
              onChange={setInput}
              required
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="homeworkRating" className="font-bold mt-3">
              {"결과"}
            </label>
            <select
              id="homeworkRating"
              name="homeworkRating"
              className="border-2 border-yellow-200 p-1 rounded-lg text-base"
              onChange={setInput}
            >
              <option>- 등급선택 -</option>
              <option>상</option>
              <option>중</option>
              <option>하</option>
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
