import QNA from "./QNA";
import {
  deleteNotification,
  getNotification,
} from "../../store/notification/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
const QNADetail = () => {
  const { userId } = useSelector((state) => state.admin.data);
  const { bootcampId, notificationId } = useParams();
  const { detailData, status, error } = useSelector(
    (state) => state.notification
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNotification(notificationId));
  }, []);

  const onDeleteNotification = () => {
    dispatch(deleteNotification(notificationId));
    alert("공지사항 삭제 성공.");
    navigate(`/notification/${bootcampId}`);
  };

  const [request, setRequest] = useState({
    commentContents: "",
  });
  const setInput = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(request, notificationId);
    const response = await api(
      "POST",
      `class/comment/${notificationId}`,
      request
    );
    window.location.reload();
  };

  useEffect(() => {
    if (status === "successed" && request.commentContents !== "") {
      alert("댓글 등록에 성공하였습니다.");
      navigate(`/notification/${bootcampId}/${notificationId}`);
    } else if (status === "failed" && request.commentContents !== "")
      alert("댓글 등록에 실패하였습니다.");
  }, [status]);

  return (
    detailData && (
      <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="text-center font-bold text-3xl mt-10">공지사항</div>
        <div className="flex flex-col items-center my-5 w-full">
          <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
            <div className="flex w-full">
              <div className="mt-2 w-1/3">
                제목
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {detailData.postTitle}
                </div>
              </div>
              <div className="mt-2 w-1/3">
                작성일
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {detailData.postCreateAt}
                </div>
              </div>
              <div className="mt-2 w-1/3">
                작성자
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {detailData.writerName}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
            <div className="flex w-full">
              <div className="mt-2 w-1/2">
                조회수
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {detailData.viewCount}
                </div>
              </div>
              {}
              <div className="mt-2 w-1/2">
                <br />
                {userId == detailData.writerId && (
                  <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                    <button onClick={onDeleteNotification}>삭제</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-10/12 font-bold mt-3">
            내용
            <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
              {detailData.postContent}
            </div>
          </div>
          <div className="flex flex-col w-10/12 font-bold mt-3">
            댓글
            <form
              onSubmit={onSubmit}
              className="flex flex-col h-4/5 items-center"
            >
              <div className="flex flex-col w-12/12 h-30 font-bold mt-3">
                댓글추가
                <label htmlFor="commentContents" className="font-bold">
                  {"내용"}
                </label>
                <textarea
                  className="border-2  border-gray-400 p-1 
              rounded-lg text-xl h-32 "
                  type="text"
                  name={"commentContents"}
                  id={"commentContents"}
                  value={request.commentContents}
                  onChange={setInput}
                  required
                />
                <button
                  className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold shadow-md
         shadow-gray-400 hover:bg-yellow-200 focus:shadow-none"
                >
                  댓글등록
                </button>
              </div>
            </form>
            <ul role="list" className="divide-y divide-gray-100">
              {detailData.commentList?.map((el) => (
                <li key={el.id} className="flex justify-between gap-x-6 py-5">
                  <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <br />
                        내용: {el.commentContents}
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        댓글 작성자: {el.writerName}
                        <br />
                        작성일: {el.commentCreateAt}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default QNADetail;
