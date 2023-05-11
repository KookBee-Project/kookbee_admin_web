import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createNotification } from "../../store/notification/notificationSlice";
import { api } from "../../api/api";

const QNACreate = () => {
  const { status, error } = useSelector((state) => state.notification);
  const [request, setRequest] = useState({
    postTitle: "",
    postContent: "",
    postType: "NOTIFICATION",
    fileUUID: "",
  });

  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bootcampId } = useParams();

  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createNotification(request));
  };

  useEffect(() => {
    if (status === "successed" && request.postTitle !== "") {
      alert("Q&N 등록에 성공하였습니다.");
      navigate(`/QNA/${bootcampId}`);
    } else if (status === "failed" && request.postTitle !== "")
      alert("Q&N 등록에 실패하였습니다.");
  }, [status]);

  const onClickFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    alert("업로드성공");
    const response = await api("POST", "/upload", formData);
    console.log(response.data);

    setRequest({ ...request, fileUUID: response.data });

    // 데이터를 백에 넘겨줌
    // 디스페치로 파일 서비스에 요청 보냄
  };
  const setFileData = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">Q&N 등록</div>
      <form onSubmit={onSubmit} className="flex flex-col h-4/5 items-center">
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12">
            <label htmlFor="postTitle" className="font-bold">
              {"제목"}
            </label>
            <input
              className="border-2 border-gray-400 p-1 rounded-lg text-xl"
              type="text"
              name={"postTitle"}
              id={"postTitle"}
              value={request.postTitle}
              onChange={setInput}
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-center my-5 w-full ">
          <div className="flex flex-col w-10/12">
            <label htmlFor="postContent" className="font-bold">
              {"내용"}
            </label>
            <textarea
              className="border-2  border-gray-400 p-1 
              rounded-lg text-xl h-72 "
              type="text"
              name={"postContent"}
              id={"postContent"}
              value={request.postContent}
              onChange={setInput}
              required
            />
            <label
              htmlFor="setFileData"
              className="text-sm font-bold bg-yellow-200 mx-2 mt-3 py-3 px-5 rounded-md shadow-sm shadow-cyan-900 hover:cursor-pointer focus:shadow-none"
            >
              {"파일선택"}
              <input
                className="hidden"
                id="setFileData"
                type="file"
                name="file"
                onChange={setFileData}
              />
              <input
                className="border-2 p-5 border-black"
                type="button"
                name="button"
                value="button"
                onClick={onClickFile}
              />{" "}
            </label>
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

export default QNACreate;
