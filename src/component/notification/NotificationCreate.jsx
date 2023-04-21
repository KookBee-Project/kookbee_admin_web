import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createHomework } from "../../store/homework/homeworkSlice";

const NotificationCreate = () => {
  const { data, status, error } = useSelector((state) => state.homework);
  const [request, setRequest] = useState({
    notificationTitle: "",
    notificationContent: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInput = (e) => {
    const { name, value } = e.target;
    const today = new Date();
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request);
    dispatch(createHomework(request));
    if (status === "successed") {
      alert("물품 등록에 성공하였습니다.");
      navigate("/notification");
    } else alert("공지사항 등록에 실패하였습니다.");
  };
  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">공지사항 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <label htmlFor="notificationTitle" className="font-bold">
              {"제목"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"notificationTitle"}
              id={"notificationTitle"}
              value={request.notificationTitle}
              onChange={setInput}
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-center my-5 w-full ">
          <div className="flex flex-col w-10/12">
            <label htmlFor="notificationContent" className="font-bold">
              {"내용"}
            </label>
            <textarea
              className="border-2  border-gray-400 p-1 
              rounded-lg text-xl h-72 "
              type="text"
              name={"notificationContent"}
              id={"notificationContent"}
              value={request.notificationContent}
              onChange={setInput}
              required
            />
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

export default NotificationCreate;
