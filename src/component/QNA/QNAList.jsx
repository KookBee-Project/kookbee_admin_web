import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getQNAList } from "../../store/notification/notificationSlice";
import { useEffect } from "react";

const QNAList = () => {
  // 부트캠프Id로 물품목록 불러오기
  // 이건 임시데이터
  const { data, status, error } = useSelector((state) => state.notification);
  const { bootcampId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getQNAList(bootcampId));
  }, []);
  console.log(data);
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">Q&N</div>
        <ul role="list" className="divide-y divide-gray-100">
          {data.map((el) => (
            <li key={el.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <Link to={`/QNA/${bootcampId}/${el.id}`}>
                    <p className="text-m  font-bold leading-6 text-gray-900">
                      {el.postTitle}
                    </p>
                  </Link>

                  <br />
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {/* 이부분은 백에서 전달할때 response 에서 짜르는걸로... */}
                    {/* 자름 */}
                    {el.postContent}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  작성자: {el.writerName}
                  <br />
                  작성일: {el.postCreateAt}
                  <br />
                  조회수: {el.viewCount}
                  <br />
                  댓글수: {el.commentCount}
                </p>
              </div>
              <img
                className="h-24 w-20 flex-none bg-gray-50"
                src={
                  "https://storage.googleapis.com/kookbee-test-strorage/" +
                  el.fileUUID
                }
                alt=""
              />
            </li>
          ))}
        </ul>
        <Link to={`/QNA/insert/${bootcampId}`}>
          <button
            className="px-5 py-3 my-5 bg-yellow-300 border rounded-xl text-xl font-bold 
        shadow-md shadow-gray-400 hover:bg-yellow-200 focus:shadow-none right"
          >
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QNAList;
