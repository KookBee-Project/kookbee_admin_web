import Notification from "./Notification";
import { getNotification } from "../../store/notification/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const NotificationDetail = () => {
  const postId = "1";
  const { data, status, error } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getNotification(postId));
  }, []);
  console.log(data);
  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">공지사항</div>
      <div className="flex flex-col items-center my-5 w-full">
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          <div className="flex w-full">
            <div className="mt-2 w-1/3">
              제목
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.postTitle}
              </div>
            </div>
            <div className="mt-2 w-1/3">
              작성일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.postCreateAt}
              </div>
            </div>
            <div className="mt-2 w-1/3">
              작성자
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.writerId}
                {/* 추후에 이름으로 바꿀것 */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              좋아요 수
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                5{/* 임시 데이터 추후에 table 바꾸면서 적용 예정 */}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              조회수
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                5{/* 이것도 추후에 */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          내용
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
            {data.postContent}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          댓글
          {/* 맵으로 돌려서 댓글 띄우기 
          이부분 디자인 다시하자*/}
          <div className="flex flex-col w-12/12 font-bold mt-3">
            댓글추가
            <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
              {data.postContent}
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {data.commentList.map((el) => (
              <li key={el.id} className="flex justify-between gap-x-6 py-5">
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <br />
                      {el.commentContents}
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {el.writerId}
                      {/* 작성자 이름으로 바꾸기 */}
                      <br />
                      {el.commentCreateAt}
                      <br />
                      좋아요수: 50
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
