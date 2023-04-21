import { Link } from "react-router-dom";

const NotificationList = () => {
  // 부트캠프Id로 물품목록 불러오기
  // 이건 임시데이터
  const bootcampId = "1";

  const dataList = [
    {
      notificationId: 1,
      notificationTitle: "5월1일 컴백관련공지사항",
      notificationContent:
        "안녕하세요! 5월 1일 컴백하는 르세라핌 많이 사랑해주세요!",
      notificationWriter: "채원 매니져",
      notificationDate: "2023-04-16",
      notificationLikeCounts: 100,
      notificationRepleCounts: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      notificationId: 2,
      notificationTitle: "5월1일 공방관련 공지사항",
      notificationContent: "공방참여시 응원봉 필수입니다",
      notificationWriter: "쿠라 센세",
      notificationDate: "2023-04-16",
      notificationLikeCounts: 100,
      notificationRepleCounts: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      notificationId: 3,
      notificationTitle: "5월1일 컴백관련공지사항",
      notificationContent:
        "안녕하세요! 5월 1일 컴백하는 르세라핌 노래 많이 들어주세요!",
      notificationWriter: "강주하 매니져",
      notificationDate: "2023-04-16",
      notificationLikeCounts: 100,
      notificationRepleCounts: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      notificationId: 4,
      notificationTitle: "5월1일 컴백관련공지사항",
      notificationContent: "몸 건강하세요",
      notificationWriter: "제니퍼 허 매니져",
      notificationDate: "2023-04-16",
      notificationLikeCounts: 100,
      notificationRepleCounts: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      notificationId: 5,
      notificationTitle: "5월1일 컴백관련공지사항",
      notificationContent: "밥 잘 챙겨먹으세여",
      notificationWriter: "은채 매니져",
      notificationDate: "2023-04-16",
      notificationLikeCounts: 100,
      notificationRepleCounts: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center w-full h-5/6 mt-10">
        <div className="text-center font-bold text-3xl">공지사항</div>
        <ul role="list" className="divide-y divide-gray-100">
          {dataList.map((data) => (
            <li
              key={data.notificationId}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-m  font-bold leading-6 text-gray-900">
                    {data.notificationTitle}
                  </p>
                  <br />
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {/* 이부분은 백에서 전달할때 response 에서 짜르는걸로... */}
                    {data.notificationContent.substring(0, 20) + "..."}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {data.notificationWriter}
                  <br />
                  {data.notificationDate}
                  <br />
                  좋아요수: {data.notificationLikeCounts}
                  <br />
                  댓글수: {data.notificationRepleCounts}
                </p>
              </div>
              <img
                className="h-24 w-24 flex-none bg-gray-50"
                src={data.imageUrl}
                alt=""
              />
            </li>
          ))}
        </ul>
        <Link to={"/notification/insert"}>
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

export default NotificationList;
